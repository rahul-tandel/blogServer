const models = require('../models/index')


const createUser = async (req, res) => {
    try {
        const { body } = req
        const userData = await models.User.create(body)
        console.log(userData)
        return res.send(userData)
    } catch (error) {
        console.log(error)
        return res.status(500).send({ status: 'error', message: error.message })
    }
}

const getUserById = async (req, res) => {
    try {
        const { id } = req.params
        const userData = await models.User.findByPk(id)
        return res.send(userData)
    } catch (error) {
        console.log(error)
        return res.status(500).send({ status: 'error', message: error.message })
    }
}

const getUser = async (req, res) => {
    try {
        const userData = await models.User.findAll()
        return res.send(userData)
    } catch (error) {
        console.log(error)
        return res.status(500).send({ status: 'error', message: error.message })
    }
}

const updateUser = async (req, res) => {

}

const deleteUser = async (req, res) => {

}

module.exports = {
    createUser,
    deleteUser,
    getUser,
    getUserById,
    updateUser
}