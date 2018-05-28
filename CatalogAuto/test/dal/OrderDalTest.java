package dal;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import model.Order;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;


public class OrderDalTest {
    
    public OrderDalTest() {
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

    @Test
    public void testInsert() {
        System.out.println("insert");
        Date date = new Date();
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String today = sdf.format(date);
        System.out.println(today);
        OrderDal orderDal = new OrderDal();
        Order order = new Order(0,22,"NEW","813213",today,"created111");
        orderDal.insert(order);
        assertTrue(true);
    }
    
    @Test
    public void testSelectAll() {
        System.out.println("selectAll");
        OrderDal orderDal = new OrderDal();
        List<Order> orders = orderDal.selectAll();
        for (int i = 0; i < orders.size() ; i++) {         
            System.out.println(orders.get(i));
        }
        assertTrue(true);
    }
    
    @Test
    public void testGetColumnNames() {
        System.out.println("getColumnNames");
        OrderDal orderDal = new OrderDal();
        List<String> columnNames = orderDal.getColumnNames();
        for (int i = 0; i < columnNames.size(); i++) {
            System.out.println(columnNames.get(i));
        }
        assertTrue(true);
    }
}
