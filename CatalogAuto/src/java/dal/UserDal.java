package dal;

import java.util.HashMap;
import java.util.Map;
import model.User;
import org.apache.ibatis.session.SqlSession;

public class UserDal extends BaseDal {

    public UserDal() {
        super();
    }
    
    public User selectById(int id) {
        SqlSession sqlSession = sqlSessionFactory.openSession();
        User user = (User) sqlSession.selectOne("user.selectById",id);
        sqlSession.close();
        return user;
    }
    
    public boolean selectByNameAndPassword(String name, String password) {
        Map<String, String> parms = new HashMap<String, String>();
        parms.put("name", name);
        parms.put("password", password);
        
        SqlSession sqlSession = sqlSessionFactory.openSession();
        User user = (User) sqlSession.selectOne("user.selectByNameAndPassword",parms);
        sqlSession.close();
        if(user!=null) {
            return true;
        } else {
            return false;
        }
    }
}
