package model;

public class Car {
    protected int id;
    protected String name;
    protected int year;
    protected double price;
    protected String description;
    protected int id_mark;
    protected byte[] image;

    public Car() {
    }

    public Car(int id, String name, int year, double price, String description, int id_mark) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.price = price;
        this.description = description;
        this.id_mark = id_mark;
    }

    public Car(String name, int year, double price, String description, int id_mark) {
        this.name = name;
        this.year = year;
        this.price = price;
        this.description = description;
        this.id_mark = id_mark;
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

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }
   
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getId_mark() {
        return id_mark;
    }

    public void setId_mark(int id_mark) {
        this.id_mark = id_mark;
    }
    
    public byte[] getImage() {
        return image;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }

    @Override
    public String toString() {
        return "Car{" + "id=" + id + ", name=" + name + ", year=" + 
                year + ", price=" + price + ", description=" + 
                description + ", id_mark=" + id_mark + '}';
    }

}
