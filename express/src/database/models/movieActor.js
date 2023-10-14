module.exports = (sequelize, DataTypes) => {
  const movieActor = sequelize.define('movieActor', {
    movieId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    actorName: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
  });

  movieActor.associate = (models) => {
    movieActor.belongsTo(models.movie, {
      foreignKey: 'movieId',
      onDelete: 'CASCADE',
    });
  }

  return movieActor;
}