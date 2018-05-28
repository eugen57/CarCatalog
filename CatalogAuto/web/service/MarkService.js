class MarkService {
    
    getMarks() {
        var request = new XMLHttpRequest();
        request.open("GET","/CatalogAuto/getMarks",false);
        request.send();
        if (request.readyState != 4) 
            return;
        if (request.status == 200) 
        {
            var text = request.responseText;
            var marks = [];
            marks = JSON.parse(text);
        }
        return marks;
    };
    
    getMarksWithoutCars() {
        var request = new XMLHttpRequest();
        request.open("GET","/CatalogAuto/getMarksWithoutCars",false);
        request.send();
        if (request.readyState != 4) 
            return;
        if (request.status == 200) 
        {
            var text = request.responseText;
            var marksWithourCars = [];
            marksWithourCars = JSON.parse(text);
        }
        return marksWithourCars;
    };
    
    getMarkById(id) {
        var request = new XMLHttpRequest();
        request.open("GET", "/CatalogAuto/getMarkById?id="+id, false);
        var mark = new Mark();
        request.send();
        if (request.readyState != 4) 
                 return;
        if (request.status == 200) 
        {
             mark = JSON.parse(request.responseText);
        }
        return mark;
    };
    
    getMarkByIdWithoutCars(id) {
        var request = new XMLHttpRequest();
        request.open("GET", "/CatalogAuto/getMarkByIdWithoutCars?id="+id, false);
        var mark = new Mark();
        request.send();
        if (request.readyState != 4) 
                 return;
        if (request.status == 200) 
        {
             mark = JSON.parse(request.responseText);
        }
        return mark;
    };
    
    addMarkWithoutCars(mark) {
        var jsonMark = JSON.stringify(mark);
        var xhr = new XMLHttpRequest();
        var jsonData = 'jsonMark='+encodeURIComponent(jsonMark);
        var url = "/CatalogAuto/addMarkWithoutCars";
        xhr.open("POST", url, false);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        xhr.send(jsonData);
    };
    
    updateMarkWithoutCars(mark) {
        var jsonMark = JSON.stringify(mark);
        var xhr = new XMLHttpRequest();
        var jsonData = 'jsonMark='+encodeURIComponent(jsonMark);
        var url = "/CatalogAuto/updateMarkWithoutCars";
        xhr.open("POST", url, false);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    
        xhr.send(jsonData);
    };
    
    updateMarkWithoutCarsWOlogo(mark) {
        var jsonMark = JSON.stringify(mark);
        var xhr = new XMLHttpRequest();
        var jsonData = 'jsonMark='+encodeURIComponent(jsonMark);
        var url = "/CatalogAuto/updateMarkWithoutCarsWOlogo";
        xhr.open("POST", url, false);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    
        xhr.send(jsonData);
    };
    
    deleteMarkById(id) {
        var request = new XMLHttpRequest();
        request.open("POST", "/CatalogAuto/deleteMarkById?id="+id, false);
        request.send();
        if (request.readyState != 4) 
            return;
    };
    
    getColumnNames() {
        var request = new XMLHttpRequest();
        request.open("GET","/CatalogAuto/getColumnNamesMarks",false);
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
