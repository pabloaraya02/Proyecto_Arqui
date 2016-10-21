/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


function modalLogin(){
    
    var modalLogin = "<div id='modalLogin' class='modal fade' tabindex='-1' role='dialog'>"+
    "  <div class='modal-dialog' role='document'>"+
    "    <div class='modal-content'>"+
    "      <div class='modal-header'>"+
    "        <button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>"+
    "        <h4 class='modal-title'>Iniciar Sesión</h4>"+
    "      </div>"+
    "      <div class='modal-body'>"+
            
            "<form>"+
            "  <div class='form-group'>"+
            "    <label for='InputEmailLogin'>Correo electrónico</label>"+
            "    <input type='email' class='form-control' id='InputEmailLogin' placeholder='Correo electrónico'>"+
            "  </div>"+
            "  <div class='form-group'>"+
            "    <label for='InputPasswordLogin'>Contraseña</label>"+
            "    <input type='password' class='form-control' id='InputPasswordLogin' placeholder='Contraseña'>"+
            "  </div>"+
            "</form>"+

    
    "      </div>"+
    "      <div class='modal-footer'>"+
    "        <button type='button' class='btn btn-default' data-dismiss='modal'>Cerrar</button>"+
    "        <button id='okLoginButton' type='button' class='btn btn-primary'>Iniciar sesión</button>"+
    "      </div>"+
    "    </div><!-- /.modal-content -->"+
    "  </div><!-- /.modal-dialog -->"+
    "</div><!-- /.modal -->";
    return modalLogin;

}
function modalRegister(){
    
    var modalRegist = "<div id='modalRegister' class='modal fade' tabindex='-1' role='dialog'>"+
    "  <div class='modal-dialog' role='document'>"+
    "    <div class='modal-content'>"+
    "      <div class='modal-header'>"+
    "        <button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>"+
    "        <h4 class='modal-title'>Registro</h4>"+
    "      </div>"+
    "      <div class='modal-body'>"+
    "        <p>One fine body&hellip;</p>"+
    "      </div>"+
    "      <div class='modal-footer'>"+
    "        <button type='button' class='btn btn-default' data-dismiss='modal'>Cerrar</button>"+
    "        <button type='button' class='btn btn-primary'>Registrarse</button>"+
    "      </div>"+
    "    </div><!-- /.modal-content -->"+
    "  </div><!-- /.modal-dialog -->"+
    "</div><!-- /.modal -->";
    return modalRegist;

}

function modalUserProfile(email){
    
    var userLogged = getUserByEmail(email);
    var flagUrl = getCountryTeamFlag(userLogged.favoriteCountry);
    var modal = "<div id='modalUserProfile' class='modal fade' tabindex='-1' role='dialog'>"+
    "  <div class='modal-dialog' role='document'>"+
    "    <div class='modal-content'>"+
    "<div class='panel panel-default panel-profile m-b-0'>"+
"            <div class='panel-heading' style='background-image: url("+flagUrl+");'></div>"+
"            <div class='panel-body text-center'>"+
"              <img class='panel-profile-img' src='images/avatarDefault.png'>"+
"              <h5 class='panel-title'>"+userLogged.name+" "+userLogged.lastName+"</h5>"+
"              <p class='m-b'></p>"+
"              <button type='button' class='btn btn-default' data-dismiss='modal'>Cerrar</button>"+
"            </div>"+
"          </div>"+

    "    </div><!-- /.modal-content -->"+
    "  </div><!-- /.modal-dialog -->"+
    "</div><!-- /.modal -->";
    return modal;
}
function getCountryTeamFlag(countrySelected) {
    var imgVal = "";
    switch (countrySelected) {
        case "CRC":
            imgVal = "images/CostaRicaFlag.GIF";
            break;
        case "HND":
            imgVal = "images/HondurasFlag.GIF";
            break;
        case "MEX":
            imgVal = "images/MexicoFlag.GIF";
            break;
        case "PAN":
            imgVal = "images/PanamaFlag.GIF";
            break;
        case "TYT":
            imgVal = "images/TrinidadFlag.GIF";
            break;

        default:
            imgVal = "images/USAFlag.GIF";
    }
    return imgVal;
}