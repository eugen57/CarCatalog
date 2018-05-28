package controllers;

import dal.OrderDal;
import java.util.List;
import model.Order;

public class OrderController {
    
    private OrderDal orderDal;
    
    public OrderController(){
        orderDal = new OrderDal();
    }
    
   
    public void addOrder(Order order) {
        orderDal.insert(order);
    }
    
    public void updateOrder(Order order) {
        orderDal.update(order);
    }
    
    public void deleteOrderById(int id) {
        orderDal.deleteById(id);
    }
    
    public List<Order> getAllOrders() {
        return orderDal.selectAll();
    }
    
    public List<String> getColumnNames() {
        return orderDal.getColumnNames();
    }
}
