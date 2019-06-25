const userModel = require('../models/userModel')

const createUser = user =>
    userModel.create(user);


const findUserById = userId =>
    userModel.findById(userId)

const findUserByCredentials = (username, password) => {

}
const updateUser = (userId, newUser) =>
    userModel.update(
        {_id: userId},
        {
            $set: {
                firstName: newUser.firstName,
                lastName: newUser.lastName
            }
        })
module.exports = {
    createUser,
    findUserById,
    findUserByCredentials,
    updateUser
};
