import { Student } from './models.js';

//controller function to save a new student
const saveStudent = async (req, res) => {
  try {
    //assuming that the request body contains the complete details of the student
    const newStudent = new Student(req.body);
    await newStudent.save();
    res.json({ inserted: true });
  } catch (error) {
    res.json({ inserted: false });
  }
};

//controller function to update a student's first name
const updateStudent = async (req, res) => {
    try {
      const existingStudentFname = req.body.existingStudentFname;
      const newLname = req.body.newLname;
      
      // Find the student by their fname and update their fname
      const result = await Student.updateOne({ fname: existingStudentFname }, { lname: newLname });
  
      if (result.acknowledged) {
        res.json({ updated: true });
      } else {
        res.json({ updated: false });
      }      
    } catch (error) {
      res.json({ updated: false });
    }
}  

//controller function to remove a specific user by stdnum
const removeUser = async (req, res) => {
    try {
      const stdnum = req.body.stdnum;
      const result = await Student.deleteOne({ stdnum });
  
      if (result.deletedCount > 0) {
        res.json({ deleted: true });
      } else {
        res.json({ deleted: false });
      }
    } catch (error) {
      res.json({ deleted: false });
    }
}

//controller function to remove all users
const removeAllUsers = async (req, res) => {
    try {
      const result = await Student.deleteMany({});
  
      if (result.deletedCount > 0) {
        res.json({ deleted: true });
      } else {
        res.json({ deleted: false });
      }
    } catch (error) {
      res.json({ deleted: false });
    }
}


//controller function to search for a user by stdnum
const searchUser = async (req, res) => {
  try {
    const stdnum = req.query.stdnum;
    if (!stdnum) {
      return res.status(400).json({ error: 'stdnum is required' });
    }
    const user = await Student.find({ stdnum }).lean();

    if (user && user.length > 0) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

//function to get all users
const getAllUsers = async (req, res) => {
    try {
      const users = await Student.find({});
      res.json(users);
    } catch (error) {
      res.json([]);
    }
}

export { saveStudent, updateStudent, removeUser, removeAllUsers, searchUser, getAllUsers };
