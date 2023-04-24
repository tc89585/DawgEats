const express = require('express');
const bcryptjs = require('bcryptjs');
const userRouter = express.Router();
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');
const User = require('../../models/user');
const cors = require('cors');
userRouter.use(express.json());
userRouter.use(cors({ origin: true, credentials: true }));

// Signup Route
userRouter.post('/signup', async (req, res) => {
  try {
    const { name, password, confirmPassword } = req.body;
    if (!name || !password || !confirmPassword) {
      return res
        .status(400)
        .json({ msg: 'Please enter all the required fields' });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ msg: 'Password must be at least 6 characters' });
    }
    if (confirmPassword !== password) {
      return res.status(400).json({ msg: 'Passwords do not match' });
    }
    const existingUser = await User.findOne({ name });
    if (existingUser) {
      return res.status(400).json({ msg: 'User already exists' });
    }
    const hashedPassword = await bcryptjs.hash(password, 8);
    const newUser = new User({ name, password: hashedPassword });
    const savedUser = await newUser.save();
    console.log(savedUser.name);
    res.json(savedUser.name);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});

//login route
userRouter.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ msg: 'Please enter all the required fields' });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send({ msg: 'user not found' });
    }

    const isMatch = await bcryptjs.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ msg: 'Incorrect password' });
    }
    const token = jwt.sign({ id: user._id }, 'passwordKey');
    res.json({ token, user: { id: user._id, username: user.username } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//Check if token is valid
userRouter.post('/tokenIsValid', async (req, res) => {
  try {
    const token = req.header('x-auth-token');
    if (!token) {
      return res.json(false);
    }
    const verified = jwt.verify(token, 'passwordKey');
    if (!verified) {
      return res.json(false);
    }
    const user = await User.findById(verified.id);
    if (!user) {
      return res.json(true);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//gets the user credentials
userRouter.get('/', auth, async (req, res) => {
  const user = await User.findById(req.user);
  res.json({
    username: user.username,
    id: user._id,
  });
});
module.exports = userRouter;
