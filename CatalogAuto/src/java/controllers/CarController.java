package controllers;

import dal.CarDal;
import java.util.List;
import model.Car;

public class CarController {
    
    private CarDal carDal;
    
    public CarController(){
        carDal = new CarDal();
    }
    
    public List<Car> getCars() {
        return carDal.selectAll();
    }
    
    public Car getCarById(int id) {
        return carDal.selectById(id);
    }
    
    public void addCar(Car car) {
        carDal.insert(car);
    }
    
    public void updateCar(Car car) {
        carDal.update(car);
    }
    
    public void updateCarWOimage(Car car) {
        carDal.updateWOimage(car);
    }
    
    public void deleteCarById(int id){
        carDal.deleteById(id);
    }
    
    public void deleteCarByCar(Car car){
        carDal.deleteByCar(car);
    }
    
    public List<String> getColumnNames() {
        return carDal.getColumnNames();
    }
}
