module.exports = (sequelize, Sequelize) => {
    const Plant = sequelize.define("plants", {
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      possess: {
        type: Sequelize.BOOLEAN
      }
    },{
      timestamps: false
    });
    return Plant;
  };