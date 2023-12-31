const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Otp = require('../models/Otp')
const bcrypt = require('bcrypt');
const axios = require('axios')
const Cart = require('../models/Cart')
const cookieParser = require('cookie-parser');


function generateRandomSixDigitNumber() {
  const min = 100000; // Minimum value (inclusive)
  const max = 999999; // Maximum value (inclusive)
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomNumber = generateRandomSixDigitNumber();

exports.register = async (req, res, next) => {
    try {
      const { fullName, email,} = req.body;
      let { password, confirmPassword } = req.body;
      let { phoneNumber, confirmPhoneNumber } = req.body;

      if (password !== confirmPassword) {
        return res.status(400).json({ error: 'Passwords do not match' });
      }
      if (phoneNumber!== confirmPhoneNumber) {
        return res.status(400).json({ error: 'Phone number do not match' });
      }
      if (typeof phoneNumber !== 'string') {
        // Check if phoneNumber is not a string
        return res.status(400).json({ error: 'Invalid phone number format.' });
      }
      
      if (phoneNumber.length > 14) {
        // Check if the length of phoneNumber as a string is greater than 14
        return res.status(400).json({ error: 'Phone number is too long. or replace 1st 0 with +234  ' });
      }
      // if (phoneNumber.length < 14) {
      //   // Check if the length of phoneNumber as a string is greater than 14
      //   return res.status(400).json({ error: 'Phone number is too short. or replace 1st 0 with +234 ' });
      // }
  
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      password = hashedPassword;
      confirmPassword = 'xxxxxxxxx';
      role = 0
  
      let registeredUser ={};
      // Create a new user instance
     if (role == 0){
      const user = new User({
        fullName,
        email,
        password,
        phoneNumber,
        confirmPassword,
        confirmPhoneNumber,
        role
      });

      // Save the user to the database using await
      registeredUser = await user.save();

      const cart =  new Cart({
        user: registeredUser._id,
        total: 0
      })

      await cart.save();

      console.log(`this is it : ${cart._id}`)
     }

     else if (role ==1){
      const user = new User({
        fullName,
        email,
        password,
        phoneNumber,
        confirmPassword,
        confirmPhoneNumber,
        role
      });

      // Save the user to the database using await
      registeredUser = await user.save();
      
     }
  
      // Generate an access token using jwt.sign
      const payload = { id: registeredUser._id, email, role, phoneNumber};
      const token = jwt.sign(payload, process.env.JWT_TOKEN);
  
      // Respond with the token
      res.cookie('authcookie', token, {
        maxAge:900000,
        httpOnly:true
    }
    
    )
        res.status(200).json({message:"Registered successfully ", name: fullName})
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Server error' });
    }
  };

  exports.login = async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
  
      if (!user) {
        return res.status(401).json({ message: "User not found" });
      }
  
      const validPass = await bcrypt.compare(req.body.password, user.password);
  
      if (!validPass) {
        return res.status(401).json({ error: "Mobile/Email or Password is wrong" });
      }
  
      // Create and assign token
      const payload = { id: user._id, email: user.email, role: user.role, phoneNumber: user.phoneNumber};
      const token = jwt.sign(payload, process.env.JWT_TOKEN);
  
      res.cookie('authcookie', token, {
        maxAge: 90000000,
        httpOnly: true
      });
  
      res.status(200).json({ message: "Logged in", name: user.fullName, userRole: user.role});
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  };
  

exports.userEvent = (req, res) => {
    res.status(200).json({message:"user event accessed by user"})
}

exports.adminEvent = (req,res) => {
    res.status(200).json({message:"admin event accessed by admin"})
}

exports.otpEvent = async (req,res) => {
    const token = req.cookies.authcookie;
    const decoded = jwt.verify(token, process.env.JWT_TOKEN);
    req.user = decoded;
    const hh = decoded;
    console.log(decoded);
    const otp = randomNumber

    const user = await User.findOne({ email: hh.email})
    const email = hh.email;
    const phoneNumber = hh.phoneNumber;

    const sendMessage = async (msg, ...phoneNumber) => {
        const requestBody = {
        from: process.env.SINCH_NUMBER,
        to: phoneNumber,
        body: msg
    };

    const headers = {
        Authorization: `Bearer ${process.env.API_TOKEN}`,
        "Content-Type": "application/json"
    };

    try {
        const response = await axios({
          url: process.env.API_URL,
          method: "post",
          headers: headers,
          data: requestBody
        })

        console.log(response.data); 
    } catch (error) {
      throw new Error("something went wrong: ", error);
    }
    }

    const pass = new Otp ({
      email: email,
      phoneNumber: phoneNumber,
      oneTP: otp
    })

    await pass.save();

    sendMessage(`your otp has been sent ${otp}`, phoneNumber)
    .then(res.status(200).send(`Your otp has been sent`))
    .catch(err => res.status(400).send(`problem sending otp ${err}`))
    
}

exports.verifyOtp = async (req,res) => {
    const token = req.cookies.authcookie;
    const decoded = jwt.verify(token, process.env.JWT_TOKEN);
    req.user = decoded;
    const hh = decoded;

    console.log (hh)

    const otp = await Otp.findOne({ email: hh.email})
    console.log(otp)
    typedOtp = req.body.typedOtp
    checkOtp = otp.oneTP

    if (checkOtp == typedOtp) {
      
      otp.deleteOne({ email: hh.email}, (err) => {
        if (err) {
          console.log(err)
        }
        else {
          console.log('valid otp done and fghj')
          res.status(200).send("valid otp")
        }
      })
    }

    else {
      res.status(400).send("invalid")
    }
}
exports.logout = (req, res) => {
  try {
    // Clear the authentication cookie
    res.clearCookie('authcookie');

    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
}
