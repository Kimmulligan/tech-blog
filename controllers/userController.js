const User = require("../models/User")
const getRegisterPage = async (req, res, next) => {
  res.render("homepage")
};
const registerUser = async (req, res, next) => {
  console.log(req.body);
  const {userName, password} = req.body
  const newUser = await User.create({
    userName,
    password
  })
  res.json(newUser)
};
const loginUser = async (req, res, next) => {
  const {userName, password} = req.body
  const user = await User.findOne({
    where: {
      userName,
      password
    }
  })
req.session.userId = user.id 
req.session.userName = userName
  // add in .then that adds the req body info plus the id to the req session.
  //console log the user in the findOne situation
  res.json(user)
};

module.exports = {
  getRegisterPage, registerUser,loginUser
};
