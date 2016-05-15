/**
 * Created by Vovan on 09.05.2016.
 */
var marker_ship4 = marker_ship31 = marker_ship21 = marker_ship11 = true;//разрешение на установку
var marker_ship32, marker_ship21, marker_ship22, marker_ship23, marker_ship11, marker_ship12, marker_ship13, marker_ship14;
var disableArea = [];//область запрета установки кораблей




function set(id_s){
    var id_ship = id_s.id;
    id_ship = Number (id_ship);
    //console.log(id_ship);
    var inspect;//дает право на установку





    if (orient == 'h'){//проверка координат при установке корабля
        inspect = inspectKoord(deck, id_ship, DisableKoordH);
    }else if(orient == 'v'){
        inspect = inspectKoord(deck, id_ship, DisableKoordV);
    }
    //console.log(inspect);
    if (inspect == true){
        switch (deck){
            case 4:
                if (marker_ship4 == false){
                    alert ('4-палубный корабль уже выставлен');
                    break;
                } else{
                    ship4 = setKoord(id_ship, orient);
                    var disableArea4 = greyArea(ship4, orient);
                    checked4 = checkKoord(ship4, disableArea);
                    if (checked4 == true){
                        writeShip(ship4);
                        writeArea(disableArea4);
                        disableArea = disableArea.concat(disableArea4, ship4);
                        score = score + 4;
                        marker_ship4 = false;
                        break;
                    }else {
                        marker_ship4 = true;
                        break;
                    }
                }
            case 3:
                if (marker_ship31 == false && marker_ship32 == false){
                    alert ('3-палубные корабли все выставлены');
                    break;
                }else if(marker_ship31 == true){//установка первого трехпалубного
                    ship31 = setKoord(id_ship, orient);
                    disableArea31 = greyArea(ship31, orient);
                    checked31 = checkKoord(ship31, disableArea);
                    if (checked31 == true){
                        writeShip(ship31);
                        writeArea(disableArea31);
                        disableArea = disableArea.concat(disableArea31, ship31);
                        score = score + 3;
                        marker_ship31 = false;
                        marker_ship32 = true;
                        break;
                    }else {
                        marker_ship31 = true;
                        break;
                    }
                } else if (marker_ship32 == true){//установка второго трехпалубного
                    ship32 = setKoord(id_ship, orient);
                    disableArea32 = greyArea(ship32, orient);
                    checked32 = checkKoord(ship32, disableArea);
                    if (checked32 == true){
                        writeShip(ship32);
                        writeArea(disableArea32);
                        disableArea = disableArea.concat(disableArea32, ship32);
                        score = score + 3;
                        marker_ship32 = false;
                        break;
                    } else{
                        marker_ship32 = true;
                        break;
                    }
                }
            case 2:
                if (marker_ship21 == false && marker_ship22 == false && marker_ship23 == false){
                    alert ('2-палубные корабли все выставлены');
                    break;
                } else if(marker_ship21 == true){//установка первого двухпалубного
                    ship21 = setKoord(id_ship, orient);
                    disableArea21 = greyArea(ship21, orient);
                    checked21 = checkKoord(ship21, disableArea);
                    if(checked21 == true){
                        writeShip(ship21);
                        writeArea(disableArea21);
                        disableArea = disableArea.concat(disableArea21, ship21);
                        score = score + 2;
                        marker_ship21 = false;
                        marker_ship22 = true;
                        break;
                    } else{
                        marker_ship21 = true;
                        break;
                    }
                } else if (marker_ship22 == true){//установка второго двухпалубного
                    ship22 = setKoord(id_ship, orient);
                    disableArea22 = greyArea(ship22, orient);
                    checked22 = checkKoord(ship22, disableArea);
                    if (checked22 == true){
                        writeShip(ship22);
                        writeArea(disableArea22);
                        disableArea = disableArea.concat(disableArea22, ship22);
                        score = score + 2;
                        marker_ship22 = false;
                        marker_ship23 = true;
                        break;
                    } else{
                        marker_ship22 = true;
                        break;
                    }
                } else if (marker_ship23 == true){//установка третьего двухпалубного
                    ship23 = setKoord(id_ship, orient);
                    disableArea23 = greyArea(ship23, orient);
                    checked23 = checkKoord(ship23, disableArea);
                    if (checked23 == true){
                        writeShip(ship23);
                        writeArea(disableArea23);
                        disableArea = disableArea.concat(disableArea23, ship23);
                        score = score + 2;
                        marker_ship23 = false;
                        break;
                    } else {
                        marker_ship23 = true;
                        break;
                    }
                }
            case 1:
                if (marker_ship11 == false && marker_ship12 == false && marker_ship13 == false && marker_ship14 == false){
                    alert ('1-палубные корабли все выставлены');
                    break;
                } else if(marker_ship11 == true){
                    ship11 = setKoord(id_ship, orient);
                    disableArea11 = greyArea(ship11, orient);
                    checked11 = checkKoord(ship11, disableArea);
                    if (checked11 == true){
                        writeShip(ship11);
                        writeArea(disableArea11);
                        disableArea = disableArea.concat(disableArea11, ship11);
                        score = score + 1;
                        marker_ship11 = false;
                        marker_ship12 = true;
                        break;
                    } else{
                        marker_ship11 = true;
                        break;
                    }
                } else if (marker_ship12 == true){
                    ship12 = setKoord(id_ship, orient);
                    disableArea12 = greyArea(ship12, orient);
                    checked12 = checkKoord(ship12, disableArea);
                    if(checked12 == true){
                        writeShip(ship12);
                        writeArea(disableArea12);
                        disableArea = disableArea.concat(disableArea12, ship12);
                        score = score + 1;
                        marker_ship12 = false;
                        marker_ship13 = true;
                        break;
                    } else {
                        marker_ship12 = true;
                        break;
                    }
                } else if (marker_ship13 == true){
                    ship13 = setKoord(id_ship, orient);
                    disableArea13 = greyArea(ship13, orient);
                    checked13 = checkKoord(ship13, disableArea);
                    if (checked13 == true){
                        writeShip(ship13);
                        writeArea(disableArea13);
                        disableArea = disableArea.concat(disableArea13, ship13);
                        score = score + 1;
                        marker_ship13 = false;
                        marker_ship14 = true;
                        break;
                    } else {
                        marker_ship13 = true;
                        break;
                    }
                } else if (marker_ship14 == true){
                    ship14 = setKoord(id_ship, orient);
                    disableArea14 = greyArea(ship14, orient);
                    checked14 = checkKoord(ship14, disableArea);
                    if (checked14 == true){
                        writeShip(ship14);
                        writeArea(disableArea14);
                        disableArea = disableArea.concat(disableArea14, ship14);
                        score = score + 1;
                        marker_ship14 = false;
                    } else {
                        marker_ship14 = true;
                        break;
                    }
                }
        }
    }
}