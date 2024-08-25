const { DataTypes } = require('sequelize');
const { sequelize } = require('./database');
const Post = require('./Post');

const Comment = sequelize.define('Comment', {
  body: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

Post.hasMany(Comment, { foreignKey: 'postId' });
Comment.belongsTo(Post, { foreignKey: 'postId' });

module.exports = Comment;
