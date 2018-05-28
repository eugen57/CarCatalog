package controllers;

import dal.UserDal;
import model.User;

public class UserController {
    private UserDal userDal;
    
    public UserController(){
        userDal = new UserDal();
    }
    
    public User getUserById(int id) {
        return userDal.selectById(id);
    }
    
    public boolean doesUserExist(String name, String password) {
        return userDal.selectByNameAndPassword(name, password);
    }
}
