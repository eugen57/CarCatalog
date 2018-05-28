package model;

import java.util.List;

public class Mark {
    protected int id;
    protected String name;
    protected String description;
    protected List<Car> cars;
    protected byte[] logo;

    public Mark() {
    }
    
    public Mark(String name, String description) {
        this.name = name;
        this.description = description;
    }

    public Mark(int id, String name, String description, List<Car> cars) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.cars = cars;
    }

    public int getId() {
        return id;
    }
    
    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<Car> getCars() {
        return cars;
    }

    public void setCars(List<Car> cars) {
        this.cars = cars;
    }
    
    public byte[] getLogo() {
        return logo;
    }

    public void setLogo(byte[] logo) {
        this.logo = logo;
    }

    @Override
    public String toString() {
        return "Mark{" + "id=" + id + ", name=" + name + 
                ", description=" + description + ", cars=" + cars + '}';
    }
}
    

  
