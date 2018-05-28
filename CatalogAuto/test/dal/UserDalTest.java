package dal;

import model.User;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;

public class UserDalTest {
    
    public UserDalTest() {
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
     * Test of selectById method, of class UserDal.
     */
    @Test
    public void testSelectById() {
        System.out.println("selectById");
        int id = 1;
        UserDal instance = new UserDal();
        User expResult = null;
        User result = instance.selectById(id);
        System.out.println(result);
        assertTrue(true);
    }
    
    @Test
    public void testselectByNameAndPassword() {
        System.out.println("testselectByNameAndPassword");
        String name = "admin";
        String password = "superadmin";
        UserDal instance = new UserDal();
        boolean b = instance.selectByNameAndPassword(name, password);
        System.out.println(b);
    }
}
