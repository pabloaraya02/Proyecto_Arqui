/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


function buildUserProfile(email){
    
    
}
/*Esto esta muy chancho pero es para la demostracion
 * lo que hace es retornar un objecto usuario para ser
 * usado por quien lo llame*/
function getUserByEmail(email){
    
    //villevillegas2@gmail.com
    //esaco02@gmail.com
    //pabloarayane0211@gmail.com
    var userObject = {};
    switch(email){
        case "villevillegas2@gmail.com":
            userObject.name = "Sergio";
            userObject.lastName = "Villegas";
            userObject.email = email;
            userObject.favoriteCountryCode = "PAN";
			userObject.favoriteCountry = "Panamá";
            userObject.urlPicture = "";
        break;
        case "esaco02@gmail.com":
            userObject.name = "Ernesto";
            userObject.lastName = "Saborío";
            userObject.email = email;
            userObject.favoriteCountryCode = "CRC";
			userObject.favoriteCountry = "Costa Rica";
            userObject.urlPicture = "";
        break;
        case "pabloarayane0211@gmail.com":
            userObject.name = "Pablo";
            userObject.lastName = "Araya";
            userObject.email = email;
            userObject.favoriteCountryCode = "MEX";
			userObject.favoriteCountry = "México";
            userObject.urlPicture = "";
        break;
        default:
            userObject.name = "";
            userObject.lastName = "";
            userObject.email = "";
            userObject.favoriteCountryCode = "";
            userObject.urlPicture = "";
        
    }
    return userObject;
}


function doLogin(email){
    
    var user = getUserByEmail(email);
    
    /*Se cambia las leyendas login y register por el nombre del usuario conectado*/
   
	$("#loginButton").attr("hidden","hidden");
	$("#registerButton").attr("hidden","hidden");
    
    $("#loginButton").before("<div id = 'userLoggedButton' class='col-md-4'>"+getLoggedDropdown(user)+"</div>");
    
    /*agregamos el modal del perfil de usuario*/
    $("#modalsContainer").append(modalUserProfile(email));
    
    
    /*Debemos mostrar el pais acorde con la preferencia del usuario (favoriteCountry)*/
}
function doLogout(){
    /*Removemos el modal de perfil de usuario y el dropdown*/
    $("#modalUserProfile").remove();
    $("#userLoggedButton").remove();
    
    /*Mostramos los botones de login y resgister de nuevo*/

    $("#loginButton").removeAttr("hidden");
	$("#registerButton").removeAttr("hidden");
    
}
function getLoggedDropdown(userLogged){
    var dropdown = "<div class='dropdown'>"+
"  <button class='btn btn-default dropdown-toggle btn-xs' type='button' id='userLoggedDropdown' data-toggle='dropdown' aria-haspopup='true' aria-expanded='true'>"+
     userLogged.name+
"    <span class='caret'></span>"+
"  </button>"+
"  <ul class='dropdown-menu' aria-labelledby='userLoggedDropdown'>"+
"    <li><a id='myProfileButton' href='#'>Mi Perfil <span class='glyphicon glyphicon-user'></span></a></li>"+
"    <li role='separator' class='divider'></li>"+
"    <li><a id='logoutButton' href='#'>Salir </a></li>"+
"  </ul>"+
"</div>";
    return dropdown;
}