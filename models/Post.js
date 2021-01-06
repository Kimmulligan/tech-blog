const { Model, DataTypes } = require("sequelize");
// Require the connection to the database (connection.js)
const sequelize = require("../config/connection");
// console.log(sequelize);
class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },
  {
    sequelize,
  }
);

// Export the model for other files to use
module.exports = Post;