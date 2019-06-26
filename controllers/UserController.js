module.exports = function (app) {

    const userService = require("../services/UserService");

    const findAllUsers = (req, res) =>
        userService.findAllUsers()
            .then(users => res.json(users));

    const createUser = (req, res) =>
        userService
            .createUser(req.body)
            .then(users => res.json(users))


    const findUserById = (req, res) => {
        res.header("Access-Control-Allow-Origin", "*");
        userService.findUserById(req.params['userId'])
            .then(user => res.json(user))
    }

    const updateUser = (req, res) =>
        userService.updateUser(req.params['userId'], req.body)
            .then(status => res.json(status))

    const findUserByCredentials = (req, res) =>
        userService.findUserByCredentials(req.body, res)


    app.post('/api/register', createUser);
    app.get('/api/profile/:userId', findUserById);
    app.post('/api/login', findUserByCredentials);
    app.get('/api/users', findAllUsers);
    app.put('/api/websites/:websiteId', updateUser);

}
