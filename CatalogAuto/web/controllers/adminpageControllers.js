function insertCar() {
    var selectListMarks = document.getElementById("marksListInsert");
    
    var name = document.getElementById("carNameAdd").value; 
    var year = document.getElementById("carYearAdd").value; 
    var price = document.getElementById("carPriceAdd").value; 
    var description = document.getElementById("carDescriptionAdd").value;
    var id_mark = selectListMarks.options[selectListMarks.selectedIndex].value;
    var image = document.getElementById("carImageAdd");
    
    var car = new Car(0,name,year,price,description,id_mark,"");
    var carController = new CarController();
    
    if(image.files[0]) {
        var fr = new FileReader();
            fr.onloadend = function (e) {
                var base64Image = convertToCleanBase64(e.target.result); 

                car.image = base64Image; 
                carController.addCar(car);
            };
        fr.readAsDataURL(image.files[0]);
    } else {
        carController.addCar(car);
    }
};

function updateCar() {
    var selectListMarks = document.getElementById("marksListUpdate");
    
    var id = document.getElementById("updateCarId").value;
    var name = document.getElementById("carNameUpdate").value;
    var year = document.getElementById("carYearUpdate").value;
    var price = document.getElementById("carPriceUpdate").value; 
    var description = document.getElementById("carDescriptionUpdate").value;
    var id_mark = selectListMarks.options[selectListMarks.selectedIndex].value;
    var image = document.getElementById("carImageUpdate");
    
    var carController = new CarController();
    var car = new Car(id,name,year,price,description,id_mark,"");
    
    if(image.files[0]) {
        var fr = new FileReader();
            fr.onloadend = function (e) {
                var base64Image = convertToCleanBase64(e.target.result);
                
                car.image = base64Image;
                carController.updateCar(car);
            };
        fr.readAsDataURL(image.files[0]);
    } else {
        carController.updateCarWOimage(car);
    }
};

function deleteCar() {
    var id = document.getElementById("deleteCarId").value;
    var carController = new CarController();
    carController.deleteCarById(id);
};

function insertMark() {
    var name = document.getElementById("markNameInsert").value; 
    var description = document.getElementById("markDescriptionInsert").value;
    var image = document.getElementById("markImageInsert").files[0];
    
    var fr = new FileReader();
        fr.onloadend = function (e) {
            var base64Image = convertToCleanBase64(e.target.result);

            var mark = new Mark(0,name,description,base64Image);
            var markController = new MarkController();
            markController.addMarkWithoutCars(mark);
        };
    fr.readAsDataURL(image);
};

function updateMark() {
    var id = document.getElementById("updateMarkId").value;
    var name = document.getElementById("markNameUpdate").value; 
    var description = document.getElementById("markDescriptionUpdate").value;
    var image = document.getElementById("markImageUpdate");
    
    var markController = new MarkController();
    var mark = new Mark(id,name,description,"");
    
    if(image.files[0]) {
        var fr = new FileReader();
            fr.onloadend = function (e) {
                var base64Image = convertToCleanBase64(e.target.result);

                mark.logo = base64Image;
                markController.updateMarkWithoutCars(mark);
            };
        fr.readAsDataURL(image.files[0]);
    } else {
        markController.updateMarkWithoutCarsWOlogo(mark);
    }
};

function deleteMark() {
    var id = document.getElementById("updateMarkId").value;
    var markController = new MarkController();
    markController.deleteMarkById(id);
};

function updateOrder() {
    var idCarList = document.getElementById('orderListIdCar');
    
    var id = document.getElementById("updateOrderId").value;
    var idCar = idCarList.options[idCarList.selectedIndex].value;
    var name = document.getElementById('orderNameUpdate').value;
    var telephone = document.getElementById('orderTelephoneUpdate').value;
    var status = document.getElementById("ordersListUpdate").value;
    
    var orderController = new OrderController();
    var order = new Order(id,idCar,name,telephone,null,status);
    orderController.updateOrder(order);
};

function deleteOrder() {
    var id = document.getElementById("deleteOrderId").value;
    var orderController = new OrderController();
    orderController.deleteOrderById(id);
};

function insertCarImageSizeCheck() {
    imageSizeCheck("carImageAdd");
};

function updateCarImageSizeCheck() {
    imageSizeCheck("carImageUpdate");
};

function insertMarkImageSizeCheck() {
    imageSizeCheck("markImageInsert");
};

function updateMarkImageSizeCheck() {
    imageSizeCheck("markImageUpdate");
};

function insertMarkImageNotNullCheck() {
    if( document.getElementById("markImageInsert").files.length == 0 ){
        alert("Mark logo should be chosen! Please choose image");
        $('#markModalInsert').show();
        return false;
    }
};

function convertToCleanBase64(imageData) {
  var BASE64_MARKER = ';base64,';
  var base64Index = imageData.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
  var base64Image = imageData.substring(base64Index);
  
  return base64Image;
};

function imageSizeCheck(imageId) {
    var uploadMarkImage = document.getElementById(imageId);
    if(uploadMarkImage.files[0].size > 65535){
       alert("File is too big!");
       uploadMarkImage.value = "";
    };
};

