module.exports = (sequelize, DataTypes) => {
 // Add code here to create a Post model
 // This model needs a title, a body, and a category
 // Don't forget to 'return' the post after defining
  return sequelize.define("Blogs", {
    text:{ 
    	type: DataTypes.STRING,
    	allowNull: false,
    	validate: {
    		len: [1]
    	}
    },
    body: {
    	type: DataTypes.TEXT,
    	allowNull: false,
    	len: {
    		min: 1 , 
    		max: 160
    	}
    },
    category: {
    	type: DataTypes.STRING,
      	defaultValue: "Personal"
    }
  });
};
  	