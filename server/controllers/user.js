
const { User, validate } = require("../models/user");
const { SUCCESS_RESPONSE, ERROR_RESPONSE, CREATED_RESPONSE } = require("../utils/APIResponse");
const bcrypt = require("bcrypt");
const _ = require("lodash");  

exports.getAll = async (req, res) => {
    const all = await User.paginate()
    return res.status(200).send(SUCCESS_RESPONSE(all, "Retrieved all users", 200));
}

exports.getOne = async (req, res) => {
    const user = await User.findOne({
        _id: req.params.id
    });
    if (!user) {
        return res.status(404).send(ERROR_RESPONSE("User not found", "Invalid request", 404));
    }
    return res.status(200).send(SUCCESS_RESPONSE(user, "Retrieved user", 200));
}