const User = require('../models/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Register function
const Register = async (req, res) => {
  
  try {
    const salt = await bcrypt.genSaltSync(10);
    const hashedPass = await bcrypt.hashSync(req.body.password, salt);
    const { username, email } = req.body;
    const newUser = new User({
      email,
      username,
      password: hashedPass,
    });
    const user = await newUser.save();
    // res.render('login');
    res.status(200).json(user);
  } catch (error) {
    console.log('error while submitting', { msg: error });
  }
};

// Login function
const Login = async(req, res) => {
  try {
    const user = await User.findOne({username: req.body.username})
    if(!user){
      return res.status(400).json({msg: "User Not Found!!!"});
    }
    const passCheck = await bcrypt.compareSync(req.body.password, user.password);
    if(!passCheck){
      return res.status(400).json({msg: "Invalid Credentials !!!"});
    }
    const {password , ...others} = user._doc;
    // res.render('index');
    res.status(200).json(others);

  } catch (err) {
    console.log('error while submitting', {msg: err});
  }
};

// Forgot password api
const ForgotPassword = async(req,res) => {
  try {
      const { email } = req.body;
      const user = await User.findOne({ email: email });
      if (!user) {
        return res.send('User not registered');
      }

      //creating a one time link validation link for 15mins
      const secret = process.env.JWT_SEC + user.password;
      const payload = {
        email: user.email,
        id: user._id,
      }

      const token = jwt.sign(payload, secret, {expiresIn: '5m'})
      const link = `http://localhost:8800/api/auth/resetPassword/${user._id}/${token}`;
      console.log(link);
      res.send("Reset link has been sent to your console");


  } catch (error) {
    res.status(500).json(error)
  }

}

const ResetPassword = async(req,res) => {
  try {
    const {id,token} = req.params;

    // checking the user is vaid or not
    const user = await User.findById(id);
    if(id !== user._id){
      res.send("Invalid User")
    }

    const secret = process.env.JWT_SEC + user.password;
    try {
      const payload = jwt.verify(secret,token);
      res.render('resetPassword')
    } catch (error) {
      res.status(500).json(error)
    }

  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = { Login, Register, ForgotPassword, ResetPassword };
