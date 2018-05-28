package dal;

import java.util.List;
import model.Car;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;

public class CarDalTest {
    
    public CarDalTest() {
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
     * Test of selectById method, of class CarDal.
     */
    @Test
    public void testSelectById()  {
        System.out.println("selectById");
        CarDal carDal = new CarDal();
        Car result = carDal.selectById(1);
        assertEquals(result.getId(), 1);
        assertEquals(result.getName(), "FIESTA");
    }

    /**
     * Test of insert method, of class CarDal.
     */
    @Test
    public void testInsert() {
        System.out.println("insert");
        Car car = new Car("BMW24", 2011, 200000, "BMW24",1);
        CarDal carDal = new CarDal();
        carDal.insert(car);
        assertTrue(true);
    }
    
    @Test
    public void testGetColumnNames() {
        System.out.println("getColumnNames");
        CarDal carDal = new CarDal();
        List<String> list = carDal.getColumnNames();
        for (int i = 0; i < list.size(); i++) {
            System.out.println(list.get(i));
        }
        assertTrue(true);
    }

    /**
     * Test of update method, of class CarDal.
     */
    @Test
    public void testUpdate() {
    }

    /**
     * Test of deleteById method, of class CarDal.
     */
    @Test
    public void testDeleteById() {
    }    
}
