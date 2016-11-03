/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).on("change","#languageSelect",function(e){
    e.preventDefault();
    
    
    if($("#languageSelect option:selected").val() === "ESP"){
        getLang()
          .done(function(results){
              translatePage(results.d[0]);
            
        }).fail(function(jqXHR, textStatus, errorThrown){
            
        });
    }else{
        //Es ingles
        getLang()
          .done(function(results){
              translatePage(results.d[1]);
            
        }).fail(function(jqXHR, textStatus, errorThrown){
            console.log("FAAAAILLL");
        });
        
    }
});
function translatePage(language){
    console.log(language.jornadaCAPS);
    console.log(language.VS);
    console.log(language);
    
    /*Primero el Titulo*/
    
    $("#tittle").html("").append(language.tituloPrincipal + " - " +language.Rusia2018CAPS);
    
    /*Registro y Lo8ing*/
    
    $("#loginButton a").text("").append(language.login + " <i class='glyphicon glyphicon-user'></i>");
    $("#registerButton a").text("").append(language.signUP + " <i class='glyphicon glyphicon-pencil'></i>");
    
    /*Modals de login y registro*/
    //login
    $("#modalLogin .modal-dialog .modal-content .modal-header .modal-title").text("").append(language.login);
    $("#modalLogin > div > div > div.modal-body > form > div:nth-child(1) > label").text("").append(language.email);
    $("#InputEmailLogin").attr("placeholder",language.email);
    
    $("#modalLogin > div > div > div.modal-body > form > div:nth-child(2) > label").text("").append(language.password);
    $("#InputPasswordLogin").attr("placeholder",language.password);
    
    //Registro
    
    $("#modalRegister > div > div > div.modal-header > h4").text("").append(language.signUP);
    //Email
    $("#modalRegister > div > div > div.modal-body > form > div:nth-child(1) > label").text("").append(language.email);
    $("#InputEmailReg").attr("placeholder",language.email);
    //password
    $("#modalRegister > div > div > div.modal-body > form > div:nth-child(2) > label").text("").append(language.password);
    $("#InputPasswordReg").attr("placeholder",language.password);
    //repeat password
    $("#modalRegister > div > div > div.modal-body > form > div:nth-child(3) > label").text("").append(language.password);
    $("#repeatInputPasswordReg").attr("placeholder",language.password);
    //select country
    $("#modalRegister > div > div > div.modal-body > form > div:nth-child(4) > label").text("").append(language.SleccionesSuPais);
    $("#chooseCountryReg > option:nth-child(3)").text("").append(language.Mexico);
    $("#chooseCountryReg > option:nth-child(4)").text("").append(language.Panama);
    $("#chooseCountryReg > option:nth-child(5)").text("").append(language.Trinidad);
    $("#chooseCountryReg > option:nth-child(6)").text("").append(language.USA);
    
    //Translate Schedule
    translateSchedule(language);
    
}
function translateSchedule(language){
    
    $("#resultsPane table tbody td").each(function(i){
        if($(this).text() === "Visitante" || $(this).text() === "Guest"){
            
            $(this).text("").append(language.Visitante);
        }
        if($(this).text() === "Casa" || $(this).text() === "Home"){
            
            $(this).text("").append(language.Casa);
        }
        
        /*Countries*/
        if($(this).text() === "México" || $(this).text() === "Mexico"){
            
            $(this).text("").append(language.Mexico);
        }
        if($(this).text() === "Panamá" || $(this).text() === "Panama"){
            
            $(this).text("").append(language.Panama);
        }
        if($(this).text() === "Trinidad y Tobago" || $(this).text() === "Trinidad & Tobago"){
            
            $(this).text("").append(language.Trinidad);
        }
        if($(this).text() === "Estados Unidos" || $(this).text() === "United States"){
            
            $(this).text("").append(language.USA);
        }
        
        /*dates*/
        if($(this).text() === "11 de noviembre de 2016" || $(this).html() === "November 11<sup>th</sup>, 2016"){
            
            $(this).text("").append(language.d11denoviembrede2016);
        }
        if($(this).text() === "15 de noviembre de 2016" || $(this).html() === "November 15<sup>th</sup>, 2016"){
            
            $(this).text("").append(language.d15denoviembrede2016);
        }
        if($(this).text() === "24 de marzo de 2017" || $(this).html() === "March 24<sup>th</sup>, 2017"){
            
            $(this).text("").append(language.d24demarzode2017);
        }
        if($(this).text() === "28 de marzo de 2017" || $(this).html() === "March 28<sup>th</sup>, 2017"){
            
            $(this).text("").append(language.d28demarzode2017);
        }
        if($(this).text() === "7 de junio de 2017" || $(this).html() === "June 7<sup>th</sup>, 2017"){
            
            $(this).text("").append(language.d7dejuniode2017);
        }
        if($(this).text() === "13 de junio de 2017" || $(this).html() === "June 13<sup>th</sup>, 2017"){
            
            $(this).text("").append(language.d13dejuniode2017);
        }
        if($(this).text() === "1 de septiembre de 2017" || $(this).html() === "September 1<sup>st</sup>, 2017"){
            
            $(this).text("").append(language.d1deseptiembrede2017);
        }
        if($(this).text() === "5 de septiembre de 2017" || $(this).html() === "September 5<sup>th</sup>, 2017"){
            
            $(this).text("").append(language.d5deseptiembrede2017);
        }
        if($(this).text() === "6 de octubre de 2017" || $(this).html() === "October 6<sup>th</sup>, 2017"){
            
            $(this).text("").append(language.d6deoctubrede2017);
        }
        if($(this).text() === "10 de octubre de 2017" || $(this).html() === "October 10<sup>th</sup>, 2017"){
            
            $(this).text("").append(language.d10deoctubrede2017);
        }
        
        
    });
}
function getLang(){
   
    return $.ajax({
        url:"js/json/lang.json",
        //type:"get",
        dataType: "json"
    })/*.done(function(result){
        
        console.log(result);
    }).fail(function(jqXHR, textStatus, errorThrown ){
        console.log(jqXHR);
        console.log(textStatus);
        console.log(errorThrown);
        alert("BAD REQUEST");
    })*/;
};
function getLAng2(){
    
     $.getJSON( "lang.json", function() {
  console.log( "success" );
})
  .done(function() {
    console.log( "second success" );
  })
  .fail(function() {
    console.log( "error" );
  })
  .always(function() {
    console.log( "complete" );
  });
}