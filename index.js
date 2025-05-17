const userDatabase = {
    "Ahmad":{
        firstName: "Ahmad",
        lastName: "Subair",
        Kunya: "Abu Sumayyah",
        Email: "ahmadsubair2005@gmail.com",
        School: "Lagos state university",
        password: "Omotola0805"

    }
}



    //Enter username
    
    let username = prompt("Enter your Username")
    while (validateUsername(username)== false){
        username = prompt("username is invalid please enter a valid username")
    }
    // if (username == null){
    //     return
    // }
  
    //Enter password
    let password = prompt("Enter your password")
    while (validatePassword(password)== false){
        password = prompt("password is invalid, please enter a valid password")
    }
    // if (password == null){
    //     return
    // }

    //confirm password
    let passwordConfirm = prompt("confrim your passsword")
    while (password !== passwordConfirm){
        passwordConfirm = prompt("Password do not match, please confirm yur password again")
    }

    const user = userDatabase[username]
    if (user== undefined){
        alert("user not found, please register")
    
    }
    
alert(`
    user found with the following details:
    First Name: ${user.firstName}
    Last Name : ${user.lastName}
    Kunya : ${user.Kunya}
    Email: ${user.Email}
    School : ${user.School}
   `)



    function validateUsername(username){
        if (username.length >10 ){
            return false
        }else if (username < 1){
        return false
        }else {
            return true
        }
    }
    

    function validatePassword(password){
        if (password.length < 6){
            return false
        }else {
            return true
        }
    }
    
// const usernameValidation = validateUsername(username)
// const passwordValidation = validatePassword(password)

// console.log(usernameValidation, passwordValidation)