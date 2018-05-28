class UserController {
    
    doesUserExist(name, password) {
        var userService = new UserService();
        var userExist = userService.doesUserExist(name,password);
        return userExist;
    };
    
}

