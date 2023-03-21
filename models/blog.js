module.exports = (sequelize, DataTypes) => {
    const Blog = sequelize.define(
        'blogs',
        {
            blogId: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false
            },
            content: {
                type: DataTypes.TEXT,
            },
            imageUrl: {
                type: DataTypes.TEXT
            },
            uId: {
                type: DataTypes.UUID,
                allowNull: false,
                references: {
                    model: 'users',
                    key: 'userId'
                }
            }
        }
    )

    Blog.associate = function (models) {
        models.Blog.belongsTo(models.User, {
            foreignKey: 'uId',
            targetKey: 'userId'
        })
    }

    return Blog
}