const userModel = require('../models/UserModel')

const createUser = user =>
    userModel.create(user);


const findUserById = userId =>
    userModel.findById(userId)

const findUserByCredentials = (username, res) => {
    userModel.findOne(username, function(err,obj) { console.log(obj); })
        .then(user => res.json(user));

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


const findAllUsers = () =>
    userModel.find();

module.exports = {
    createUser,
    findUserById,
    findUserByCredentials,
    updateUser,
    findAllUsers
};
