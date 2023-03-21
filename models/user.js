
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        'users',
        {
            userId: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                primaryKey: true
            },
            name: {
                type: DataTypes.STRING,
            },
            email: {
                type: DataTypes.STRING,
                unique: {
                    args: true,
                    msg: 'Email Id must be unique',
                },
                allowNull: false,
                validate: {
                    isEmail: {
                        msg: 'Enter valid email address'
                    }
                }
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            role: {
                type: DataTypes.STRING,
                validate: {
                    isIn: [['ADMIN', 'CREATOR', 'USER']]
                },
                defaultValue: 'USER'
            },
            status: {
                type: DataTypes.STRING,
                validate: {
                    isIn: [['ACTIVE', 'INACTIVE']]
                },
                defaultValue: 'ACTIVE'
            },
            profileImgUrl: {
                type: DataTypes.STRING
            }
        },
        {
            defaultScope: {
                attributes: {
                    exclude: [
                        'password'
                    ]
                }
            }
        }

    )

    User.associate = function (models) {
        models.User.hasMany(models.Blog, {
            foreignKey: 'uId'
        })
    }

    return User
}