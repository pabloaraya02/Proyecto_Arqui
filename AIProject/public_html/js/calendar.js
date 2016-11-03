function buildCalendar(country) {
    var schecule = "";
    switch (country) {
        case "CRC":
            schecule = "<table class='table'>"+
                "<thead><tr class='tableizer-firstrow'><th>#</th><th>Jornada</th><th>Fecha</th><th>Rival</th><th>Condición</th></tr></thead><tbody>"+
                "<tr><td>1</td><td>Jornada 1</td><td>11 de noviembre de 2016</td><td>Trinidad y Tobago</td><td>Visitante</td></tr>"+
                "<tr><td>2</td><td>Jornada 2</td><td>15 de noviembre de 2016</td><td>Estados Unidos</td><td>Casa</td></tr>"+
                "<tr><td>3</td><td>Jornada 3</td><td>24 de marzo de 2017</td><td>México</td><td>Visitante</td></tr>"+
                "<tr><td>4</td><td>Jornada 4</td><td>28 de marzo de 2017</td><td>Honduras</td><td>Visitante</td></tr>"+
                "<tr><td>5</td><td>Jornada 5</td><td>7 de junio de 2017</td><td>Panamá</td><td>Casa</td></tr>"+
                "<tr><td>6</td><td>Jornada 6</td><td>13 de junio de 2017</td><td>Trinidad y Tobago</td><td>Casa</td></tr>"+
                "<tr><td>7</td><td>Jornada 7</td><td>1 de septiembre de 2017</td><td>Estados Unidos</td><td>Visitante</td></tr>"+
                "<tr><td>8</td><td>Jornada 8</td><td>5 de septiembre de 2017</td><td>México</td><td>Casa</td></tr>"+
                "<tr><td>4</td><td>Jornada 4</td><td>6 de octubre de 2017</td><td>Honduras</td><td>Casa</td></tr>"+
                "<tr><td>5</td><td>Jornada 10</td><td>10 de octubre de 2017</td><td>Panamá</td><td>Visitante</td></tr>"+
                "</tbody></table>";
            break;
        case "HND":
            schecule = "<table class='table'>"+
                "<thead><tr class='tableizer-firstrow'><th>#</th><th>Jornada</th><th>Fecha</th><th>Rival</th><th>Condición</th></tr></thead><tbody>"+
                "<tr><td>1</td><td>Jornada 1</td><td>11 de noviembre de 2016</td><td>Panamá</td><td>Visitante</td></tr>"+
                "<tr><td>2</td><td>Jornada 2</td><td>15 de noviembre de 2016</td><td>Trinidad y Tobago</td><td>Casa</td></tr>"+
                "<tr><td>3</td><td>Jornada 3</td><td>24 de marzo de 2017</td><td>Estados Unidos</td><td>Visitante</td></tr>"+
                "<tr><td>4</td><td>Jornada 4</td><td>28 de marzo de 2017</td><td>Costa Rica</td><td>Visitante</td></tr>"+
                "<tr><td>5</td><td>Jornada 5</td><td>7 de junio de 2017</td><td>México </td><td>Casa</td></tr>"+
                "<tr><td>6</td><td>Jornada 6</td><td>13 de junio de 2017</td><td>Panamá</td><td>Casa</td></tr>"+
                "<tr><td>7</td><td>Jornada 7</td><td>1 de septiembre de 2017</td><td>Trinidad y Tobago</td><td>Visitante</td></tr>"+
                "<tr><td>8</td><td>Jornada 8</td><td>5 de septiembre de 2017</td><td>Estados Unidos</td><td>Casa</td></tr>"+
                "<tr><td>4</td><td>Jornada 4</td><td>6 de octubre de 2017</td><td>Costa Rica</td><td>Casa</td></tr>"+
                "<tr><td>5</td><td>Jornada 10</td><td>10 de octubre de 2017</td><td>México </td><td>Visitante</td></tr>"+
                "</tbody></table>";

            break;
        case "MEX":
            schecule = "<table class='table'>"+
                "<thead><tr class='tableizer-firstrow'><th>#</th><th>Jornada</th><th>Fecha</th><th>Rival</th><th>Condición</th></tr></thead><tbody>"+
                "<tr><td>1</td><td>Jornada 1</td><td>11 de noviembre de 2016</td><td>Estados Unidos</td><td>Visitante</td></tr>"+
                "<tr><td>2</td><td>Jornada 2</td><td>15 de noviembre de 2016</td><td>Panamá </td><td>Casa</td></tr>"+
                "<tr><td>3</td><td>Jornada 3</td><td>24 de marzo de 2017</td><td>Costa Rica</td><td>Visitante</td></tr>"+
                "<tr><td>4</td><td>Jornada 4</td><td>28 de marzo de 2017</td><td>Trinidad y Tobago</td><td>Visitante</td></tr>"+
                "<tr><td>5</td><td>Jornada 5</td><td>7 de junio de 2017</td><td>Honduras</td><td>Casa</td></tr>"+
                "<tr><td>6</td><td>Jornada 6</td><td>13 de junio de 2017</td><td>Estados Unidos</td><td>Casa</td></tr>"+
                "<tr><td>7</td><td>Jornada 7</td><td>1 de septiembre de 2017</td><td>Panamá</td><td>Visitante</td></tr>"+
                "<tr><td>8</td><td>Jornada 8</td><td>5 de septiembre de 2017</td><td>Costa Rica</td><td>Casa</td></tr>"+
                "<tr><td>4</td><td>Jornada 4</td><td>6 de octubre de 2017</td><td> Trinidad y Tobago</td><td>Casa</td></tr>"+
                "<tr><td>5</td><td>Jornada 10</td><td>10 de octubre de 2017</td><td>Honduras</td><td>Visitante</td></tr>"+
                "</tbody></table>";
            break;
        case "PAN":
            schecule = "<table class='table'>"+
                "<thead><tr class='tableizer-firstrow'><th>#</th><th>Jornada</th><th>Fecha</th><th>Rival</th><th>Condición</th></tr></thead><tbody>"+
                "<tr><td>1</td><td>Jornada 1</td><td>11 de noviembre de 2016</td><td>Honduras </td><td>Visitante</td></tr>"+
                "<tr><td>2</td><td>Jornada 2</td><td>15 de noviembre de 2016</td><td>México</td><td>Casa</td></tr>"+
                "<tr><td>3</td><td>Jornada 3</td><td>24 de marzo de 2017</td><td>Trinidad y Tobago </td><td>Visitante</td></tr>"+
                "<tr><td>4</td><td>Jornada 4</td><td>28 de marzo de 2017</td><td>Estados Unidos</td><td>Visitante</td></tr>"+
                "<tr><td>5</td><td>Jornada 5</td><td>7 de junio de 2017</td><td>Costa Rica</td><td>Casa</td></tr>"+
                "<tr><td>6</td><td>Jornada 6</td><td>13 de junio de 2017</td><td>Honduras </td><td>Casa</td></tr>"+
                "<tr><td>7</td><td>Jornada 7</td><td>1 de septiembre de 2017</td><td>México</td><td>Visitante</td></tr>"+
                "<tr><td>8</td><td>Jornada 8</td><td>5 de septiembre de 2017</td><td>Trinidad y Tobago </td><td>Casa</td></tr>"+
                "<tr><td>4</td><td>Jornada 4</td><td>6 de octubre de 2017</td><td>Estados Unidos</td><td>Casa</td></tr>"+
                "<tr><td>5</td><td>Jornada 10</td><td>10 de octubre de 2017</td><td>Costa Rica</td><td>Visitante</td></tr>"+
                "</tbody></table>";
            break;
        case "TYT":
            schecule = "<table class='table'>"+
                "<thead><tr class='tableizer-firstrow'><th>#</th><th>Jornada</th><th>Fecha</th><th>Rival</th><th>Condición</th></tr></thead><tbody>"+
                "<tr><td>1</td><td>Jornada 1</td><td>11 de noviembre de 2016</td><td>Honduras </td><td>Visitante</td></tr>"+
                "<tr><td>2</td><td>Jornada 2</td><td>15 de noviembre de 2016</td><td>México</td><td>Casa</td></tr>"+
                "<tr><td>3</td><td>Jornada 3</td><td>24 de marzo de 2017</td><td>Trinidad y Tobago </td><td>Visitante</td></tr>"+
                "<tr><td>4</td><td>Jornada 4</td><td>28 de marzo de 2017</td><td>Estados Unidos</td><td>Visitante</td></tr>"+
                "<tr><td>5</td><td>Jornada 5</td><td>7 de junio de 2017</td><td>Costa Rica</td><td>Casa</td></tr>"+
                "<tr><td>6</td><td>Jornada 6</td><td>13 de junio de 2017</td><td>Honduras </td><td>Casa</td></tr>"+
                "<tr><td>7</td><td>Jornada 7</td><td>1 de septiembre de 2017</td><td>México</td><td>Visitante</td></tr>"+
                "<tr><td>8</td><td>Jornada 8</td><td>5 de septiembre de 2017</td><td>Trinidad y Tobago </td><td>Casa</td></tr>"+
                "<tr><td>4</td><td>Jornada 4</td><td>6 de octubre de 2017</td><td>Estados Unidos</td><td>Casa</td></tr>"+
                "<tr><td>5</td><td>Jornada 10</td><td>10 de octubre de 2017</td><td>Costa Rica</td><td>Visitante</td></tr>"+
"</tbody></table>";
            break;

        default:
            schecule = "<table class='table'>"+
                "<thead><tr class='tableizer-firstrow'><th>#</th><th>Jornada</th><th>Fecha</th><th>Rival</th><th>Condición</th></tr></thead><tbody>"+
                "<tr><td>1</td><td>Jornada 1</td><td>11 de noviembre de 2016</td><td>México</td><td>Visitante</td></tr>"+
                "<tr><td>2</td><td>Jornada 2</td><td>15 de noviembre de 2016</td><td>Costa Rica</td><td>Casa</td></tr>"+
                "<tr><td>3</td><td>Jornada 3</td><td>24 de marzo de 2017</td><td>Honduras</td><td>Visitante</td></tr>"+
                "<tr><td>4</td><td>Jornada 4</td><td>28 de marzo de 2017</td><td>Panamá </td><td>Visitante</td></tr>"+
                "<tr><td>5</td><td>Jornada 5</td><td>7 de junio de 2017</td><td>Trinidad y Tobago</td><td>Casa</td></tr>"+
                "<tr><td>6</td><td>Jornada 6</td><td>13 de junio de 2017</td><td>México </td><td>Casa</td></tr>"+
                "<tr><td>7</td><td>Jornada 7</td><td>1 de septiembre de 2017</td><td>Costa Rica</td><td>Visitante</td></tr>"+
                "<tr><td>8</td><td>Jornada 8</td><td>5 de septiembre de 2017</td><td>Honduras </td><td>Casa</td></tr>"+
                "<tr><td>4</td><td>Jornada 4</td><td>6 de octubre de 2017</td><td>Panamá</td><td>Casa</td></tr>"+
                "<tr><td>5</td><td>Jornada 10</td><td>10 de octubre de 2017</td><td>Trinidad y Tobago</td><td>Visitante</td></tr>"+
                "</tbody></table>";
    }
    return schecule;
    
}
