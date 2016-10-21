/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


function buildBody() {
    var theContainer = $(".container");
    var header = "<div id='header' class='row'></div>";
    var pageTitle = "<div class='col-md-6'><h1>Hexagonal Final - RUSIA 2018</h1></div>";
    var countryImage = "<div class='col-md-12'><img id='countryImage' src='images/crc.png' alt='country'></div>";
    var loginButton = "<div id = 'loginButton' class='col-md-12'><a href=#>Login</a></div>";
    var divLoginAndCountryImage = "<div class='col-md-2 col-md-offset-4'><div class='row'>"+loginButton+"</div><div class='row'>"+countryImage+"</div></div>";
    
    theContainer.append(header);
    

    $("#header").append(pageTitle).append(divLoginAndCountryImage);
    var navigationPane = "<div id='navigationPane' class='col-md-3 sidebar'></div>";
    var resultsPane = "<div id='resultsPane' class='col-md-9'></div>";
    var mainPane = "<div id='mainPane' class='row'></div>";

    theContainer.append(mainPane);
    $("#mainPane").append(navigationPane).append(resultsPane);
    //$("#navigationPane").css("background-color:", "#67b168");
    //$("#resultsPane").css("background-color:", "#1b6d85");
    buildNavigation();
    var countrySelected = $("#countrySelect option:selected").val();
    setCountryTeamFlag(countrySelected);
    
    $("#resultsPane").append(buildCalendar(countrySelected));
    
    $("#navigationPane").append(buildClasificationTable());
}
function setCountryTeamFlag(countrySelected) {
    var imgVal = "";
    switch (countrySelected) {
        case "CRC":
            imgVal = "images/crc.png";
            break;
        case "HND":
            imgVal = "images/HND.png";
            break;
        case "MEX":
            imgVal = "images/MEX.png";
            break;
        case "PAN":
            imgVal = "images/PAN.png";
            break;
        case "TYT":
            imgVal = "images/TYT.png";
            break;

        default:
            imgVal = "images/USA.png";
    }
    $("#countryImage").removeAttr("src")
                        .attr("src",imgVal);
}
function buildNavigation() {
    $("#navigationPane").append(buildSelectOfCountries());
    $("#navigationPane").append("<ul class='nav nav-sidebar'>" +
            "<li class='active clicked'><a data-selection='calendar' href='#'>Calendario</a></li>" +
            "<li><a data-selection='news' href='#'>Noticias</a></li>" +
            "<li><a data-selection='ruta' href='#'>Ruta a la Hexagonal Final</a></li>" +
            "<li><a data-selection='videos' href='#'>Videos</a></li>" +
            "</ul>");
}

function buildResults(country, tabSelected) {
    var results = "";
    switch (tabSelected) {
        case "calendar":
            results = buildCalendar(country);
            break;
        case "news":
            results = buildNews(country);
            break;
        case "ruta":
            results = buildRuta(country);
            break;
        default:
            results = buildVideos(country);
    }
    return results;
}
function buildRuta(country){
    var ruta = "<h2>Ruta a la hexagonal final para: " + country + "</h2>";
    return ruta;
}
function buildVideos(country){
    var videos = "<h2>Videos para: " + country + "</h2>";
    return videos;
}
function buildNews(country) {

    var news = "<h2>Noticias para: " + country + "</h2>";
    return news;
}

function buildSelectOfCountries() {

    var select = "<div class='form-group form-group-sm'><select id='countrySelect' class='form-control'>" +
            "<option value='CRC'>Costa Rica</option>" +
            "<option value='HND'>Honduras</option>" +
            "<option value='MEX'>M&eacute;xico</option>" +
            "<option value='PAN'>Panam&aacute;</option>" +
            "<option value='TYT'>Trinidad y Tobago</option>" +
            "<option value='USA'>Estados Unidos</option>" +
            "</select></div>";
    return select;
}

function buildClasificationTable(){
    var clasificationTable = "<table id='clasificationTable' cellpadding='4' cellspacing='0' style='background: #f9f9f9; border: 1px #aaa solid; border-collapse: collapse; font-size: 95%; text-align: center;' width='74%'>"+
"<tbody><tr bgcolor='#006699' style='color: white;'>"+
"<th width='45%'>Selección</th>"+
"<th width='5%' style='cursor: help;' title='Puntos'>Pts.</th>"+
"<th width='5%' style='cursor: help;' title='Partidos jugados'>PJ</th>"+
"<th width='5%' style='cursor: help;' title='Partidos ganados'>PG</th>"+
"<th width='5%' style='cursor: help;' title='Partidos empatados'>PE</th>"+
"<th width='5%' style='cursor: help;' title='Partidos perdidos'>PP</th>"+
"<th width='5%' style='cursor: help;' title='Goles a favor'>GF</th>"+
"<th width='5%' style='cursor: help;' title='Goles en contra'>GC</th>"+
"<th width='5%' style='cursor: help;' title='Diferencia de goles'>Dif</th>"+
"</tr>"+
"<tr align='center' bgcolor='#D0E7FF'>"+
"<td align='left'>Estados Unidos</td>"+
"<td><b>0</b></td>"+
"<td>0</td>"+
"<td>0</td>"+
"<td>0</td>"+
"<td>0</td>"+
"<td>0</td>"+
"<td>0</td>"+
"<td>0</td>"+
"</tr>"+
"<tr align='center' bgcolor='#D0E7FF'>"+
"<td align='left'>Panamá</td>"+
"<td><b>0</b></td>"+
"<td>0</td>"+
"<td>0</td>"+
"<td>0</td>"+
"<td>0</td>"+
"<td>0</td>"+
"<td>0</td>"+
"<td>0</td>"+
"</tr>"+
"<tr align='center' bgcolor='#D0E7FF'>"+
"<td align='left'>Honduras</td>"+
"<td><b>0</b></td>"+
"<td>0</td>"+
"<td>0</td>"+
"<td>0</td>"+
"<td>0</td>"+
"<td>0</td>"+
"<td>0</td>"+
"<td>0</td>"+
"</tr>"+
"<tr align='center' bgcolor='#C8FFC8'>"+
"<td align='left'>Costa Rica</td>"+
"<td><b>0</b></td>"+
"<td>0</td>"+
"<td>0</td>"+
"<td>0</td>"+
"<td>0</td>"+
"<td>0</td>"+
"<td>0</td>"+
"<td>0</td>"+
"</tr>"+
"<tr align='center'>"+
"<td align='left'>México</td>"+
"<td><b>0</b></td>"+
"<td>0</td>"+
"<td>0</td>"+
"<td>0</td>"+
"<td>0</td>"+
"<td>0</td>"+
"<td>0</td>"+
"<td>0</td>"+
"</tr>"+
"<tr align='center'>"+
"<td align='left'>Trinidad y Tobago</td>"+
"<td><b>0</'b></td>"+
"<td>0</td>"+
"<td>0</td>"+
"<td>0</td>"+
"<td>0</td>"+
"<td>0</td>"+
"<td>0</td>"+
"<td>0</td>"+
"</tr>"+
"</tbody></table>";
    return clasificationTable;
}




/*probando el commit
 * 
 * 
 * 
 * */

