package controllers;

import java.util.List;
import dal.MarkDal;
import model.Mark;

public class MarkController {

    private MarkDal markDal;
     
    public MarkController() {
        markDal = new MarkDal();
    }
    
    public List<Mark> getMarks() {
        return markDal.selectAll();
    }
    
    public Mark getMarkById(int id) {
        return markDal.selectById(id);
    }
    
    public List<Mark> getMarksWithoutCars() {
        return markDal.selectAllWithOutCars();
    }
    
    public Mark getMarkByIdWithoutCars(int id) {
        return markDal.selectByIdWithOutCars(id);
    }
    
    public void addMarkWithoutCars(Mark mark) {
        markDal.insertWithOutCars(mark);
    }
    
    public void updateMarkWithoutCars(Mark mark) {
        markDal.updateWithOutCars(mark);
    }
    
    public void updateMarkWithoutCarsWOlogo(Mark mark) {
        markDal.updateWithOutCarsWOlogo(mark);
    }
    
    public void deleteMarkById(int id) {
        markDal.deleteById(id);
    }
    
    public void deleteMarkByMark(Mark mark) {
        markDal.deleteByMark(mark);
    }
    
    public List<String> getColumnNames() {
        return markDal.getColumnNames();
    }
}
