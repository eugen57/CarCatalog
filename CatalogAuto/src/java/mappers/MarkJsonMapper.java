package mappers;

import java.io.IOException;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import model.Mark;
import org.codehaus.jackson.map.ObjectMapper;

public class MarkJsonMapper {
    
    public static String toJSON(Mark mark) {
        ObjectMapper mapper = new ObjectMapper();
        String e = "";
        try {
            e = mapper.writeValueAsString(mark);
        } catch (IOException ex) {
            Logger.getLogger(MarkJsonMapper.class.getName()).log(Level.SEVERE, null, ex);
        }
        return e;
    }
    
     public static String toJSONList(List<Mark> mark) {
        ObjectMapper mapper = new ObjectMapper();
        String e = "";
        try {
            e = mapper.writeValueAsString(mark);
        } catch (IOException ex) {
            Logger.getLogger(MarkJsonMapper.class.getName()).log(Level.SEVERE, null, ex);
        }
        return e;
    }
    
    public static Mark fromJSON(String markJson) {
        ObjectMapper mapper = new ObjectMapper();
        Mark  e = null;
        try {
            e = (Mark) mapper.readValue(markJson, Mark.class);
            
        } catch (IOException ex) {
            Logger.getLogger(CarJsonMapper.class.getName()).log(Level.SEVERE, null, ex);
        }
        return e;
    }
}
