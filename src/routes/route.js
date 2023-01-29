const express = require('express');
const router = express.Router();


const adminController = require('../controllers/adminController');
const superAdminController = require('../controllers/superAdminController');
const employeeController = require('../controllers/employeeController');
const userController = require('../controllers/userController');

const midware = require('../midwares/auth')

//user
router.post('/createUser', userController.createUser)
router.post('/logIn', userController.userLogin )

//admin
router.post('/createCourse',  midware.authenticate, adminController.createCourse);
router.put('/updateCourse',midware.authenticate, adminController.updateCourse);
router.delete('/deleteCourse',midware.authenticate, adminController.deleteCourse);

//super admin
router.get('/getCourses',midware.authenticate, superAdminController.courses);
router.put('/approveCourses',midware.authenticate, superAdminController.approval);

//employee
router.get('/activeCourses',midware.authenticate, employeeController.viweCourses)


module.exports = router