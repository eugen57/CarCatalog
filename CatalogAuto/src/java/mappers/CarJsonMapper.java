package mappers;

import java.io.IOException;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import model.Car;
import org.codehaus.jackson.map.ObjectMapper;


public class CarJsonMapper {
    
    public static String toJSON(Car car) {
        ObjectMapper mapper = new ObjectMapper();
        String e = "";
        try {
            e = mapper.writeValueAsString(car);
        } catch (IOException ex) {
            Logger.getLogger(CarJsonMapper.class.getName()).log(Level.SEVERE, null, ex);
        }
        return e;
    }
    
     public static String toJSONList(List<Car> car) {
        ObjectMapper mapper = new ObjectMapper();
        String e = "";
        try {
            e = mapper.writeValueAsString(car);
        } catch (IOException ex) {
            Logger.getLogger(CarJsonMapper.class.getName()).log(Level.SEVERE, null, ex);
        }
        return e;
    }
    
    public static Car fromJSON(String carJson) {
        ObjectMapper mapper = new ObjectMapper();
        Car  e = null;
        try {
            e = (Car)mapper.readValue(carJson, Car.class);
            
        } catch (IOException ex) {
            Logger.getLogger(CarJsonMapper.class.getName()).log(Level.SEVERE, null, ex);
        }
        return e;
    }
}
