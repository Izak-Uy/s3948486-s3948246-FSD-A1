module.exports = (sequelize, DataTypes) => {
    const Movie = sequelize.define("movie", {
        movieId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        movieName: {
            type: DataTypes.STRING(32),
            allowNull: false
        },
        movieImg: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        movieDescription: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    }, {
        timestamps: false,
    });

    // Movie.associate = (models) => {
    //     Movie.hasMany(models.review, {
    //         foreignKey: 'movieId',
    //         onDelete: 'CASCADE'
    //     })
    // }

    return Movie;
}
