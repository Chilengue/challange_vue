const { DataTypes } = require('sequelize');
const sequelize = require('../database/conection.js');
const Autobot = require('./Autobot');

const Post = sequelize.define('Post', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  body: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

Autobot.hasMany(Post, { foreignKey: 'autobotId' });
Post.belongsTo(Autobot, { foreignKey: 'autobotId' });

module.exports = Post;
