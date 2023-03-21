const Sequelize = require('sequelize')

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: process.env.NODE_ENV === 'development' ? console.log : false,
})

// console.log(sequelize.sync)
// sequelize.sync()

const db = {}
db.models = {}
db.sequelize = sequelize

db.User = require('./user')(sequelize, Sequelize.DataTypes)
db.Blog = require('./blog')(sequelize, Sequelize.DataTypes)


Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db)
    }
})

module.exports = db