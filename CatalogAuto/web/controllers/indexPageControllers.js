function loginSumbit()  {
    var user = document.getElementById("userModal").value;
    var pass = document.getElementById("passModal").value;
    var userController = new UserController();
    var userExist = userController.doesUserExist(user,pass);
    if(userExist) {
        alert("Hello, "+user+"!");
        $.cookie('catalogAutoLogin', 'authorized');
        window.location.replace("/CatalogAuto/view/adminpage.html");
        return false;
    }
    else {
        alert("User doesn't exist or password is incorrect.\n\nPlease try again");
        $('#login-modal').show();
        return false;
    }
};

function actionOrderClick(){
    var id_car = document.getElementById("idCar").value;;
    var name = document.getElementById("name").value;
    var telefon = document.getElementById("telefon").value;
    var datetime = new Date().toISOString().slice(0, 19).replace('T', ' ');
    var order = new Order(0, id_car, name, telefon, datetime, null);

    var orderController = new OrderController();
    orderController.addOrder(order);
    alert("Your order is added!");
};


