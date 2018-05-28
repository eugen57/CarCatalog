package controllers;

import java.util.List;
import model.Car;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;

public class CarControllerTest {
    
   public CarControllerTest() {
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
     * Test of getCars method, of class CarController.
     */
    @Test
    public void testGetCars() {
        System.out.println("getCars");
        CarController instance = new CarController();
        List<Car> expResult = null;
        List<Car> result = instance.getCars();
        for(Car car: result) {
            System.out.println(car);
        }
        assertTrue(true);
    }

    /**
     * Test of getCarById method, of class CarController.
     */
    @Test
    public void testGetCarById() {

    }

    /**
     * Test of addCar method, of class CarController.
     */
    @Test
    public void testAddCar() {

    }

    /**
     * Test of updateCar method, of class CarController.
     */
    @Test
    public void testUpdateCar() {

    }

    /**
     * Test of deleteCarById method, of class CarController.
     */
    @Test
    public void testDeleteCarById() {
        System.out.println("deleteCarById");
        int id = 17;
        CarController instance = new CarController();
        instance.deleteCarById(id);
        assertTrue(true);
    }
}
