class CarService {

getCars()
{
    var request = new XMLHttpRequest();
    request.open("GET", "/CatalogAuto/getCars", false);
    request.send();
    if (request.readyState != 4) 
        return;
    if (request.status == 200) 
    {
        var text=request.responseText;
        var cars = [];
        cars=JSON.parse(text);
    }
    return cars;   
};

getCarById(id)
{
    var request = new XMLHttpRequest();
    request.open("GET", "/CatalogAuto/getCarById?id="+id, false);
    var car = new Car();
    request.send();
    if (request.readyState != 4) 
        return;
    if (request.status == 200) 
    {
        car = JSON.parse(request.responseText);
    }
    return car;
};

addCar(car) 
{
    var jsonCar = JSON.stringify(car);
    var xhr = new XMLHttpRequest();
    var jsonData = 'jsonCar='+encodeURIComponent(jsonCar);
    var url = "/CatalogAuto/addCar";
    xhr.open("POST", url, false);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.send(jsonData);
};

updateCar(car) 
{
    var jsonCar = JSON.stringify(car);
    var xhr = new XMLHttpRequest();
    var jsonData = 'jsonCar='+encodeURIComponent(jsonCar);
    var url = "/CatalogAuto/updateCar";
    xhr.open("POST", url, false);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    
    xhr.send(jsonData);
};

updateCarWOimage(car) 
{
    var jsonCar = JSON.stringify(car);
    var xhr = new XMLHttpRequest();
    var jsonData = 'jsonCar='+encodeURIComponent(jsonCar);
    var url = "/CatalogAuto/updateCarWOimage";
    xhr.open("POST", url, false);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    
    xhr.send(jsonData);
};

deleteCarById(id)
{
    var request = new XMLHttpRequest();
    request.open("POST", "/CatalogAuto/deleteCarById?id="+id, false);
    request.onreadystatechange = function ()
    {
        if (request.readyState != 4) return;
    };
    request.send();
};

getColumnNames()
{
    var request = new XMLHttpRequest();
    request.open("GET", "/CatalogAuto/getColumnNamesCars", false);
    request.send();
    if (request.readyState != 4) 
        return;
    if (request.status == 200) 
    {
        var text = request.responseText;
        var columnNames = [];
        columnNames = JSON.parse(text);
    }
    return columnNames;  
};

}