const {userSignInValidation, userSignUpValidation} = require("../Validation/user.validation");

const { User, Account } = require("../db/db");
const jwt = require("jsonwebtoken");

const getMe = async (req, res) => {
  const userId = req.userId;
  const user = await User.findOne({
    _id: userId,
  });
  if (user) {
    res.status(200).json({
      firstname: user.firstname,
      lastname: user.lastname,
    });
  } else {
    return res.status(411).json({
      message: "User not found",
    });
  }
};

const signUp = async (req, res) => {
  const { firstname, lastname, username, password } = req.body;
  const validation = userSignUpValidation({
    firstname,
    lastname,
    username,
    password,
  });
  if (!validation) return res.status(411).json({ message: "Incorrect inputs" });

  const userCheck = await User.findOne({
    username: username,
  });
  if (userCheck) {
    return res.status(411).json({
      message: "Username or email is already exists",
    });
  }

  const addUser = new User({
    firstname: firstname,
    lastname: lastname,
    username: username,
    password: password,
  });

  const money = 1 + Math.floor(Math.random() * 5000);
  const addAccount = new Account({
    userId: addUser._id,
    balance: money,
  });

  const token = jwt.sign({ userId: addUser._id }, process.env.JWT_SECRET);
  await addUser.save();
  await addAccount.save();
  res.status(201).json({
    message: "User created successfully",
    token: token,
    name: firstname + " " + lastname
  });
};

const signIn = async (req, res) => {
  const { username, password } = req.body;
  const validation = userSignInValidation({ username, password });
  if (!validation) {
    return res.status(411).json({
      message: "Incorrect inputs",
    });
  }
  const userCheck = await User.findOne({
    username: username,
    password: password,
  });
if (!userCheck){
    return res.status(411).json({ message: "Error while logging in" });
  }
  const token = jwt.sign({ userId: userCheck._id }, process.env.JWT_SECRET);
  res.status(201).json({
    message: "User logged in successfully",
    token: token,
    name: userCheck.firstname + " " + userCheck.lastname,
  });
};

const getAllUser = async (req, res) => {
  const filter = req.query.filter;
  const user = await User.find({
    $or: [
      {
        firstname: {
          $regex: filter,
        },
      }, //regex is for if anysubstring not only full string matches
      {
        lastname: {
          $regex: filter,
        },
      },
    ],
  });
  res.status(200).json({
    message: "Users fetched successfully",
    users: user,
  });
};


module.exports = {
  getMe,
  signUp,
  signIn,
  getAllUser
}