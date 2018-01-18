
module.exports = (sequelize , DataTypes) => {
	ToDo = sequelize.define('todo', {
  		text: DataTypes.STRING,
  		complete:DataTypes.BOOLEAN
	});
	return ToDo;
};
