/**
 * Created by Vovan on 09.05.2016.
 */


function setKoord(firstKoord, orient){//установка координат корабля
    var i,koordShip = [];
    if (orient == 'h'){
        for (i=0; i<deck; i++){
            koordShip.push(firstKoord + i);
        }
    } else if (orient == 'v'){
        for (i=0; i<deck; i++){
            koordShip.push(firstKoord + 10*i);
        }
    }
    return koordShip;
}


function greyArea(shipKoord, orient){
    var i, koordGreyArea = [], koordUp = [], koordDown = [], koordLeft = [], koordRight = [], endShip = deck-1;
    if (orient == 'h'){
        for (i=0; i<deck; i++){
            koordUp.push(shipKoord[i]-10);
            koordDown.push(shipKoord[i]+10);
        }
        koordLeft.push(shipKoord[0]-11);
        koordLeft.push(shipKoord[0]-1);
        koordLeft.push(shipKoord[0]+9);
        koordRight.push(shipKoord[endShip]-9);
        koordRight.push(shipKoord[endShip]+1);
        koordRight.push(shipKoord[endShip]+11);
        //формирование серой зоны
        if (shipKoord[0]==1){//если корабль начинается в верхнем левом углу
            koordGreyArea = koordGreyArea.concat(koordDown);
            koordGreyArea.push(koordRight[1]);
            koordGreyArea.push(koordRight[2]);
            return koordGreyArea;
        } else if (shipKoord[endShip]==10){//если корабль заканчивается в верхнем правом углу
            koordGreyArea = koordGreyArea.concat(koordDown);
            koordGreyArea.push(koordLeft[1]);
            koordGreyArea.push(koordLeft[2]);
            return koordGreyArea;
        } else if (shipKoord [0]==91){//если корабль начинается в нижнем левом углу
            koordGreyArea = koordGreyArea.concat(koordUp);
            koordGreyArea.push(koordRight[0]);
            koordGreyArea.push(koordRight[1]);
            return koordGreyArea;
        } else if (shipKoord[endShip]==100){//если корабль заканчивается в нижнем правом углу
            koordGreyArea = koordGreyArea.concat(koordUp);
            koordGreyArea.push(koordLeft[0]);
            koordGreyArea.push(koordLeft[1]);
            return koordGreyArea;
        } else if (shipKoord[0]>1 && shipKoord[endShip]<10){//корабль установлен в верху поля
            koordGreyArea = koordGreyArea.concat(koordDown);
            koordGreyArea.push(koordLeft[1]);
            koordGreyArea.push(koordLeft[2]);
            koordGreyArea.push(koordRight[1]);
            koordGreyArea.push(koordRight[2]);
            return koordGreyArea;
        } else if (shipKoord[0]>91 && shipKoord[endShip]<100){//корабль установлен в низу поля
            koordGreyArea = koordGreyArea.concat(koordUp);
            koordGreyArea.push(koordLeft[0]);
            koordGreyArea.push(koordLeft[1]);
            koordGreyArea.push(koordRight[0]);
            koordGreyArea.push(koordRight[1]);
            return koordGreyArea;
        } else {
            for (i=11, j=20; i<91, j<100; i=i+10, j=j+10){
                if (shipKoord[0]==i){//корабль начинается с левого края поля
                    koordGreyArea = koordGreyArea.concat(koordUp);
                    koordGreyArea = koordGreyArea.concat(koordRight);
                    koordGreyArea = koordGreyArea.concat(koordDown);
                    return koordGreyArea;
                } else if (shipKoord[endShip]==j){//корабль заканчивается с правого края поля
                    koordGreyArea = koordGreyArea.concat(koordUp);
                    koordGreyArea = koordGreyArea.concat(koordDown);
                    koordGreyArea = koordGreyArea.concat(koordLeft);
                    return koordGreyArea;
                }
            }
        }
        koordGreyArea = koordGreyArea.concat(koordUp);
        koordGreyArea = koordGreyArea.concat(koordRight);
        koordGreyArea = koordGreyArea.concat(koordDown);
        koordGreyArea = koordGreyArea.concat(koordLeft);
        return koordGreyArea;
    }
    else if (orient == 'v'){
        for (i=0; i<deck; i++){
            koordLeft.push(shipKoord[i]-1);
            koordRight.push(shipKoord[i]+1);
        }
        koordUp.push(shipKoord[0]-11);
        koordUp.push(shipKoord[0]-10);
        koordUp.push(shipKoord[0]-9);
        koordDown.push(shipKoord[endShip]+9);
        koordDown.push(shipKoord[endShip]+10);
        koordDown.push(shipKoord[endShip]+11);
        //формирование серой зоны
        if (shipKoord[0]==1){//если корабль начинается в верхнем левом углу
            koordGreyArea = koordGreyArea.concat(koordRight);
            koordGreyArea.push(koordDown[1]);
            koordGreyArea.push(koordDown[2]);
            return koordGreyArea;
        } else if (shipKoord[0]==10){//если корабль начинается в верхнем правом углу
            koordGreyArea = koordGreyArea.concat(koordLeft);
            koordGreyArea.push(koordDown[0]);
            koordGreyArea.push(koordDown[1]);
            return koordGreyArea;
        } else if (shipKoord [endShip]==91){//если корабль заканчивается в нижнем левом углу
            koordGreyArea = koordGreyArea.concat(koordRight);
            koordGreyArea.push(koordUp[1]);
            koordGreyArea.push(koordUp[2]);
            return koordGreyArea;
        } else if (shipKoord[endShip]==100){//если корабль заканчивается в нижнем правом углу
            koordGreyArea = koordGreyArea.concat(koordLeft);
            koordGreyArea.push(koordUp[0]);
            koordGreyArea.push(koordUp[1]);
            return koordGreyArea;
        } else if (shipKoord[0]>1 && shipKoord[0]<10){//корабль начинается вверху поля
            koordGreyArea = koordGreyArea.concat(koordLeft);
            koordGreyArea = koordGreyArea.concat(koordRight);
            koordGreyArea = koordGreyArea.concat(koordDown);
            return koordGreyArea;
        } else if (shipKoord[endShip]>91 && shipKoord[endShip]<100){//корабль заканчивается внизу поля
            koordGreyArea = koordGreyArea.concat(koordLeft);
            koordGreyArea = koordGreyArea.concat(koordRight);
            koordGreyArea = koordGreyArea.concat(koordUp);
            return koordGreyArea;
        } else {
            for (i=11, j=20; i<91, j<100; i=i+10, j=j+10){
                if (shipKoord[0]==i){//корабль установлен в левом краю поля
                    koordGreyArea = koordGreyArea.concat(koordUp[1]);
                    koordGreyArea = koordGreyArea.concat(koordUp[2]);
                    koordGreyArea = koordGreyArea.concat(koordRight);
                    koordGreyArea = koordGreyArea.concat(koordDown[1]);
                    koordGreyArea = koordGreyArea.concat(koordDown[2]);
                    return koordGreyArea;
                } else if (shipKoord[0]==j){//корабль установлен в правом краю поля
                    koordGreyArea = koordGreyArea.concat(koordUp[0]);
                    koordGreyArea = koordGreyArea.concat(koordUp[1]);
                    koordGreyArea = koordGreyArea.concat(koordLeft);
                    koordGreyArea = koordGreyArea.concat(koordDown[0]);
                    koordGreyArea = koordGreyArea.concat(koordDown[1]);
                    return koordGreyArea;
                }
            }
            koordGreyArea = koordGreyArea.concat(koordUp);
            koordGreyArea = koordGreyArea.concat(koordRight);
            koordGreyArea = koordGreyArea.concat(koordDown);
            koordGreyArea = koordGreyArea.concat(koordLeft);
            return koordGreyArea;
        }
    }
}


