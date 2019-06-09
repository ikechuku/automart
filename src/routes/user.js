/* eslint-disable linebreak-style */
import express from 'express';
import User from '../controllers/UserController';
import auth from '../middleware/auth';
import adminAuth from '../middleware/admin';
import logout from '../middleware/logout';

const router = express.Router();

// user signup
router.post('/auth/signup', User.signup);

// user login
router.post('/auth/signin', User.signIn);

// user log out
router.get('/auth/logout', logout, User.logout);

// change password
router.patch('/user', auth, User.changePassword);

// admin get all users
router.get('/users', adminAuth, User.getAll);


router.get('/', (req, res) => res.status(200).send('Hello world'));

export default router;