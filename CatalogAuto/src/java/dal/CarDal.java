package dal;

import java.util.ArrayList;
import java.util.List;
import org.apache.ibatis.session.SqlSession;
import model.Car;
import org.apache.ibatis.mapping.ResultMap;
import org.apache.ibatis.mapping.ResultMapping;
import org.apache.ibatis.session.Configuration;

public class CarDal extends BaseDal {

    public CarDal() {
        super();
    }
    
    public List<Car> selectAll() {
          SqlSession session = sqlSessionFactory.openSession();
          List<Car> list=  session.selectList("car.selectAll");
          session.close();
          return list;
    }

    public Car selectById(int id) {
          SqlSession session = sqlSessionFactory.openSession();
          Car car = (Car) session.selectOne("car.selectById",id);
          session.close();
          return car;
    }
    
    public void insert(Car car) {
          SqlSession session = sqlSessionFactory.openSession();
          session.insert("car.insert",car);
          session.commit();
          session.close();
    }
    
    public void update(Car car) {
          SqlSession session = sqlSessionFactory.openSession();
          session.update("car.update",car);
          session.commit();
          session.close();
    }
    
    public void updateWOimage(Car car) {
          SqlSession session = sqlSessionFactory.openSession();
          session.update("car.updateWOimage",car);
          session.commit();
          session.close();
    }

    public void deleteById(int id) {
          SqlSession session = sqlSessionFactory.openSession();
          session.delete("car.deleteById",id);
          session.commit();
          session.close();
    }
    
    public void deleteByCar(Car car) {
          SqlSession session = sqlSessionFactory.openSession();
          session.delete("car.deleteByCar", car);
          session.commit();
          session.close();
    }
    
    public List<String> getColumnNames() {
        List<String> columnNames = new ArrayList<>();
        Configuration configuration = sqlSessionFactory.getConfiguration();
        ResultMap resultMap = configuration.getResultMap("carResult");

        List<ResultMapping> resultMappings = resultMap.getResultMappings();
        for (int i = 0; i < resultMappings.size()-1; i++) {
            columnNames.add(resultMappings.get(i).getColumn());
        }
        return columnNames;
    }
}
