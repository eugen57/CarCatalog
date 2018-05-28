package dal;

import java.util.List;
import model.Mark;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;

public class MarkDalTest {
    
     public MarkDalTest() {
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
     * Test of selectAll method, of class MarkDal.
     */
    @Test
    public void testSelectAll() {
        System.out.println("selectAll");
        MarkDal instance = new MarkDal();
        List<Mark> result = instance.selectAll();
        for(Mark mark:result)
            System.out.println(mark);
        assertTrue(true);
    }
    
    @Test
    public void testGetColumnNames() {
        System.out.println("getColumnNames");
        MarkDal markDal = new MarkDal();
        List<String> list = markDal.getColumnNames();
        for (int i = 0; i < list.size(); i++) {
            System.out.println(list.get(i));
        }
        assertTrue(true);
    } 
}
