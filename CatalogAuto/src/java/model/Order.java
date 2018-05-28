package model;

public class Order {
    protected int id;
    protected int id_car;
    protected String name;
    protected String telefon;
    protected String datetime;
    protected String status;

    
    public Order()  {
        
    }
    
    public Order(int id, int id_car, String name, String telefon, String datetime, String status) {
        this.id = id;
        this.id_car = id_car;
        this.name = name;
        this.telefon = telefon;
        this.datetime = datetime;
        this.status = status; 
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getId_car() {
        return id_car;
    }

    public void setId_car(int id_car) {
        this.id_car = id_car;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTelefon() {
        return telefon;
    }

    public void setTelefon(String telefon) {
        this.telefon = telefon;
    }

    public String getDatetime() {
        return datetime;
    }

    public void setDatetime(String datetime) {
        this.datetime = datetime;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "Order{" + "id=" + id + ", id_car=" + id_car + ", name=" + 
                name + ", telefon=" + telefon + ", datetime=" + datetime + 
                ", status=" + status + '}';
    }
    
}
