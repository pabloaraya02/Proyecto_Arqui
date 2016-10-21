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
            "    <label for='InputEmailLogin'>Email address</label>"+
            "    <input type='email' class='form-control' id='InputEmailLogin' placeholder='Email'>"+
            "  </div>"+
            "  <div class='form-group'>"+
            "    <label for='InputPasswordLogin'>Password</label>"+
            "    <input type='password' class='form-control' id='InputPasswordLogin' placeholder='Password'>"+
            "  </div>"+
            "</form>"+

    
    "      </div>"+
    "      <div class='modal-footer'>"+
    "        <button type='button' class='btn btn-default' data-dismiss='modal'>Close</button>"+
    "        <button id='okLoginButton' type='button' class='btn btn-primary'>Login</button>"+
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
    "        <button type='button' class='btn btn-default' data-dismiss='modal'>Close</button>"+
    "        <button type='button' class='btn btn-primary'>Registrarse</button>"+
    "      </div>"+
    "    </div><!-- /.modal-content -->"+
    "  </div><!-- /.modal-dialog -->"+
    "</div><!-- /.modal -->";
    return modalRegist;

}