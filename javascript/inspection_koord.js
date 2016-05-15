/**
 * Created by Vovan on 09.05.2016.
 */

var DisableKoordH = [], DisableKoordV = [];//координаты запрета установки корабля
for (var a=8, b=9, c=10; a<=98, b<=99, c<=100; a=a+10, b=b+10, c=c+10){//по горизонтали
    DisableKoordH.push(a);
    DisableKoordH.push(b);
    DisableKoordH.push(c);
}

for (var d=71, e=81, f=91; d<=80, e<=90, f<=100; d++, e++, f++){//по вертикали
    DisableKoordV.push(d);
    DisableKoordV.push(e);
    DisableKoordV.push(f);
}

function inspectKoord(deck, koord, DisableKoord){//функция проверки координат установки

    var index, inspection;
    switch (deck){
        case 4:
            for (index = 0; index<DisableKoord.length; index++){
                if (koord == DisableKoord[index]){
                    inspection = false;
                    //alert ('Так ставить корабль нельзя');
                    break;
                } else inspection = true;
            }
        break;
        case 3:
            for (index = 1; index<DisableKoord.length; index=index+2){
                var index1 = index + 1;
                if (koord == DisableKoord[index] || koord == DisableKoord[index1]){
                    //alert ('Так ставить корабль нельзя');
                    inspection = false;
                    break;
                } else inspection = true;
                index++;
            }
        break;
        case 2:
            for (index = 2; index<DisableKoord.length; index=index+3){
                if (koord == DisableKoord[index]){
                    //alert ('Так ставить корабль нельзя');
                    inspection = false;
                    break;
                } else inspection = true;
            }
        break;
        case 1: inspection = true;
    }
    //console.log(inspection);
    return inspection;
}


function checkKoord (shipKoord, disableKoord){
    var i, j;
    for (i=0; i<shipKoord.length; i++){
        for (j=0; j<disableKoord.length; j++){
           if (shipKoord[i] == disableKoord[j]){
               return false;
           }
        }
    }
    return true;
}