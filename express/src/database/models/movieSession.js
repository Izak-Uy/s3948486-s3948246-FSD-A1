module.exports = (sequelize, DataTypes) => {
  const movieSession = sequelize.define('movieSession', {
    movieId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    sessionTime: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    }
  });

  movieSession.associate = (models) => {
    movieSession.belongsTo(models.Movie, {
      foreignKey: 'movieId',
      onDelete: 'CASCADE',
    });
  };

  return movieSession;
}
