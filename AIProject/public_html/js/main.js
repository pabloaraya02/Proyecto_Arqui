/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * RUNS ON PAGE LOAD
 * */
$(function(){
    
    //alert("HEY");
    buildBody(startGoogleSearch());
   
});
function startGoogleSearch(){
    console.log("Starting google search engine");
    var cx = '005786311165854202437:uxtijl1zp7w';
                var gcse = document.createElement('script');
                gcse.type = 'text/javascript';
                gcse.async = true;
                gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
                var s = document.getElementsByTagName('script')[0];
                s.parentNode.insertBefore(gcse, s);
                
               
                
}