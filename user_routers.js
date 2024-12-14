const express = require('express');
const router = express. Router();
const studentController = require('../controllers/user_controller');

router.get('/students', studentController.getAllStudents);
router.get('/students/:id', studentController.getStudentById);

module.exports = router;