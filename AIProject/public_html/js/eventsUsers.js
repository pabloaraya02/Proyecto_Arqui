/*Abre el modal de Login*/

$(document).on("click","#loginButton",function(e){
    e.preventDefault();
    $('#modalLogin').modal();
});


/*Abre el modal de Registro*/

$(document).on("click","#registerButton",function(e){
    e.preventDefault();
    $('#modalRegister').modal();
});

/*Hacer login*/
$(document).on("click","#okLoginButton",function(e){
    
    e.preventDefault();
    /*
     *Hay que validar los Inputs 
     * 
     **/
    //alert($("#InputEmailLogin").val());
    doLogin($("#InputEmailLogin").val());
    $('#modalLogin').modal('hide');
});

/*Hacer logout*/

$(document).on("click","#logoutButton",function(e){
    e.preventDefault();
    doLogout();
});

/*Abrir Modal Perfil de usuario*/
$(document).on("click","#myProfileButton",function(e){
    e.preventDefault();
    $('#modalUserProfile').modal();
});
