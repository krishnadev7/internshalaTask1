const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const bodyParser = require('body-parser')

const app = express();
const PORT = process.env.PORT || 8800
dotenv.config();
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// importing Routes components
const loginRoute = require('./routes/auth');
const postRoute = require('./routes/post')



// routes for login and register function
app.use('/api/auth', loginRoute);

// routes for posts
app.use('/api/post', postRoute);




// Routes for ejs pages
app.get('/',(req,res) => {
    res.render("index.ejs")
})

app.get('/login', (req,res) => {
    res.render("login.ejs")
})

app.get('/register', (req,res) => {
    res.render("register.ejs")
})

app.get('/forgot-password', (req,res) => {
    res.render("forgotPassword.ejs")
})

app.get('/resetPassword', (req,res) => {
    res.render("resetPassword")
})

// MongoDb connection
const Connect = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('MongoDB connected');
    } catch (error) {
        throw  error;
    }
}

app.listen(PORT , () => {
    Connect();
    console.log(`server started on PORT ${PORT}`);
})