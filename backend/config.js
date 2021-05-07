const SequelizeClass = require('sequelize');
const sequelize = new SequelizeClass('booker', 'Moe','Hello123123', {dialect: 'mysql'});

module.exports = sequelize; 