let {sequelize} = require('../config/config.dev');
const path = require('path');

let Book = sequelize.import(path.join(__dirname,'./book.js'));
let Category = sequelize.import(path.join(__dirname,'./category.js'));
let Author = sequelize.import(path.join(__dirname,'./author.js'));
let Catalog = sequelize.import(path.join(__dirname,'./catalog.js'));

//model的关系映射
Category.belongsToMany(Book,{through:'category_book'});
Book.belongsToMany(Category,{through:'category_book'});
Book.hasMany(Catalog);
Author.hasMany(Book);

module.exports = {
    sequelize,
    Book,
    Category,
    Author,
    Catalog
};
