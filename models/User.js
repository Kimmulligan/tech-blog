const { Model, DataTypes } = require("sequelize");
// Require the connection to the database (connection.js)
const sequelize = require("../config/connection");
// console.log(sequelize);
const bcrypt = require('bcrypt');
class User extends Model {  checkPassword(loginPw) {
  return bcrypt.compareSync(loginPw, this.password);
}}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    hooks: {
      // set up beforeCreate lifecycle "hook" functionality
      async beforeCreate(newUserData) {
        console.log(newUserData.password);
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      // set up beforeUpdate lifecycle "hook" functionality
      async beforeUpdate(updatedUserData) {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
      }
    },
    sequelize,
  }
);
// Export the model for other files to use
module.exports = User;
