/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var domainroot='www.google.com';
function Gsitesearch(curobj){ curobj.q.value='site:'+domainroot+' '+curobj.qfront.value } 

function buildBody(myCallback) {
    var theContainer = $(".container");
    var header = "<div id='header' class='row'></div>";
    var pageTitle = "<div class='col-md-8'><h1><a class='texto-blanco' href='#' id='tittle'>Hexagonal Final - RUSIA 2018</a></h1></div>";

	//var googleSearch="<form class='search navbar-form navbar-right' action='http://www.google.com/search' method='get'role='search' onSubmit='Gsitesearch(this)'> <div class='input-group'> <input name='q' type='hidden' /> <input class='form-control' name='qfront' type='search' required class='searchField' placeholder='Google Site Search' maxlength='50'/> <span class='input-group-btn'> <button type='submit' class='search-button btn btn-primary'> <span class='glyphicon glyphicon-search'></span> </button> </span> </div> </form>";
    var countryImage = "<div class='col-md-12'><img class='pull-right' id='countryImage' src='images/crc.png' alt='country'></div>";

	var loginButton = "<div id = 'loginButton' class='col-md-6 col-sm-12 main-icons'><a class='texto-blanco' href='#'>Inicio de sesión <i class='glyphicon glyphicon-user'></i></a></div>"+
                             "<div id = 'registerButton' class='col-md-6 col-sm-12 main-icons'><a class='texto-blanco' href='#'>Regístrese <i class='glyphicon glyphicon-pencil'></i></a></div>";
     var divLoginAndCountryImage = "<div class='col-md-4 pull-right' id='divLoginAndCountryImage'><div class='row'>"+loginButton+"</div><div class='row'>"+countryImage+"</div></div>";
	
	
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
    
    /*Agregamos el modal para el login al index*/
    $("#modalsContainer").append(modalLogin());
    $("#modalsContainer").append(modalRegister());
    
    /*Este corre el startGoogleSearch()*/
  //  myCallback;
    $(".gsc-control-cse-es").css("background-color","transparent")
                            .css("border-color","transparent"); 
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
    $("#navigationPane").append(buildSelectOfCountries("selectCountryMainPage"));
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
var news_en = "<div class='news-container'><div class='content-latest-news-head'><h3>Latest news</h3></div><div class='content-latest-news-item'><ul class='ul-inline'><li class='col1'><a class='newsDetail'>                        <div class='news-latest-item-image'>                            <img alt='' src='img/FEAT-BryanRuiz-061116vColombia-299x269.jpg'>                                                    </div>                    </a>                </li>                <li class='col2'>						<span class='latest-news-category'>						<h4><a class='newsDetail'>CONCACAF, UEFA CL players featured in Costa Rica WCQ squad</a>                        </h4>						<a >World Cup Qualifying - Men</a>						<span class='date'>Nov 03, 2016</span>						</span>						<span class='latest-news-item-descr' title='Costa Rica head coach Oscar Ramirez announced Wednesday a 23-man roster for the opening matches of fifth round, CONCACAF qualifying for the 2018 FIFA World Cup against Trinidad &amp; Tobago (November 11, away) and the United States (November 15, home).'>Costa Rica head coach Oscar Ramirez announced Wednesday a 23-man roster for the opening matches of fifth round, CONCACAF qualifying for the 2018 FIFA World Cup against Trinidad &amp; Tobago (November 11, away) and the United States (November 15, home).</span>                </li>            </ul>        </div>                <div class='content-latest-news-item'>            <ul class='ul-inline'>                <li class='col1'>                    <a >                        <div class='news-latest-item-image'>                            <img alt='' src='img/FEAT-AntonyLozano-070115vMexico-299x269.jpg'>                                                    </div>                    </a>                </li>                <li class='col2'>						<span class='latest-news-category'>						<h4><a>Honduras int’l Lozano sidelined by injury in Spain</a>                        </h4>						<a>World Cup Qualifying - Men</a>						<span class='date'>Nov 01, 2016</span>						</span>						<span class='latest-news-item-descr' title='Honduras international Antony Lozano will be out of action for an unspecified amount of time after suffering an injury in a Spanish second-division match this past weekend, his club Tenerife announced.'>Honduras international Antony Lozano will be out of action for an unspecified amount of time after suffering an injury in a Spanish second-division match this past weekend, his club Tenerife announced.</span>                </li>            </ul>        </div>                <div class='content-latest-news-item'>            <ul class='ul-inline'>                <li class='col1'>                    <a >                        <div class='news-latest-item-image'>                            <img alt='' src='img/FEAT-Trinidad-111315vGuatemalaCelebration-299x269.jpg'>                                                    </div>                    </a>                </li>                <li class='col2'>						<span class='latest-news-category'>						<h4><a>T&amp;T places initial focus on World Cup qualifiers</a>                        </h4>						<a>World Cup Qualifying - Men</a>						<span class='date'>Oct 28, 2016</span>						</span>						<span class='latest-news-item-descr' title='Trinidad &amp; Tobago’s only World Cup appearance came in 2006, when it registered a scoreless draw and two losses by the same 2-0 result in three matches.'>Trinidad &amp; Tobago’s only World Cup appearance came in 2006, when it registered a scoreless draw and two losses by the same 2-0 result in three matches.</span>                </li>            </ul>        </div>                <div class='content-latest-news-item'>            <ul class='ul-inline'>                <li class='col1'>                    <a>                        <div class='news-latest-item-image'>                            <img alt='' src='img/FEAT-BlasPerez-092816vCentralFCCelebration1-299x269.jpg'>                                                    </div>                    </a>                </li>                <li class='col2'>						<span class='latest-news-category'>						<h4><a >SCCL stars featured on Panama WCQ roster</a>                        </h4>						<a >Champions League</a>						<span class='date'>Oct 26, 2016</span>						</span>						<span class='latest-news-item-descr' title='Panama head coach Hernan Dario Gomez announced Wednesday a list of 25 players called up for the opening pair of matches in the final round of CONCACAF qualifying for the 2018 FIFA World Cup.'>Panama head coach Hernan Dario Gomez announced Wednesday a list of 25 players called up for the opening pair of matches in the final round of CONCACAF qualifying for the 2018 FIFA World Cup.</span>                </li>            </ul>        </div>                   <!-- <div class='content-news-ad'>                <div id='div-gpt-ad-1371523363480-1-1' style='width:728px; height:90px;' data-google-query-id='CMiFjrHBjdACFRJGhgodGQQHkA'><div id='google_ads_iframe_/23939445/NewsHub_EN_728x90_First_0__container__' style='border: 0pt none;'><iframe id='google_ads_iframe_/23939445/NewsHub_EN_728x90_First_0' title='3rd party ad content' name='google_ads_iframe_/23939445/NewsHub_EN_728x90_First_0' width='728' height='90' scrolling='no' marginwidth='0' marginheight='0' frameborder='0' srcdoc='' style='border: 0px; vertical-align: bottom;'></iframe></div></div>            </div>                    -->		<div class='content-latest-news-item'>            <ul class='ul-inline'>                <li class='col1'>                    <a >                        <div class='news-latest-item-image'>                            <img alt='' src='img/FEAT-KenwyneJones-100518vDominicanRepublic1-299x269.jpg'>                                                    </div>                    </a>                </li>                <li class='col2'>						<span class='latest-news-category'>						<h4><a>T&amp;T int’l Jones to miss Central FC’s SCCL clash at SKC</a>                        </h4>						<a>Caribbean Cup - Men</a>						<span class='date'>Oct 19, 2016</span>						</span>						<span class='latest-news-item-descr' title='Kenwyne Jones will miss Central FC’s last game in the 2016/17 Scotiabank CONCACAF Champions League on Wednesday at Sporting Kansas as recovers from tendon damage in his leg.'>Kenwyne Jones will miss Central FC’s last game in the 2016/17 Scotiabank CONCACAF Champions League on Wednesday at Sporting Kansas as recovers from tendon damage in his leg.</span>                </li>            </ul>        </div>                <div class='content-latest-news-item'>            <ul class='ul-inline'>                <li class='col1'>                    <a>                        <div class='news-latest-item-image'>                            <img alt='' src='img/FEAT-JulianGreen-070114vBelgiumC-299x269.jpg'>                                                    </div>                    </a>                </li>                <li class='col2'>						<span class='latest-news-category'>						<h4><a>Green, once again, makes U.S. impact</a>                        </h4>						<a>World Cup Qualifying - Men</a>						<span class='date'>Oct 13, 2016</span>						</span>						<span class='latest-news-item-descr' title='Jurgen Klinsmann had a good inkling that Julian Green was going to do something special this time.'>Jurgen Klinsmann had a good inkling that Julian Green was going to do something special this time.</span>                </li>            </ul>        </div>                <div class='content-latest-news-item'>            <ul class='ul-inline'>                <li class='col1'>                    <a >                        <div class='news-latest-item-image'>                            <img alt='' src='img/FEAT-OribePeralta-101116vPanama-299x269.jpg'>                                                    </div>                    </a>                </li>                <li class='col2'>						<span class='latest-news-category'>						<h4><a >Peralta goal powers Mexico past Panama</a>                        </h4>						<a >World Cup Qualifying - Men</a>						<span class='date'>Oct 12, 2016</span>						</span>						<span class='latest-news-item-descr' title='Oribe Peralta’s second-half goal proved to be the difference as Mexico edged Panama, 1-0, in an international friendly at Toyota Park on Tuesday night in both teams’ final tune-up before the start of the final round of CONCACAF qualifying for the 2018 FIFA World Cup.'>Oribe Peralta’s second-half goal proved to be the difference as Mexico edged Panama, 1-0, in an international friendly at Toyota Park on Tuesday night in both teams’ final tune-up before the start of the final round of CONCACAF qualifying for the 2018 FIFA World Cup.</span>                </li>            </ul>        </div>                <div class='content-latest-news-item'>            <ul class='ul-inline'>                <li class='col1'>                    <a>                        <div class='news-latest-item-image'>                            <img alt='' src='img/FEAT-Canada-101116vMorocco-299x269.jpg'>                                                    </div>                    </a>                </li>                <li class='col2'>						<span class='latest-news-category'>						<h4><a>Canada falls to Morocco in friendly</a>                        </h4>						<a>World Cup Qualifying - Men</a>						<span class='date'>Oct 12, 2016</span>						</span>						<span class='latest-news-item-descr' title='Morocco scored three goals in the second half, including a pair from the penalty spot, to earn a 4-0 win over visiting Canada in an international friendly on Tuesday at the Grand Stade de Marrakech.'>Morocco scored three goals in the second half, including a pair from the penalty spot, to earn a 4-0 win over visiting Canada in an international friendly on Tuesday at the Grand Stade de Marrakech.</span>                </li>            </ul>        </div>                <div class='content-latest-news-item'>            <ul class='ul-inline'>                <li class='col1'>                    <a>                        <div class='news-latest-item-image'>                            <img alt='' src='img/FEAT-SachaKljestan-101116vNewZealand-299x269.jpg'>                                                    </div>                    </a>                </li>                <li class='col2'>						<span class='latest-news-category'>						<h4><a>Late goal gives New Zealand draw with U.S.</a>                        </h4>						<a>World Cup Qualifying - Men</a>						<span class='date'>Oct 12, 2016</span>						</span>						<span class='latest-news-item-descr' title='The United States could not hold onto a one-goal lead and settled for a 1-1 draw with visiting New Zealand in an international friendly at Robert F. Kennedy Memorial Stadium on Tuesday night.'>The United States could not hold onto a one-goal lead and settled for a 1-1 draw with visiting New Zealand in an international friendly at Robert F. Kennedy Memorial Stadium on Tuesday night.</span>                </li>            </ul>        </div>                <div class='content-latest-news-item'>            <ul class='ul-inline'>                <li class='col1'>                    <a>                        <div class='news-latest-item-image'>                            <img alt='' src='img/FEAT-Panama-101016Training-299x269.jpg'>                                                    </div>                    </a>                </li>                <li class='col2'>						<span class='latest-news-category'>						<h4><a>Panama looks to make most of Mexico opportunity</a>                        </h4>						<a>World Cup Qualifying - Men</a>						<span class='date'>Oct 11, 2016</span>						</span>						<span class='latest-news-item-descr' title=' It will be a CONCACAF Hexagonal preview on Tuesday, when Panama and Mexico meet in an international friendly at Toyota Park.'> It will be a CONCACAF Hexagonal preview on Tuesday, when Panama and Mexico meet in an international friendly at Toyota Park.</span>                </li>            </ul>        </div>        </div>";	
var news_es="<div class='news-container'><div class='content-latest-news-head'><h3>Últimas Noticias</h3></div><div class='content-latest-news-item'>            <ul class='ul-inline'>                <li class='col1'>                    <a class='newsDetail'>                        <div class='news-latest-item-image'>                            <img alt='' src='img/FEAT-BryanRuiz-061116vColombia-299x269.jpg'>                                                    </div>                    </a>                </li>                <li class='col2'>						<span class='latest-news-category'>						<h4><a class='newsDetail'>Costa Rica oficializó convocatoria para eliminatorias Mundialistas</a>                        </h4>						<a>Premundial - Hombres</a>						<span class='date'>Nov 03, 2016</span>						</span>						<span class='latest-news-item-descr' title='El entrenador de Costa Rica, Oscar Ramírez, anunció el miércoles, la nómina de 23 jugadores para los partidos dos primeros partidos de la Hexagonal final de la CONCACAF para la Copa Mundial de la FIFA 2018 ...'>El entrenador de Costa Rica, Oscar Ramírez, anunció el miércoles, la nómina de 23 jugadores para los partidos dos primeros partidos de la Hexagonal final de la CONCACAF para la Copa Mundial de la FIFA 2018 ...</span>                </li>            </ul>        </div>                <div class='content-latest-news-item'>            <ul class='ul-inline'>                <li class='col1'>                    <a>                        <div class='news-latest-item-image'>                            <img alt='' src='img/FEAT-AntonyLozano-070115vMexico-299x269.jpg'>                                                    </div>                    </a>                </li>                <li class='col2'>						<span class='latest-news-category'>						<h4><a>Internacional hondureño Lozano es baja por lesión sufrida en España</a>                        </h4>						<a>Premundial - Hombres</a>						<span class='date'>Nov 01, 2016</span>						</span>						<span class='latest-news-item-descr' title='El internacional hondureño Antony Lozano estará fuera de acción por un tiempo no especificado después de sufrir una lesión en un partido de la segunda división en España el pasado fin de semana, anunció su club Tenerife.'>El internacional hondureño Antony Lozano estará fuera de acción por un tiempo no especificado después de sufrir una lesión en un partido de la segunda división en España el pasado fin de semana, anunció su club Tenerife.</span>                </li>            </ul>        </div>                <div class='content-latest-news-item'>            <ul class='ul-inline'>                <li class='col1'>                    <a>                        <div class='news-latest-item-image'>                            <img alt='' src='img/FEAT-Trinidad-111315vGuatemalaCelebration-299x269.jpg'>                                                    </div>                    </a>                </li>                <li class='col2'>						<span class='latest-news-category'>						<h4><a>Trinidad y Tobago empieza a enfocarse en las eliminatorias al Mundial</a>                        </h4>						<a>Premundial - Hombres</a>						<span class='date'>Oct 28, 2016</span>						</span>						<span class='latest-news-item-descr' title='La única participación de Trinidad en la Copa Mundial fue en 2006, cuando registró un empate sin goles y dos derrotas por idéntico marcador 2-0.'>La única participación de Trinidad en la Copa Mundial fue en 2006, cuando registró un empate sin goles y dos derrotas por idéntico marcador 2-0.</span>                </li>            </ul>        </div>                <div class='content-latest-news-item'>            <ul class='ul-inline'>                <li class='col1'>                    <a>                        <div class='news-latest-item-image'>                            <img alt='' src='img/FEAT-BlasPerez-092816vCentralFCCelebration1-299x269.jpg'>                                                    </div>                    </a>                </li>                <li class='col2'>						<span class='latest-news-category'>						<h4><a>Estrellas de SCCL destacan en convocatoria de Panamá para las Eliminatorias</a>                        </h4>						<a>Premundial - Hombres</a>						<span class='date'>Oct 26, 2016</span>						</span>						<span class='latest-news-item-descr' title='El entrenador de Panamá Hernán Darío Gómez anunció el miércoles, la nómina de 25 jugadores convocados para los dos partidos eliminatorios de la ronda final de la CONCACAF para la Copa Mundial de la FIFA 2018.'>El entrenador de Panamá Hernán Darío Gómez anunció el miércoles, la nómina de 25 jugadores convocados para los dos partidos eliminatorios de la ronda final de la CONCACAF para la Copa Mundial de la FIFA 2018.</span>                </li>            </ul>        </div>                <div class='content-latest-news-item'>            <ul class='ul-inline'>                <li class='col1'>                    <a>                        <div class='news-latest-item-image'>                            <img alt='' src='img/FEAT-KenwyneJones-100518vDominicanRepublic1-299x269.jpg'>                                                    </div>                    </a>                </li>                <li class='col2'>						<span class='latest-news-category'>						<h4><a>Jones se perderá el duelo de Central  FC contra Sporting Kansas City</a>                        </h4>						<a>Copa Caribe - Hombres</a>						<span class='date'>Oct 19, 2016</span>						</span>						<span class='latest-news-item-descr' title='Kenwyne Jones se perderá el último partido del FC Central en la Liga de Campeones CONCACAF Scotiabank 2016-17 el miércoles cuando visiten a Sporting de Kansas debido a una lesión en el tendón de la pierna.'>Kenwyne Jones se perderá el último partido del FC Central en la Liga de Campeones CONCACAF Scotiabank 2016-17 el miércoles cuando visiten a Sporting de Kansas debido a una lesión en el tendón de la pierna.</span>                </li>            </ul>        </div>                <div class='content-latest-news-item'>            <ul class='ul-inline'>                <li class='col1'>                    <a>                        <div class='news-latest-item-image'>                            <img alt='' src='img/FEAT-JulianGreen-070114vBelgiumC-299x269.jpg'>                                                    </div>                    </a>                </li>                <li class='col2'>						<span class='latest-news-category'>						<h4><a>Otra vez, Julian Green, causó impacto con EE.UU.</a>                        </h4>						<a>Premundial - Hombres</a>						<span class='date'>Oct 13, 2016</span>						</span>						<span class='latest-news-item-descr' title='Jurgen Klinsmann tuvo un buen indicio de que Julian Green iba a hacer algo especial en esta ocasión.'>Jurgen Klinsmann tuvo un buen indicio de que Julian Green iba a hacer algo especial en esta ocasión.</span>                </li>            </ul>        </div>                <div class='content-latest-news-item'>            <ul class='ul-inline'>                <li class='col1'>                    <a>                        <div class='news-latest-item-image'>                            <img alt='' src='img/FEAT-OribePeralta-101116vPanama-299x269.jpg'>                                                    </div>                    </a>                </li>                <li class='col2'>						<span class='latest-news-category'>						<h4><a>Gol de Oribe Peralta da triunfo a México sobre Panamá</a>                        </h4>						<a>Premundial - Hombres</a>						<span class='date'>Oct 12, 2016</span>						</span>						<span class='latest-news-item-descr' title='Un gol en el segundo tiempo de Oribe Peralta resultó ser la diferencia para que México venciera 1-0 a Panamá en un amistoso internacional en el Toyota Park el martes por la noche en el último partido de preparación para ambos equipos antes del inicio de la ronda final de CONCACAF para la Copa Mundial de la FIFA 2018.'>Un gol en el segundo tiempo de Oribe Peralta resultó ser la diferencia para que México venciera 1-0 a Panamá en un amistoso internacional en el Toyota Park el martes por la noche en el último partido de preparación para ambos equipos antes del inicio de la ronda final de CONCACAF para la Copa Mundial de la FIFA 2018.</span>                </li>            </ul>        </div>                <div class='content-latest-news-item'>            <ul class='ul-inline'>                <li class='col1'>                    <a>                        <div class='news-latest-item-image'>                            <img alt='' src='img/FEAT-Canada-101116vMorocco-299x269.jpg'>                                                    </div>                    </a>                </li>                <li class='col2'>						<span class='latest-news-category'>						<h4><a>Canadá perdió a nivel amistoso en Marruecos</a>                        </h4>						<a>Premundial - Hombres</a>						<span class='date'>Oct 12, 2016</span>						</span>						<span class='latest-news-item-descr' title='Marruecos anotó tres goles en el segundo tiempo, incluyendo dos desde el punto de penal, para sellar una victoria 4-0 sobre Canadá en un amistoso internacional el martes en el Grand Stade de Marrakech.'>Marruecos anotó tres goles en el segundo tiempo, incluyendo dos desde el punto de penal, para sellar una victoria 4-0 sobre Canadá en un amistoso internacional el martes en el Grand Stade de Marrakech.</span>                </li>            </ul>        </div>                <div class='content-latest-news-item'>            <ul class='ul-inline'>                <li class='col1'>                    <a>                        <div class='news-latest-item-image'>                            <img alt='' src='img/FEAT-SachaKljestan-101116vNewZealand-299x269.jpg'>                                                    </div>                    </a>                </li>                <li class='col2'>						<span class='latest-news-category'>						<h4><a>Gol tardío da empate a Nueva Zelanda ante EE.UU.</a>                        </h4>						<a>Premundial - Hombres</a>						<span class='date'>Oct 12, 2016</span>						</span>						<span class='latest-news-item-descr' title='Estados Unidos no pudo mantener una ventaja de un gol y se conformó con un empate 1-1 contra Nueva Zelanda en un amistoso internacional en el Estadio Robert F. Kennedy Memorial el martes por la noche.'>Estados Unidos no pudo mantener una ventaja de un gol y se conformó con un empate 1-1 contra Nueva Zelanda en un amistoso internacional en el Estadio Robert F. Kennedy Memorial el martes por la noche.</span>                </li>            </ul>        </div>                <div class='content-latest-news-item'>            <ul class='ul-inline'>                <li class='col1'>                    <a>                        <div class='news-latest-item-image'>                            <img alt='' src='img/FEAT-Panama-101016Training-299x269.jpg'>                                                    </div>                    </a>                </li>                <li class='col2'>						<span class='latest-news-category'>						<h4><a>Panamá buscará aprovechar al máximo el duelo ante México</a>                        </h4>						<a>Premundial - Hombres</a>						<span class='date'>Oct 11, 2016</span>						</span>						<span class='latest-news-item-descr' title='Será un duelo previo a la hexagonal final de la CONCACAF el martes, cuando Panamá y México se enfrenten en un amistoso internacional en el Toyota Park.'>Será un duelo previo a la hexagonal final de la CONCACAF el martes, cuando Panamá y México se enfrenten en un amistoso internacional en el Toyota Park.</span>                </li>            </ul>        </div>                    </div>";    
//return news_es;
	var textLang="";
	//var lang=
	if($("#languageSelect").val()==="ESP"){//si es español
		textLang=news_es;
	}else{//sino ingles
		textLang=news_en;
	}
	return textLang;
}
$(document).on("click",".newsDetail",function(e){
    //e.preventDefault();
	var textLang="";
	if($("#languageSelect").val()==="ESP"){
		textLang="<div class='content-wysivig content-article-reduced'><div class='content-head'><span class='date'>Jueves Nov 03, 2016</span><h2>Costa Rica oficializó convocatoria para eliminatorias Mundialistas</h2></div><div style=' margin: 30px 0 20px 15px; text-align: center;'><img src='img/FEAT-BryanRuiz-061116vColombia-769x385.jpg' alt='' style='max-width: 725px;'></div><div class='breadcrumbs'><ul class='ul-inline breadcrumbs-items'><li><a href='http://www.concacaf.com/es/'><img src='img/breadcrumbs_logo.png' alt=''></a> <span class='separator'></span></li> <li><a href='/news'>Noticias</a> <span class='separator'></span> </li><li><a href='http://www.concacaf.com/es/category/eliminatoria-copa-mundial-hombres'>Premundial - Hombres</a> </li></ul><div class='article-share-buttons' style='margin-top:10px;'><span class='text-share'>Comparte Este Articulo</span><a href='https://www.facebook.com/sharer/sharer.php?u=http://www.concacaf.com/es/article/concacaf-uefa-cl-players-featured-in-costa-rica-wcq-squad' target='_blank'><img src='img/icon_facebook.png' alt=''></a><a href='http://twitter.com/home?status=http://www.concacaf.com/es/article/concacaf-uefa-cl-players-featured-in-costa-rica-wcq-squad' target='_blank'><img src='img/icon_twitter.png' alt=''></a><a href='https://plus.google.com/share?url=ttp://www.concacaf.com/es/article/concacaf-uefa-cl-players-featured-in-costa-rica-wcq-squad' target='_blank'><img src='img/icon_google.png' alt=''></a></div></div><p><span style='color: #808080;'><em>Bryan Ruiz (camiseta roja), que juega con el Sporting de Lisboa en la UEFA Champions League 2016-17, fue convocado en Costa Rica para disputar la hexagonal final de la CONCACAF que inicia en noviembre. (Foto: Víctor Straffon / Straffon Images)</em></span></p><p>&nbsp;<strong>SAN JOSÉ (Costa Rica)</strong> - El entrenador de Costa Rica, Oscar Ramírez, anunció el miércoles, la nómina de 23 jugadores para los partidos dos primeros partidos de la Hexagonal final de la CONCACAF para la Copa Mundial de la FIFA 2018 contra Trinidad y Tobago (11 de noviembre de visita) y Estados Unidos cuatro días después 15 de local.</p><p>&nbsp;El listado destaca por la inclusión del portero del Real Madrid Keylor Navas, que no ha jugado un partido competitivo con los Ticos desde que ganó 3-0 a Jamaica en la cuarta ronda el 29 de marzo.</p><p>&nbsp;Además de Navas, otros miembros la convocatoria incluye a los que participan en la UEFA Champions League 2016-17 los atacantes del Sporting de Lisboa Joel Campbell (3 partidos / 0 goles en la Liga de Campeones) y Bryan Ruiz (3/1), y el defensa Celtic Cristian Gamboa (2 / 0).</p><p>&nbsp;Cuatro jugadores con clubes que llegaron recientemente a los cuartos de final de la Liga de Campeones de la CONCACAF 2016/-7 los defensores Francisco Calvo (Saprissa) y Kendall Waston (Vancouver Whitecaps), así como los centrocampistas Cristian Bolaóos (Vancouver Whitecaps) y David Guzmán (Saprissa )</p><p>&nbsp;Costa Rica tiene hasta el momento cuatro victorias consecutivas, anotando al menos tres goles en tres de esas salidas.</p><p>&nbsp;<strong>CONVOCATORIA</strong></p><p>&nbsp;<strong>PORTEROS</strong>: Esteban Alvarado (Trabzonspor/Turquía), Keylor Navas (Real Madrid/España), Patrick Pemberton (Alajuelense)</p><p>&nbsp;<strong>DEFENSAS</strong>: Johnny Acosta (Herediano), Francisco Calvo (Saprissa), Cristian Gamboa (Celtic/Escocia), Ronald Matarrita (New York City FC/EUA), Bryan Oviedo (Everton/inglaterra), Pablo Salazar (Herediano), José Salvatierra (Alajuelense), Michael Umaña (Alajuelense), Kendall Waston (Vancouver Whitecaps/Canadá)</p><p>&nbsp;<strong>MEDIOCAMPISTAS</strong>: Randall Azofeifa (Herediano), Cristian Bolaños (Vancouver Whitecaps), Celso Borges (Deportivo La Coruña/España), David Guzmán (Saprissa), Bryan Ruiz (Sporting Lisbon/Portugal), Yeltsin Tejeda (Lausanne/Suiza), Johan Venegas (Montreal Impact), Rodney Wallace (Recife/Brasil)</p><p>&nbsp;<strong>DELANTEROS</strong>: Joel Campbell (Sporting Lisbon/Portugal), Ariel Rodríguez (Bangkok Glass/Thailanda), Marco Ureña (Brondby/Dinamarca)</p>   </div>";
	}else{
		textLang="<div class='content-wysivig content-article-reduced'>  <div class='content-head'> <span class='date'>Thursday Nov 03, 2016</span> <h2>CONCACAF, UEFA CL players featured in Costa Rica WCQ squad</h2>  </div><div style=' margin: 30px 0 20px 15px; text-align: center;'><img src='img/FEAT-BryanRuiz-061116vColombia-769x385.jpg' alt='' style='max-width: 725px;'></div>  <div class='breadcrumbs'> <ul class='ul-inline breadcrumbs-items'>  <li><a href='http://www.concacaf.com/'><img src='img/breadcrumbs_logo.png' alt=''></a> <span class='separator'></span></li> <li><a href='/news'>News</a> <span class='separator'></span> </li><li><a href='http://www.concacaf.com/category/world-cup-qualifying-men'>World Cup Qualifying - Men</a>  </li></ul> <div class='article-share-buttons' style='margin-top:10px;'> <span class='text-share'>SHARE THIS ARTICLE</span> <a href='https://www.facebook.com/sharer/sharer.php?u=http://www.concacaf.com/article/concacaf-uefa-cl-players-featured-in-costa-rica-wcq-squad' target='_blank'><img src='img/icon_facebook.png' alt=''>  </a>  <a href='http://twitter.com/home?status=http://www.concacaf.com/article/concacaf-uefa-cl-players-featured-in-costa-rica-wcq-squad' target='_blank'><img src='img/icon_twitter.png' alt=''>  </a>  <a href='https://plus.google.com/share?url=ttp://www.concacaf.com/article/concacaf-uefa-cl-players-featured-in-costa-rica-wcq-squad' target='_blank'><img src='img/icon_google.png' alt=''>  </a></div></div>  <p><span style='color: #808080;'><em>Bryan Ruiz (red jersey), who is playing with Sporting Lisbon in the 2016/17 UEFA Champions League, was called up to Costa Rica for World Cup qualifiers to be played later this month.&nbsp;(Photo: Victor Straffon/Straffon Images)</em></span></p><p>&nbsp;</p><p><strong>SAN JOSE, Costa Rica</strong> -- Costa Rica head coach Oscar Ramirez announced Wednesday a 23-man roster for the opening matches of fifth round, CONCACAF qualifying for the 2018 FIFA World Cup against Trinidad &amp; Tobago (November 11, away) and the United States (November 15, home).</p><p>The squad is highlighted by the inclusion of Real Madrid goalkeeper Keylor Navas, who hasn’t played a competitive match for the Ticos since a 3-0 win over visiting Jamaica in the fourth round on March 29.</p><p>In addition to Navas, other squad members participating in the 2016/17 UEFA Champions League include Sporting Lisbon attackers Joel Campbell (3 games/0 goals in Champions League) and Bryan Ruiz (3/1), and Celtic defender Cristian Gamboa (2/0).</p><p>Four players with clubs that recently reached the 2016/17 Scotiabank CONCACAF Champions League quarterfinals were also called up – defenders Francisco Calvo (Saprissa) and Kendall Waston (Vancouver Whitecaps), as well as midfielders Cristian Bolanos (Vancouver Whitecaps) and David Guzman (Saprissa)</p><p>Costa Rica is riding a four-game winning streak, scoring at least three goals in three of those outings.</p><p>&nbsp;</p><p><strong><span style='text-decoration: underline;'>ROSTER</span></strong></p><p><strong>GOALKEEPERS:</strong> Esteban Alvarado (Trabzonspor/Turkey), Keylor Navas (Real Madrid/Spain), Patrick Pemberton (Alajuelense)</p><p><strong>DEFENDERS:</strong> Johnny Acosta (Herediano), Francisco Calvo (Saprissa), Cristian Gamboa (Celtic/Scotland), Ronald Matarrita (New York City FC/USA), Bryan Oviedo (Everton/England), Pablo Salazar (Herediano), Jose Salvatierra (Alajuelense), Michael Umaña (Alajuelense), Kendall Waston (Vancouver Whitecaps/Canada)</p><p><strong>MIDFIELDERS:</strong> Randall Azofeifa (Herediano), Cristian Bolaños (Vancouver Whitecaps), Celso Borges (Deportivo La Coruña/Spain), David Guzman (Saprissa), Bryan Ruiz (Sporting Lisbon/Portugal), Yeltsin Tejeda (Lausanne/Switzerland), Johan Venegas (Montreal Impact), Rodney Wallace (Recife/Brazil)</p><p><strong>FORWARDS:</strong> Joel Campbell (Sporting Lisbon/Portugal), Ariel Rodriguez (Bangkok Glass/Thailand), Marco Urena (Brondby/Denmark)</p>  </div>";
	}
	$("#resultsPane")
            .empty()
            .append(textLang);
});
function buildSelectOfCountries(idSelect) {

    var select = "<div class='form-group form-group-sm'><select id='"+idSelect+"' class='form-control'>" +
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




