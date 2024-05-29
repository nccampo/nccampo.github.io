import express from 'express';
import { saveStudent, updateStudent, removeUser, removeAllUsers, searchUser, getAllUsers } from './controller.js';

const router = express.Router();

// POST /save-student
router.post('/save-student', saveStudent);

// POST /update
router.post('/update', updateStudent);

// POST /remove-user
router.post('/remove-user', removeUser);

// POST /remove-all-user
router.post('/remove-all-user', removeAllUsers);

// GET /user
router.get('/user', searchUser);

// GET /members
router.get('/members', getAllUsers);

export { router };
