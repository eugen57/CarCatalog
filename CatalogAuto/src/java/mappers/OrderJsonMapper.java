package mappers;

import java.io.IOException;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import model.Order;
import org.codehaus.jackson.map.ObjectMapper;

public class OrderJsonMapper {
    
    public static String toJSON(Order order) {
        ObjectMapper mapper = new ObjectMapper();
        String e = "";
        try {
            e = mapper.writeValueAsString(order);
        } catch (IOException ex) {
            Logger.getLogger(OrderJsonMapper.class.getName()).log(Level.SEVERE, null, ex);
        }
        return e;
    }
    
     public static String toJSONList(List<Order > order) {
        ObjectMapper mapper = new ObjectMapper();
        String e = "";
        try {
            e = mapper.writeValueAsString(order);
        } catch (IOException ex) {
            Logger.getLogger(OrderJsonMapper.class.getName()).log(Level.SEVERE, null, ex);
        }
        return e;
    }
    
    public static Order  fromJSON(String orderJson) {
        ObjectMapper mapper = new ObjectMapper();
        Order   e = null;
        try {
            e = (Order) mapper.readValue(orderJson, Order.class);
            
        } catch (IOException ex) {
            Logger.getLogger(OrderJsonMapper.class.getName()).log(Level.SEVERE, null, ex);
        }
        return e;
    }
}
