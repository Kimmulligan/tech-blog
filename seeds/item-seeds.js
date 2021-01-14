const sequelize = require('../config/connection');
const { Post, User } = require('../models');


const userData = [

  {
    userName: 'Kim1',
    password: "111"
  },
  {
    userName: 'Kim2',
    password: "111"
  },
  {
    userName: 'kim3',
    password: "111"
  },
]
const postData = [

{
  title: 'fun',
  content: 'tons',
  UserId: 3
},
{
  title: 'no',
  content: 'yes',
  UserId: 2
},
{
  title: 'fun',
  content: 'tons',
  UserId: 1
},
{
  title: 'fun',
  content: 'tons',
  UserId: 3
},
{
  title: 'fun',
  content: 'tons',
  UserId: 2
},
{
  title: 'fun',
  content: 'tons',
  UserId: 1
},
{
  title: 'fun',
  content: 'tons',
  UserId: 3
},
]
const seedItems = async() => {
  await User.bulkCreate(userData, {individualHooks: true})
  await Post.bulkCreate(postData)
  

};

module.exports = seedItems;