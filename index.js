const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const bodyParser = require('body-parser')

const app = express();
const PORT = process.env.PORT || 8800
dotenv.config();
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));

// importing Routes components
const loginRoute = require('./routes/auth');
const postRoute = require('./routes/post')



// routes for login and register function
app.use('/api/auth', loginRoute);

// routes for posts
app.use('/api/post', postRoute);



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