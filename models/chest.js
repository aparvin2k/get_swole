module.exports = function(sequelize, DataTypes) {
  var chestExercise = sequelize.define("chest_exercise", {
    exercise_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    set_1: {
      type: DataTypes.INTEGER,
      isNumber: true,
      isInt: true
    },
    set_2: {
      type: DataTypes.INTEGER,
      isNumber: true,
      isInt: true
    },
    set_3:{
      type: DataTypes.INTEGER,
      isNumber: true,
      isInt: true
    }
  });
  return chestExercise;
};