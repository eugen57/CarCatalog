class OrderService {

    addOrder(order) {   
        var jsonOrder = JSON.stringify(order);
        var xhr = new XMLHttpRequest();
        var jsonData = 'jsonOrder='+encodeURIComponent(jsonOrder);
        var url = "/CatalogAuto/addOrder";
        xhr.open("POST", url, false);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        xhr.send(jsonData);
    };
    
    getAllOrders() {
        var request = new XMLHttpRequest();
        request.open("GET", "/CatalogAuto/getAllOrders" ,false);
        request.send();
        if (request.readyState != 4) 
            return;
        if(request.status == 200) {
            var text = request.responseText;
            var orders = [];
            orders = JSON.parse(text);
        }
        return orders;
    };
    
    updateOrder(order) {
        var jsonOrder = JSON.stringify(order);
        var xhr = new XMLHttpRequest();
        var jsonData = 'jsonOrder='+encodeURIComponent(jsonOrder);
        var url = "/CatalogAuto/updateOrder";
        xhr.open("POST", url, false);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        xhr.send(jsonData);
    };
    
    deleteOrderById(id) {
        var request = new XMLHttpRequest();
        request.open("POST", "/CatalogAuto/deleteOrderById?id="+id, false);
        request.send();
        if (request.readyState != 4) {
            return;
        }     
    };
    
    getColumnNames() {
        var request = new XMLHttpRequest();
        request.open("GET","/CatalogAuto/getColumnNamesOrders",false);
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