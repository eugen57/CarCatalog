package dal;

import java.util.ArrayList;
import java.util.List;
import org.apache.ibatis.session.SqlSession;
import model.Order;
import org.apache.ibatis.mapping.ResultMap;
import org.apache.ibatis.mapping.ResultMapping;
import org.apache.ibatis.session.Configuration;

public class OrderDal extends BaseDal {

    public OrderDal() {
        super();
    }
       
    public void insert(Order order) {
        SqlSession session = sqlSessionFactory.openSession();
        session.insert("order.insert",order);
        session.commit();
        session.close();
    }
    
    public void update(Order order) {
        SqlSession session = sqlSessionFactory.openSession();
        session.update("order.update",order);
        session.commit();
        session.close();
    }
    
    public void deleteById(int id) {
        SqlSession sqlSession = sqlSessionFactory.openSession();
        sqlSession.delete("order.deleteById",id);
        sqlSession.commit();
        sqlSession.close();
    }
    
    public List<Order> selectAll() {
          SqlSession session = sqlSessionFactory.openSession();
          List<Order> list = session.selectList("order.selectAll");
          session.close();
          return list;
    }
    
    public List<String> getColumnNames() {
        List<String> columnNames = new ArrayList<>();
        Configuration configuration = sqlSessionFactory.getConfiguration();
        ResultMap resultMap = configuration.getResultMap("orderResult");
        
        List<ResultMapping> resultMappings = resultMap.getResultMappings();
        for (int i = 0; i < resultMappings.size(); i++) {
            columnNames.add(resultMappings.get(i).getColumn());
        }
        
        return columnNames;
    }
}
