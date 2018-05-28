class UserService {
    
    doesUserExist(name, password) {
        var request = new XMLHttpRequest();
        request.open("GET","/CatalogAuto/doesUserExist?name="+name+"&password="+password,false);
        request.send();
        if(request.readyState!=4) return;
        if(request.status==200) {
            var userExistString = request.responseText;
            if(userExistString == 1) {
                  return true;
            } else {
                  return false;
              }
        }
    };    
}


