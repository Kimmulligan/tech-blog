const { Model, DataTypes } = require("sequelize");
// Require the connection to the database (connection.js)
const sequelize = require("../config/connection");
// console.log(sequelize);
class User extends Model {}

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
      validate: {
        len: 8,
      },
    },
  },
  {
    sequelize,
  }
);

// Export the model for other files to use
module.exports = User;
