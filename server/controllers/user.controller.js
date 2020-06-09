const User = require('../models/user');

const jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const SEED = require("../config/config").SEED;

const userCtrl = {};

userCtrl.signUp = async (req, res, next) => {

    const { sgi, name, password, role } = req.body;
    const newUser = new User({
      sgi,
      name,
      password: bcrypt.hashSync(password, 10),
      role,
    });
    await newUser.save();
    const token = await jwt.sign({ _id: newUser._id }, SEED, { expiresIn: 14400 });
    res.status(200).json({ ok: true, newUser, token });

}

userCtrl.signIn = async (req, res, next) => {

    const { sgi, password } = req.body;

    const user = await User.findOne({ sgi });
    if (!user) return res.status(401).send('El SGI no existe');
    if (!bcrypt.compareSync(password, user.password)) return res.status(401).send('Contraseña incorrecta');

    user.password = ':)';
    const token = jwt.sign({ _id: user._id }, SEED, { expiresIn: 14400 });

    return res.status(200).json({ ok: true, user, token, id: user._id });

}

module.exports = userCtrl;