const jwt = require('jsonwebtoken');
const User = require('../models/User')
const Cart = require('../models/Cart')
const product = require('../models/Product')
const bcrypt = require('bcrypt')
const nodemailer = require('nodemailer');
const Product = require('../models/Product');

function generateRandomToken(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      token += characters[randomIndex];
    }
  
    return token;
  }

exports.update_user = async (req,res) => {
    try{
        const token = req.cookies.authcookie;
        if (!token) {
        return res.status(401).json({ error: 'User not authorized' });
        }

        const decoded = jwt.verify(token, process.env.JWT_TOKEN);
        req.user = decoded;

        const user = await User.findOne({ email: decoded.email });

        if (!user){
            res.status(400).send({'error': 'user not found'})
        }

        const {fullName, email, password, confirmPassword, phoneNumber} = req.body;

        if (fullName){
            user.fullName = fullName;
        }
        if (email){
            user.email = email;
        }
        if ((password !== "" && confirmPassword !== "" && password == confirmPassword)){
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            user.password = hashedPassword;
            user.confirmPassword = "xxxxxxxxxxxxxxxxxxxxx"
        }
        if (phoneNumber){
            user.phoneNumber = phoneNumber;
        }

        const registeredUser = await user.save();
        const payload = { id: registeredUser._id, email, role: user.role};
        const tokenr = jwt.sign(payload, process.env.JWT_TOKEN);
    
        // Respond with the token
        res.cookie('authcookie', tokenr, {
            maxAge:900000,
            httpOnly:true
        })

        res.status(200).send({'message': "update success"})

    }catch(err){
        console.log(err)
        res.status(400).send({'error': "cannot update user"})
    }
}

// forgot password logic
exports.verify_email = async (req, res) => {
    try{
        const { email } = req.body
     
        const user = await User.findOne({ email: email });
     
        if (!user){
            res.status(400).send({'error': "user not found"})
        }

        const token = generateRandomToken(8)
        user.confirmPassword = token
        
        const resetLink = `http://localhost:3000/createnewpassword?token=${token}`;

        // Create a transporter using Gmail and your email credentials
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
            user: 'rootsgotyou@gmail.com', // Replace with your Gmail email
            pass: 'ilkw cuej atbg oagk', // Replace with your Gmail password or app password
            },
            tls: {
            rejectUnauthorized: false, // Ignore certificate validation errors
            },
        });
        
        const mailOptions = {
            from: 'rootsgotyou@gmail.com', // Replace with your Gmail email
            to: `${user.email}`, // Replace with the recipient's email
            subject: 'recover password',
            html: `Click this <a href="${resetLink}">link</a> to reset your password.`,
        };
        // Send the email
        transporter.sendMail(mailOptions, async (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
                return res.status(400).json({ error: 'Email sending failed' });
            } else {
                console.log('Email sent:', info.response);
                
                try {
                    await user.save(); // Use await to handle Promise returned by user.save()
                    res.status(200).json({ message: 'Email has been sent successfully' });
                } catch (saveError) {
                    console.error('Error saving user:', saveError);
                    return res.status(400).json({ error: 'Failed to save user data' });
                }
            }
        });

    }catch(err){
        res.status(400).send({'error': "can't send email to this fellow"})
    }
}

exports.change_password = async (req,res) => {
    try{
        const {token, password, confirmPassword}= req.body
        const user = await User.findOne({ confirmPassword: token});
        if (!user){
            res.status(400).send({'error': "user not found"})
        }

        if  ((password !== '' && confirmPassword !== '') && (password == confirmPassword)){
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            password = hashedPassword;
            user.password = password
            await user.save()
        }

    }catch(err){
        res.status(400).send({'error': 'cannot change password'})
    }
}
exports.update_product = async (req, res) => {
    try {
        const token = req.cookies.authcookie;
        if (!token) {
            return res.status(400).json({ error: 'User is not authenticated' });
        }

        const decoded = jwt.verify(token, process.env.JWT_TOKEN);
        const user = await User.findOne({ email: decoded.email });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const productId = req.body.productId;   
        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        const { name, price, stock, category, description } = req.body;

        if (name) product.name = name;
        if (price) product.price = price;
        if (stock) product.stock = stock;
        if (category) product.category = category;
        if (description) product.description = description;

        if (req.file) {
            await cloudinary.uploader.destroy(product.cloudinary_id);
            const result = await cloudinary.uploader.upload(req.file.path);
            product.avatar = result.secure_url;
            product.cloudinary_id = result.public_id;
        }

        await product.save();
        res.status(200).json({ message: "Product updated successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
};
