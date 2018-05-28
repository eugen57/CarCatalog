package controllers;

import java.util.List;
import model.Mark;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;

public class MarkControllerTest {
    
   public MarkControllerTest() {
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
     * Test of getMarksWithoutCars method, of class MarkController.
     */
    @Test
    public void testGetMarksWithoutCars() {
        System.out.println("getMarksWithoutCars");
        MarkController instance = new MarkController();
        List<Mark> result = instance.getMarksWithoutCars();
        for(Mark mark: result) {
            System.out.println(mark.getName());
        }
        assertEquals(result.get(0).getName(), "Ford");
    }
    
    @Test
    public void testGetMarkById() {
        System.out.println("getMarksById");
        MarkController instance = new MarkController();
        Mark result = instance.getMarkById(1);
        System.out.println(result);
        assertEquals(result.getName(), "Ford");
    }

    /**
     * Test of getMarks method, of class MarkController.
     */
    @Test
    public void testGetMarks() {
    }   
}
