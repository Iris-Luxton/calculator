// ./src/server/db/dbrepo.js
'use strict';
// The purpose of "use strict" is to indicate that the code should be executed in "strict mode". 
// With strict mode, you can not, for example, use undeclared variables.
const userDB = [];

// purpose: when userDBService fetch info to getUsers, it will fetch into this const userDB
exports.getDBUsers = () => {
    console.log("userDBService -> getUsers ");
    return userDB;
}

// purpose: trigger the data search in userDB that is not an undefined value
// note that userId is unique to each user and is normally a bunch of random number
exports.getDBUserById = (userId) => {
    console.log("userDBService -> getDBUserById -> userId: "+ userId);
    if (typeof userId != 'undefined'){
        return userDB.find(cntr => cntr.id === userId); // it will go into the data and look for the id that matches your search 
    }else{
        return; // otherwise it will just return nothing? Can we add an alert here? Like: item you are looking for is not found?
    }
}

// purpose: it will make sure your user it add when a true / legit value is detected
exports.addDBUser = (user) => {  
    console.log("userDBService -> addDBUser ");
    if (!user || typeof user.id == 'undefined' || user.id.length == 0){
        console.log("wrong data: User ID must not be empty!");
    }else{
        userDB.push(user);
        return(true);
    }
    return false;
};

// userid and user parameters will be fed into this function to update the exact id with new user value and discard the old one
exports.updateDBUser = (userid, user) => {
    console.log("userDBService -> updateDBUser -> userId: "+ userid);
    let indexOfObject = userDB.map( function(cntr) { return cntr.id}).indexOf(userid);
    if (indexOfObject > -1){
        userDB.splice(indexOfObject, 1, user);
        return(true);
    }else{
        console.log("Problem in updating user info. Try again");
    }
    return false; 
}

// similarly this function is used to delete users.
exports.deleteDBUser = (userId) => {
    console.log("userDBService -> getDBUserById -> userId: "+ userId);
    let indexOfObject = userDB.map( function(cntr) { return cntr.id}).indexOf(userId);
    if (indexOfObject > -1){
        userDB.splice(indexOfObject, 1);
        return (true);
    }else{
        console.log("Problem in user deletion. Try again");
    }
    return false;
}

