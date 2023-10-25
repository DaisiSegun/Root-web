const router = require("express").Router();
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");
const User = require("../models/Product");
router.get("/view-single/:id", async (req, res) => {
  try {
    // Find the product by id
    let product = await User.findById(req.params.id);
    
    if (!product) {
      // If the product is not found, return a 404 response
      return res.status(404).json({ message: "Product not found" });
    }

    // Return the product data
    res.status(200).json(product);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
router.get("/search-products", async (req, res) => {
  const { query } = req.query; // Get the search query from the request query parameters

  try {
    // Use a regular expression to perform a case-insensitive search for products
    const products = await User.find({
      name: { $regex: new RegExp(query, "i") },
    });

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});
const { verifyUserToken, IsUser, IsAdmin } = require('../middlewares/auth')

router.get("/view-all", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let products;

    if (qNew) {
      products = await User.find().sort({ createdAt: -1 }).limit(1);
    } else if (qCategory) {
      products = await User.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else {
      products = await User.find();
    }

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.use(verifyUserToken)

router.post("/create-product", IsAdmin, upload.single("image"), async (req, res) => {
  try {
    // Upload image to cloudinary
    const result = await cloudinary.uploader.upload(req.file.path);

    const { name, price, stock, category, description } = req.body;

    // Create new user
    let user = new User({
      name,
      price,
      description,
      stock:{ski: stock},
      category,
      avatar: result.secure_url,
      cloudinary_id: result.public_id,
    });
    // Save user
    await user.save();
    res.json(user);
  } catch (err) {
    console.log(err);
  }
});

//  router.post('/create-product', IsAdmin, productController.create-product);

{/* no vex 
router.get("/view-all", async (req, res) => {


  try {
    let user = await User.find();
    res.json(user);
  } catch (err) {
    console.log(err);
  }
});
*/}



router.delete("/remove-product/:id", IsAdmin, async (req, res) => {
  try {
    // Find user by id
    let user = await User.findById(req.params.id);
    // Delete image from cloudinary
    await cloudinary.uploader.destroy(user.cloudinary_id);
    // Delete user from db
    await user.remove();
    res.json(user);
  } catch (err) {
    console.log(err);
  }
});

router.put("/chnage-image/:id", IsAdmin, upload.single("image"), async (req, res) => {
  try {
    let user = await User.findById(req.params.id);
    // Delete image from cloudinary
    await cloudinary.uploader.destroy(user.cloudinary_id);
    // Upload image to cloudinary
    let result;
    if (req.file) {
      result = await cloudinary.uploader.upload(req.file.path);
    }
    const data = {
      name: req.body.name || user.name,
      avatar: result?.secure_url || user.avatar,
      cloudinary_id: result?.public_id || user.cloudinary_id,
    };
    user = await User.findByIdAndUpdate(req.params.id, data, { new: true });
    res.json(user);
  } catch (err) {
    console.log(err);
  }
});



module.exports = router;