module.exports = function(sequelize, DataTypes) {
  var ToDo = sequelize.define("ToDo", {
    text: DataTypes.STRING,
    complete: DataTypes.BOOLEAN
  });
  return ToDo;
};
