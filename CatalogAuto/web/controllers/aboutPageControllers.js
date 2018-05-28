function loginSumbit()  {
    var user = document.getElementById("userModal").value;
    var pass = document.getElementById("passModal").value;
    var userController = new UserController();
    var userExist = userController.doesUserExist(user,pass);
    if(userExist) {
        alert("Hello, "+user+"!");
        window.location.replace("adminpage.html");
        return false;
    }
    else {
        alert("User doesn't exist or password is incorrect.\n\nPlease try again");
        $('#login-modal').show();
        return false;
    }
};


