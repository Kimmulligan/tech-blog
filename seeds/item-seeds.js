const sequelize = require('../config/connection');
const { Item } = require('../models');


const itemData = [

{

  "itemType": "Table",
  "price": "7900",
  "name": "Unique Wooden Side Table",
  "description": "This 3-tiered vintage side table makes a big impact with its intricate design and quality wood construction. It’s perfect for resting your Brandy Alexander (with a coaster of course) or as an amazing multi-level plant stand.",
  "era": "Late 20th Century",
  "dimensions": "H:22in W:14in x L:25in", 
  "photoUrl": "https://tinyurl.com/y5frdqgz"

}

]
const seedItems = () => Item.bulkCreate(itemData);

module.exports = seedItems;