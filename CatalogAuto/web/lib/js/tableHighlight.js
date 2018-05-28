
function highlightCarsTable() {
    function highlightCar(e) {
        if (selected[0]) 
            selected[0].className = '';
        e.target.parentNode.className = 'selected';
        var value = $(".selected td:first").html();
        
        var nameTable = $(".selected td:eq(1)").html();
        var yearTable = $(".selected td:eq(2)").html();
        var priceTable = $(".selected td:eq(3)").html();
        var descriptionTable = $(".selected td:eq(4)").html();
        var id_markTable = $(".selected td:eq(5)").html();
        
        
        var insertButton = document.getElementById('insertCarId');
        var updateButton = document.getElementById('updateCarId');
        var deleteButton = document.getElementById('deleteCarId');
        insertButton.value= value;
        updateButton.value= value;
        deleteButton.value= value;
        
        var markName = document.getElementById('marksListUpdate');
        markName.value = id_markTable;
        
        
        var modelName = document.getElementById('carNameUpdate');
        modelName.value= nameTable;
        
        var year = document.getElementById('carYearUpdate');
        year.value= yearTable;
        
        var price = document.getElementById('carPriceUpdate');
        price.value= priceTable;
        
        var description = document.getElementById('carDescriptionUpdate');
        description.value= descriptionTable;
        
        var carController = new CarController();
        var car = carController.getCarById(value);
        var image = document.getElementById("carImage");
        image.src = "data:image/png;base64," + car.image;
    }
        var table = document.getElementById('carsTable');
        var selected = table.getElementsByClassName('selected');
        table.onclick = highlightCar;
};

function highlightMarksTable() {
    function highlightMark(e) {
        if (selectedMarks[0]) 
            selectedMarks[0].className = '';
        e.target.parentNode.className = 'selectedMarks';
        var value = $(".selectedMarks td:first").html();
        
        var nameMarkTable = $(".selectedMarks td:eq(1)").html();
        var descriptionMarkTable = $(".selectedMarks td:eq(2)").html();
        
        
        var insertMarkId = document.getElementById('insertMarkId');
        var updateMarkId = document.getElementById('updateMarkId');
        var deleteMarkId = document.getElementById('deleteMarkId');
        insertMarkId.value= value;
        updateMarkId.value= value;
        deleteMarkId.value= value;
        
        var markName = document.getElementById('markNameUpdate');
        markName.value= nameMarkTable;
        
        var markDescription = document.getElementById('markDescriptionUpdate');
        markDescription.value= descriptionMarkTable;
        
        var markControlller = new MarkController();
        var mark = markControlller.getMarkByIdWithoutCars(value);
        var markImage = document.getElementById("markImage");
        markImage.src = "data:image/png;base64," + mark.logo;
    }
        var tableMarks = document.getElementById('marksTable');
        var selectedMarks = tableMarks.getElementsByClassName('selectedMarks');
        tableMarks.onclick = highlightMark;
};

function highlightOrdersTable() {
    function highlightOrder(e) {
        if (selectedOrders[0]) 
            selectedOrders[0].className = '';
        e.target.parentNode.className = 'selectedOrders';
        var value = $(".selectedOrders td:first").html();
        
        var idCarOrderTable = $(".selectedOrders td:eq(1)").html();
        var nameOrderTable = $(".selectedOrders td:eq(2)").html();
        var telefonOrderTable = $(".selectedOrders td:eq(3)").html();
        var statusOrderTable = $(".selectedOrders td:eq(5)").html();
            
        var updateOrderId = document.getElementById('updateOrderId');
        var deleteOrderId = document.getElementById('deleteOrderId');
        updateOrderId.value= value;
        deleteOrderId.value= value;
        
        var orderIdCar = document.getElementById('orderListIdCar');
        var orderName = document.getElementById('orderNameUpdate');
        var orderTelephone = document.getElementById('orderTelephoneUpdate');
        var orderStatus = document.getElementById('ordersListUpdate');
        orderIdCar.value = idCarOrderTable;
        orderName.value = nameOrderTable;
        orderTelephone.value = telefonOrderTable;
        orderStatus.value = statusOrderTable;      
    }
        var tableOrders = document.getElementById('ordersTable');
        var selectedOrders = tableOrders.getElementsByClassName('selectedOrders');
        tableOrders.onclick = highlightOrder;
};


