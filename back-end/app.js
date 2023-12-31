const mongoose = require('mongoose')
const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config({path:"./config.env"})
const cookieParser = require('cookie-parser');
const authRoute = require('./routes/index');
const productRoute = require('./routes/product')
const orderRoute = require('./routes/order')
const cartRoute = require('./routes/cart')
const paymentRoute = require('./routes/payment')
const controlRoute = require('./routes/control')
const bodyParser = require('body-parser');


app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());


// mongoose connection
// mongoose.connect(process.env.MONGO_URL).then((result) => {
//     console.log('----------------------------------------------')
//     console.log('conneted to mongo db alas')
//     app.listen(process.env.PORT,() => {
//         console.log('listening on port: ' + process.env.PORT)
//         console.log('----------------------------------------------')
//     })
// }).catch((err) => {
//     console.log('----------------------------------------------')
//     console.log('database connection failled. exiting now....')
//     console.log('----------------------------------------------')
//     console.log(err)
//     process.exit(1)
// })

// Route Middlewares
app.use('/api', authRoute);
app.use('/api2', productRoute);
app.use('/api', cartRoute);
app.use('/api', paymentRoute);
app.use('/api', orderRoute);
app.use('/api', controlRoute)