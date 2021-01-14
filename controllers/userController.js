const User = require("../models/User");
const Post = require("../models/Post");
const getRegisterPage = async (req, res, next) => {
  res.render("signUp");
};
const registerUser = async (req, res, next) => {
  console.log(req.body);
  const { userName, password } = req.body;
  console.log(userName, password);
  const newUser = await User.create({
    userName,
    password,
  });
  res.json(newUser);
};
const loginUser = async (req, res, next) => {
  const { userName, password } = req.body;
  const user = await User.findOne({
    where: {
      userName,
    },
  });
  const passwordCorrect = user.checkPassword(password);
  console.log(passwordCorrect);
  if (passwordCorrect) {
    console.log(user);
    req.session.user_id = user.id;
    req.session.userName = userName;
    // add in .then that adds the req body info plus the id to the req session.
    //console log the user in the findOne situation
    res.json(user);
  }
};
const getLoginPage = async (req, res, next) => {
  res.render("login");
};
const logOutUser = async (req, res, next) => {console.log(req.session);
  req.session.destroy(function(err) {
    console.log("session destroyed");
    res.redirect("/")
  })
};
const getDashboardPage = async (req, res, next) => {

 const response =  await Post.findAll({
   where: {
     userId: req.session.user_id 

   },
   raw: true
 })
 const dataObject = {posts: response}
console.log(dataObject);
  res.render("dashboard", dataObject);
};
module.exports = {
  getRegisterPage,
  registerUser,
  loginUser,
  getLoginPage,
  logOutUser,
  getDashboardPage
};
