import needle from 'needle';
const baseURL = 'http://localhost:3000';

const testData = {
  newStudent1: {
    stdnum: '2020-00000',
    fname: 'Mary Jane',
    lname: 'Watson',
    age: 20,
  },
  newStudent2: {
    stdnum: '2020-00001',
    fname: 'Roger',
    lname: 'Federer',
    age: 20,
  },
  newStudent3: {
    stdnum: '8051495845', //student to delete
    fname: 'Serena',
    lname: 'Williams',
    age: 20,
  },
  newStudent4: {
    stdnum: '2020-00003',
    fname: 'Patrick',
    lname: 'Zweig',
    age: 20,
  },
  newStudent5: {
    stdnum: '2020-00004',
    fname: 'Art',
    lname: 'Donaldson',
    age: 20,
  },
  updatedStudent: {
    existingStudentFname: 'Mary Jane',
    newLname: 'Parker',
  },
  userToDelete: {
    stdnum: '8051495845',
  },
  userToSearch: {
    stdnum: '2020-00001',
  }
};

//helper function to test an endpoint
async function test(endpoint, method, data = null) {
  try {
    let response;
    if (method === 'GET') {
      response = await needle('get', `${baseURL}${endpoint}`, { params: data });
    } else if (method === 'POST') {
      response = await needle('post', `${baseURL}${endpoint}`, data);
    }
    console.log(`Test ${method} ${endpoint}:`, response.body);
  } catch (error) {
    console.error(`Test ${method} ${endpoint} failed:`, error.message);
  }
}

//test endpoints
//Create 5 different students including Mary Jane Watson


test('/save-student', 'POST', testData.newStudent1);
test('/save-student', 'POST', testData.newStudent2);
test('/save-student', 'POST', testData.newStudent3);
test('/save-student', 'POST', testData.newStudent4);
test('/save-student', 'POST', testData.newStudent5); 

/*Search for an existing student’s fname (e.g. “Mary Jane”)
Update the student’s fname using the .updateOne() method.
Update her last name to Parker*/

test('/update', 'POST', testData.updatedStudent);

/**Removes a specific user using deleteOne method.
Example: await Student.deleteOne({stdnum: ‘8051495845’})
 */
test('/remove-user', 'POST', testData.userToDelete);

/**Searches user by the username. It should return an array of JSON objects containing the user. otherwise an empty array. */
test('/members', 'GET');

/*
Searches user by the username. It should return an array of JSON objects containing the user. otherwise an empty array. */
test('/user', 'GET', testData.userToSearch);

/**Removes all users using deleteMany method.
If successful, send an object {deleted:true}, otherwise {deleted:false}, check the return object of the model (acknowledge/deleteCount)*/

test('/remove-all-user', 'POST');
test('/members', 'GET');
