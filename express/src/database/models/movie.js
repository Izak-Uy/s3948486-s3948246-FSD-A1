module.exports = (sequelize, DataTypes) => 
    sequelize.define("movie", {
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
        },
        movieActors: {
            type: DataTypes.ARRAY(DataTypes.STRING(32)),
            allowNull: false
        },
        movieSessions: {
            type: DataTypes.ARRAY(DataTypes.STRING(32)),
            allowNull: false
        }
    }, {
        timestamps: false,
        updatedAt: false,
        createdAt: true
    });

    // Movie.associate = (models) => {
    //     Movie.hasMany(models.review, {
    //         foreignKey: 'movieId',
    //         onDelete: 'CASCADE'
    //     })
    // }

    // return Movie;

