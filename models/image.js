'use strict';
module.exports = function(sequelize, DataTypes) {
  var Image = sequelize.define('Image', {
    postId: DataTypes.INTEGER,
    blob: DataTypes.BLOB
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Image.belongsTo(models.Post);
      }
    }
  });
  return Image;
};