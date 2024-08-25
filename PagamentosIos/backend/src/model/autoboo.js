const { DataTypes } = require('sequelize');
const sequelize = require('../database/conection.js');

const Autobot = sequelize.define('Autobot', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

module.exports = Autobot;
