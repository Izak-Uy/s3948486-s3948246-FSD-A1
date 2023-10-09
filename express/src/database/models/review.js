module.exports = (sequelize, DataTypes) => {
    const Review = sequelize.define("review", {
        reviewId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        reviewText: {
            type: DataTypes.STRING(255),
            allowNull: false
        }
    }, {
        timestamps: false
    });

    Review.associate = (models) => {
        Review.belongsTo(models.movie, {
            foreignKey: 'movieId',
            onDelete: 'CASCADE',
        });
    };

    return Review;
}