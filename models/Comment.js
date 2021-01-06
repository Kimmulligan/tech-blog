const { Model, DataTypes } = require("sequelize");
// Require the connection to the database (connection.js)
const sequelize = require("../config/connection");
// console.log(sequelize);
class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
  }
);

// Export the model for other files to use
module.exports = Comment;
