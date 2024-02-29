//NAME: Nathaniel C. Campo
//SECTION: CMSC 100 - UV3L
//CODE DESCRIPTION: Password Management using JavaScript


//function that returns if an index is a number
function isNumeric(input) {
    return typeof input === 'string' && !Number.isNaN(input);     }

//iterates the array in order to check if a number is presetn in the array
function checkNumber (pass1){
    for (let a=0; a<pass1.length; a++){
        if (isNumeric(pass1[a])){
            return true;
        }
        else{
            continue;
        }
    }
}

//iterates the initializes array of the password contains a lowercase character
function checkLowercase (pass1){
    let checker = true;
    for (let a=0; a<pass1.length; a++){
        if (pass1[a] == pass1[a].toLowerCase())
        {
        checker = false;
        }
        else{
            checker = true;
        }
        }
        return checker;
        }

//iterates the initialized array of the password if it contains an uppercase letter
function checkUpper (pass1){
    let checker1 = true;
    for (let a=0; a<pass1.length; a++){
        if (pass1[a] == pass1[a].toUpperCase())
        {
            checker1 = false;
        }
        else
        {
            checker = true;
        }
        }
        return checker1;
    }

//conditional statements that checks if the password is valid
function validatePassword (pass1, pass2){
    let pass_array1 = pass1.split();
    let pass_array2 = pass2.split();

    if(checkNumber(pass_array1) && pass1 == pass2 && checkLowercase(pass_array1) && checkUpper(pass_array1)){
        return true;
    }
    else{
        return false;
    }
}

//iterates each index and pushes the last element in an empty array
function reversePassword (pass1){
    reversedArray = [];
    for(let i = pass1.length - 1; i >= 0; i--) {
        const valueAtIndex = pass1[i];
        reversedArray.push(valueAtIndex);
      }
    return reversedArray.join(""); //joins each index to create one string
}

//function that stores the name and password into an object
function storePassword (name1, pass1, pass2){
    var password;
    if (validatePassword(pass1, pass2)){
        password = reversePassword(pass1);
    }
    else{
        password = pass1;
    }
    const user = {
        name: name1,
        newpassword: password,
    }
    return user;
}

//TEST CASES FOR CHECKING
console.log(validatePassword("helloworld", "hello"));
console.log(validatePassword("Hello123", "Hello123"));
console.log(validatePassword("HELLO1", "HELLO1"));
console.log(reversePassword("hello"));
console.log(storePassword("John", "Pass1234", "Pass1234"));
console.log(storePassword("John", "Pass123", "Pass12345"));