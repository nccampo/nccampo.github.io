import { v4 as uuidv4 } from 'uuid';
import validator from 'validator';
import { appendFileSync } from 'node:fs';

//Function that generates the unique ID for each  Name and Last name
function generateUniqueID (firstName, lastName) {

    var code = uuidv4(); 
    var lowerLast = lastName.toLowerCase();
    var lowerFirst = firstName.toLowerCase();
    var firstNameInitial = lowerFirst.slice(0,1);
    var codeEight = code.slice(0,8); //cuts the randomized string into 8 characters 
    var uniqueID = firstNameInitial.concat(lowerLast, codeEight); //stores the unique password in one string that is returned in this function

    return uniqueID;

}


function addAccount (accountArray){
    var arrayLength = accountArray.length;
    var checker = false; //checker fiule used to determine if conactenation should be done to the file
    //condiitonal statements that checks if the given data is correct, not empty, and email is valid using validator
    if (arrayLength==4 && accountArray[0].length>0 && accountArray[1].length > 0 && validator.isEmail(accountArray[2])){
        checker = true;
    }
    else {
        checker = false;
    }

    //if checker is true, the details will be appended in the users.txt file
    if (checker){
        var accountStringInitial = accountArray.join();
        var accountString = accountStringInitial.concat(',',generateUniqueID(accountArray[0],accountArray[1]), '\n'); 
        appendFileSync("users.txt", accountString);
    }
}

export default { addAccount }