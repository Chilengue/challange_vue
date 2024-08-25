const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/conection');
const Autobot = require('./Autobot');

const Post = sequelize.define('Post', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  body: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

Autobot.hasMany(Post, { foreignKey: 'autobotId' });
Post.belongsTo(Autobot, { foreignKey: 'autobotId' });

module.exports = Post;
