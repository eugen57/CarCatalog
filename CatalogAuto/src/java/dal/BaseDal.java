package dal;

import java.io.IOException;
import java.io.Reader;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

public class BaseDal 
{
    protected SqlSessionFactory sqlSessionFactory = null;
    
    public BaseDal() {
        Reader reader = null;
        try {
            reader = Resources.getResourceAsReader("mybatis/config.xml");
            sqlSessionFactory = new SqlSessionFactoryBuilder().build(reader);
        }
        catch (IOException ex) {
            Logger.getLogger(BaseDal.class.getName()).log(Level.SEVERE, null, ex);
        } finally {
            try {
                reader.close();
            } catch (IOException ex) {
                Logger.getLogger(BaseDal.class.getName()).log(Level.SEVERE, null, ex);
            }
        }   
    }
}
