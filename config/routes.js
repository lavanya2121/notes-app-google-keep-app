const express = require('express')
const router = express.Router()//router object is responsible for routing of ur application
const notesController = require('../app/controllers/notesController')////to connect config and the controller
const categoryController=require('../app/controllers/categoryController')
const usersController =require('../app/controllers/usersController')
//const upload = require('./multer')
const aws = require('aws-sdk')
const {authenticateUser} = require('../app/middlewares/authentication')
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, "./uploads/");
    },
    filename: function(req, file, cb) {
      cb(null, new Date().toISOString() + file.originalname);
    }
  });
  
  const fileFilter = (req, file, cb) => {
    //reject a file
    if (
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };
  const upload = multer({
    storage: storage,
    limits: { fileSize: 1024 * 1024 * 5 },
    fileFilter: fileFilter
  });
  


//users-postman testing routes
router.post('/users/register', usersController.register)
router.post('/users/login', usersController.login)
router.get('/users/account',authenticateUser,usersController.account)
router.delete('/users/logout', authenticateUser,usersController.logout)
//router.get('/users/account',usersController.account)
// router.delete('/users/logout-all', authenticateUser,usersController.logoutAll)
// router.get('/users/check-login', authenticateUser, usersController.checkLoginStatus)//need to chk again

//users-actual routes
// router.post('/api/users/register', usersController.register)
// router.post('/api/users/login', usersController.login)
// router.get('/account',authenticateUser, usersController.account)
// router.delete('/api/users/logout', authenticateUser,usersController.logout)
// router.delete('/api/users/logout-all', authenticateUser,usersController.logoutAll)
// router.get('/api/users/check-login', authenticateUser, usersController.checkLoginStatus)

//categories-postman testing routes
 router.get('/categories', authenticateUser,categoryController.list)//give the same path in postman
router.get('/categories/:id',authenticateUser, categoryController.show)
router.post('/categories', authenticateUser,categoryController.create)
router.put('/categories/:id', authenticateUser,categoryController.update)
router.delete('/categories/:id',authenticateUser, categoryController.destroy)

//categories-actual routes
// router.get('/api/categories', authenticateUser,categoryController.list)//give the same path in postman
// router.get('/api/categories/:id',authenticateUser, categoryController.show)
// router.post('/api/categories', authenticateUser,categoryController.create)
// router.put('/api/categories/:id', authenticateUser,categoryController.update)
// router.delete('/api/categories/:id',authenticateUser, categoryController.destroy)

//notes-postman testing routes
router.get('/notes',authenticateUser, notesController.list)//to connect config and the controller
router.get('/notes/:id',authenticateUser, notesController.show)
router.post('/notes', authenticateUser,notesController.create)
router.post('/notes', authenticateUser,upload.single('image'),notesController.create)
router.put('/notes/:id',authenticateUser,upload.single('image'), notesController.update)
//router.put('/api/notes/:id',authenticateUser,upload.single('image'), notesController.update)
router.delete('/notes/:id',authenticateUser, notesController.destroy)


//notes-actual-routes
// router.get('/api/notes',authenticateUser, notesController.list)//to connect config and the controller
// router.get('/api/notes/:id',authenticateUser, notesController.show)
// router.post('/api/notes', authenticateUser,notesController.create)
// router.post('/api/notes', authenticateUser,upload.single('image'),notesController.create)
// router.put('/api/notes/:id',authenticateUser, notesController.update)
// router.put('/api/notes/:id',authenticateUser,upload.single('image'), notesController.update)
// router.delete('/api/notes/:id',authenticateUser, notesController.destroy)

module.exports = router