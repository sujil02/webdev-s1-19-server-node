module.exports = function (app) {

    const userService = require("../services/UserService");

    const createUser = (req, res) =>
        userService
            .createUser(req.body, req.params)
            .then(users => res.json(users))


    const findUserById = (req, res) =>
        userService.findUserById(req.params['userId'])
            .then(user => res.json(user))


    const updateUser = (req, res) =>
        userService.updateUser(req.params['userId'], req.body)
            .then(status => res.json(status))

    app.post('/api/register', createUser);
    app.get('/api/profile', findUserById);
    app.put('/api/websites/:websiteId', updateUser);

}
