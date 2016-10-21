/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).on("change","#countrySelect",function(e){
    e.preventDefault();

    var countrySelected = $("#countrySelect option:selected").val();
    setCountryTeamFlag(countrySelected);
    $("#resultsPane")
            .empty()
            .append(buildResults(countrySelected,"calendar"));
});

$(document).on("click","#navigationPane .nav-sidebar li a",function(e){
    e.preventDefault();
    var selection = $(this).attr("data-selection");
    var countrySelected = $("#countrySelect option:selected").val();
    setCountryTeamFlag(countrySelected);
	$("#resultsPane")
            .empty()
            .append(buildResults(countrySelected,selection));
	//console.log("sss");		
	//console.log($("#resultsPane li"));
	$(".clicked").removeClass("clicked");

    $(this).parent("li").addClass("clicked");
});

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