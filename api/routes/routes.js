import express from 'express';
import controller from '../controller/userController';

const router = express.Router();

router.get('/auth/signup', controller.signup);


module.exports = router;