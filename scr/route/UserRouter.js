const express = require('express');

const router = express.Router();

const userController = require('../controller/UserController')

router.get('/get_all',userController.getAllUser);
router.post('/create',userController.createUser);

module.exports = router;