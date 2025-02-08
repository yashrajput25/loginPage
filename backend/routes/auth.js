const express = require('express')
const User = require('../models/User.js')
const CreateNewProfessor = require('../controllers/CreateNewProf.js')

const router = express.Router();

router.post("/register", {CreateNewProfessor})