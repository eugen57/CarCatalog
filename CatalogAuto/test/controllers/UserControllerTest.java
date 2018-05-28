package controllers;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

public class UserControllerTest {
    
    public UserControllerTest() {
    }
    
    @BeforeClass
    public static void setUpClass() {
    }
    
    @AfterClass
    public static void tearDownClass() {
    }
    
    @Before
    public void setUp() {
    }
    
    @After
    public void tearDown() {
    }

    /**
     * Test of getUserById method, of class UserController.
     */
    @Test
    public void testGetUserById() {

    }

    /**
     * Test of doesUserExist method, of class UserController.
     */
    @Test
    public void testDoesUserExist() {
        System.out.println("doesUserExist");
        String name = "admin";
        String password = "superadmin";
        UserController instance = new UserController();
        boolean result = instance.doesUserExist(name, password);
        System.out.println(result);
    }   
}
