//example below

// const { Model, DataTypes } = require('sequelize');
// // Require the connection to the database (connection.js)
// const sequelize = require('../config/connection');
// // console.log(sequelize);
// class Item extends Model{}

// Item.init(
//   {id: {
//     type:DataTypes.INTEGER, 
//     primaryKey:true,
//     allowNull:false,
//     autoIncrement:true
//   },
//   itemType: {
//     type:DataTypes.STRING,
//     allowNull:false,
//   },
//   price: {
//     type:DataTypes.DECIMAL,
//     allowNull:false,
//   },
//   name: {
//     type:DataTypes.STRING,
//     allowNull:false,
//   },
//   era: {
//     type:DataTypes.STRING,
//     allowNull:false,
//   },
//   description: {
//     type:DataTypes.STRING,
//     allowNull:false,
//   },
//   dimensions: {
//     type:DataTypes.STRING,
//     allowNull:false,
//   },
//   photoUrl: {
//     type:DataTypes.STRING,
//     allowNull:false,
//     validate:{
//       isUrl:true
//     }
//   // },
//   },
//   {
//     sequelize,
//     freezeTableName:true,
//     underscored:true,
//     modelName:'item',
//   }
//   );


// // Export the model for other files to use
// module.exports = Item;