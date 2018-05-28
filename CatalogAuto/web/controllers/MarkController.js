
class MarkController {
    
    getMarkById(id) {
        var markService = new MarkService();
        var mark = markService.getMarkById(id);
        return mark;
    };
    
    getMarkByIdTR(mark) {
        var markText = "<tr><td>"+mark.name+"</td><td>"+mark.description+"</td>";
        var allCarsMark = [];
        allCarsMark = mark.cars;
        markText += "<td>";
        for (var i=0; i<allCarsMark.length; i++) {
            if(i === allCarsMark.length-1) {
                markText += allCarsMark[i].name;
            } else { 
                markText += allCarsMark[i].name + ", ";
            }   
        }
        markText += "</td>";
        return markText;
    };
    
    getMarkByIdDiv(id) {
        var mark = this.getMarkById(id);
        var markText = "<div>"+mark.name+" "+mark.description+" "+mark.cars+"</div>";
        return markText;
    };
       
    getMarkByIdDivList(id) {

        var element =document.getElementById("auto");
        var mark = this.getMarkById(id);
        var html = "";
        var cars = mark.cars;
        for (var i=0; i<cars.length; i++) 
        {
            var id = cars[i].id;
            var name = cars[i].name;
            var year = cars[i].year;
            var price = cars[i].price;
            var description = cars[i].description;
            var image = cars[i].image;
            var line = "<div class='row'> <div class='thumbnail'>"+
                    "<img  alt='error image' src='data:image/png;base64,"+ image +
                    "'class='img-responsive'> <div class='caption'>"+
                    "<h3>"+name+"</h3>"+
                    "<p>" + description + "</p>" +
                    "<p>Year: " + year + "</p>" +
                    "<p>Price: " + price + "$</p>" +
                    "<p> <button data-id='"+id+
                    "' data-toggle='modal' data-target='#myModal' class='sendOrderDialog btn btn-primary'>Buy</button></p>" +
                    "</div></div></div>" ;
            html += line;
        }
         element.innerHTML = html;
    };
   
    getMarks() {
        var markService = new MarkService();
        var marks = markService.getMarks();
        return marks;
    };
    
    getMarksTable() {
        var marks = this.getMarks();
        var table = "<table class='table' border=1>";
        for (var i=0; i<marks.length; i++) {
            var text = this.getMarkByIdTR(marks[i]);
            table += text;
        }
        table += "</table>";
        return table;
    };
    
    getMarkByIdWithoutCars(id) {
        var markService = new MarkService();
        var mark = markService.getMarkByIdWithoutCars(id);
        return mark;
    };
    
    getMarkByIdWithoutCarsTR(mark) {
        var markText = "<tr><td>" + mark.id + "</td><td>" + mark.name + 
                        "</td><td>" + mark.description + "</td></tr>";
        return markText;
    };
    
    getMarkByIdWithoutCarsOption(mark) {
        var markText = "<option value='" + mark.id + "'>" + mark.name + "</option>";
        return markText;
    };
    
    getMarkByIdWithoutCarsDiv(id) {
        var mark = this.getMarkByIdWithoutCars(id);
        var markText = "<div>"+ mark.name + " " + mark.description + "</div>";
        return markText;
    };
    
    getMarksWithoutCars() {
        var markService = new MarkService();
        var marksWithoutCars = markService.getMarksWithoutCars();
        return marksWithoutCars;
    };
    
    getMarksWithoutCarsTable() {
        var marksWithoutCars = this.getMarksWithoutCars();
        var table = "";
        table+=this.getColumnNamesTR();
        for (var i=0; i<marksWithoutCars.length; i++) {
            //var id = marksWithoutCars[i].id;
            var text = this.getMarkByIdWithoutCarsTR(marksWithoutCars[i]);
            table += text;
        }
        return table;
    };
    
    getMarksWithoutCarsList() {
        var element =document.getElementById("mark");
        var marksWithoutCars = this.getMarksWithoutCars();
        var html = "<div style='width:100%'  class='btn-group-vertical'>";
        for (var i=0; i<marksWithoutCars.length; i++) {
            var id = marksWithoutCars[i].id;
            var text = marksWithoutCars[i].name;
            var logo = marksWithoutCars[i].logo;
            var logoString ="<img  alt='' src='data:image/png;base64,"+ logo +
                            " 'style='height: 50px;'>"
            var line = " <button   style='width:100%'   onclick=\"actionClick(" + 
                        id + ")\" class='btn btn-default' id='" + id +"'>" +
                        logoString +" "+ text + " </button>";
            html += line;
        }
        html += "</div>";
        element.innerHTML = html;
    };
     
    getMarksSelectList() {
        var marksWithoutCars = this.getMarksWithoutCars();
        var selectOptions = "";
        for (var i=0; i<marksWithoutCars.length; i++) {
            //var id = marksWithoutCars[i].id;
            var text = this.getMarkByIdWithoutCarsOption(marksWithoutCars[i]);
            selectOptions += text;
        }
        return selectOptions;
    };
     
    getMarksSelectListForDiv(selectList) {
      var selectOptions = this. getMarksSelectList();
      var element = document.getElementById(selectList);
      element.innerHTML = selectOptions; 
    };
     
    getMarksTableForDiv(tableName) {
      var table = this.getMarksWithoutCarsTable();
      var element = document.getElementById(tableName);
      element.innerHTML = table;
    };
    
    deleteMarkById(id) {
       var markService = new MarkService();
       markService.deleteMarkById(id);
    };
    
    getColumnNames() {
        var markService = new MarkService();
        var columnNames =markService.getColumnNames();
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
    
    addMarkWithoutCars(mark) {
        var markService = new MarkService();
        markService.addMarkWithoutCars(mark);
    };
    
    updateMarkWithoutCars(mark) {
        var markService = new MarkService();
        markService.updateMarkWithoutCars(mark);
    };
    
    updateMarkWithoutCarsWOlogo(mark) {
        var markService = new MarkService();
        markService.updateMarkWithoutCarsWOlogo(mark);
    };
}


