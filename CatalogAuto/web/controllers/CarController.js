class CarController 
{
    addCar(car) {
        var carService = new CarService();
        carService.addCar(car);
    };
    
    updateCar(car) {
        var carService = new CarService();
        carService.updateCar(car);
    };
    
    updateCarWOimage(car) {
        var carService = new CarService();
        carService.updateCarWOimage(car);
    };
    
    getCarById(id)
    {
        var carService = new CarService();
        var car =carService.getCarById(id);
        return car;
    };
    
    getCars()
    {
        var carService = new CarService();
        var cars =carService.getCars();
        return cars;
    };
    
    getCarTR(car)
    {
        var carText = "<tr><td>"+car.id+"</td><td>"+car.name+"</td><td>"+car.year+
        "</td><td>"+car.price+"</td><td>"+car.description+"</td><td>"+car.id_mark+"</td></tr>";
        //var image = document.getElementById("carImage");
        //image.src = "data:image/png;base64," + car.image;
        return carText;
    };

    getCarsTable()
    {
        var cars =this.getCars();
        var table ="";
        table+=this.getColumnNamesTR();
        for (var i = 0; i < cars.length; i++) 
        {
               var car = cars[i];
               var text=this.getCarTR(car);
               table+=text;
        }
        return table;
    };
    
    getCarsTableForDiv(tableName)
    {
      var table = this.getCarsTable();
      var element = document.getElementById(tableName);
      element.innerHTML = table;
    };
    
    deleteCarById(id) {
        var carService = new CarService();
        carService.deleteCarById(id);
    };
    
    getColumnNames() {
        var carService = new CarService();
        var columnNames =carService.getColumnNames();
        return columnNames;
    };
    
    getColumnNamesTR() {
        var columnNames = this.getColumnNames();
        var columnNamesForTable = "<tr>";
        for (var i = 0; i < columnNames.length; i++) {
            var columnName = columnNames[i];
            columnNamesForTable+="<th>"+columnName+"</th>";
        }
        columnNamesForTable+="</tr>";
        return columnNamesForTable;
    };
    
    getCarIdForOptionList(car) {
        var carText = "<option value='" + car.id + "'>" + car.id + " | " +  car.name + "</option>";
        return carText;
    };
    
    getCarsSelectList() {
        var cars = this.getCars();
        var selectOptions = "";
        for (var i=0; i<cars.length; i++) {
            var car = cars[i];
            var text = this.getCarIdForOptionList(car);
            selectOptions += text;
        }
        return selectOptions;
     };
     
    getCarsSelectListForDiv(selectList) {
        var selectOptions = this. getCarsSelectList();
        var element = document.getElementById(selectList);
        element.innerHTML = selectOptions; 
    };
}