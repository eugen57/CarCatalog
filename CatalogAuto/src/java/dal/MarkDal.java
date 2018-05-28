package dal;

import java.util.ArrayList;
import java.util.List;
import org.apache.ibatis.session.*;
import model.Mark;
import org.apache.ibatis.mapping.ResultMap;
import org.apache.ibatis.mapping.ResultMapping;

public class MarkDal extends BaseDal {

    public MarkDal() {
        super();
    }
    
    public List<Mark> selectAll() {
          SqlSession session = sqlSessionFactory.openSession();
          List<Mark> list = session.selectList("mark.selectAll");
          session.close();
          return list;
    }

    public Mark  selectById(int id) {
          SqlSession session = sqlSessionFactory.openSession();
          Mark mark = (Mark) session.selectOne("mark.selectById",id);
          session.close();
          return mark;
    }
    
    public List<Mark> selectAllWithOutCars() {
          SqlSession session = sqlSessionFactory.openSession();
          List<Mark> list = session.selectList("mark.selectAllWithoutCars");
          session.close();
          return list;
    }

    public Mark  selectByIdWithOutCars(int id) {
          SqlSession session = sqlSessionFactory.openSession();
          Mark mark = (Mark) session.selectOne("mark.selectByIdWithoutCars",id);
          session.close();
          return mark;
    }
     
    public void insertWithOutCars(Mark mark) {
          SqlSession session = sqlSessionFactory.openSession();
          session.insert("mark.insertWithOutCars",mark);
          session.commit();
          session.close();
    }

    public void updateWithOutCars(Mark mark) {
          SqlSession session = sqlSessionFactory.openSession();
          session.insert("mark.updateWithOutCars",mark);
          session.commit();
          session.close();
    }
    
    public void updateWithOutCarsWOlogo(Mark mark) {
          SqlSession session = sqlSessionFactory.openSession();
          session.insert("mark.updateWithOutCarsWOlogo",mark);
          session.commit();
          session.close();
    }

    public void deleteById(int id) {
          SqlSession session = sqlSessionFactory.openSession();
          session.delete("mark.deleteById",id);
          session.commit();
          session.close();
    }
    
    public void deleteByMark(Mark mark) {
          SqlSession session = sqlSessionFactory.openSession();
          session.delete("mark.deleteByMark",mark);
          session.commit();
          session.close();
    }
    
    public List<String> getColumnNames() {
        List<String> columnNames = new ArrayList<>();
        Configuration configuration = sqlSessionFactory.getConfiguration();
        ResultMap resultMap = configuration.getResultMap("markResultWithoutCars");
        
        List<ResultMapping> resultMappings = resultMap.getResultMappings();
        for (int i = 0; i < resultMappings.size()-1; i++) {
            columnNames.add(resultMappings.get(i).getColumn());
        }
        
        return columnNames;
    }
}
