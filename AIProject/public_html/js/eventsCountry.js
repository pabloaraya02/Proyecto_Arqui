/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).on("change","#selectCountryMainPage",function(e){
    e.preventDefault();

    var countrySelected = $("#selectCountryMainPage option:selected").val();
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

