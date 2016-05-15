/**
 * Created by Vovan on 08.05.2016.
 */

/*var keyChar=null;
 function getKbCode(event){
 var keycode;
 if (!event) var event = window.event;
 if (event.keyCode) keycode = event.keyCode;
 else if (event.which) keycode = event.which;
 keyChar = String.fromCharCode(keycode);
 alert(keyChar);
 console.log(keyChar);
 }
 */
var deck = null, orient = 'h';

function setDeck(){
    var str = event.keyCode;
    if (str==52 || str==51 || str==50 || str==49){
        switch (str){
            case 52: deck = 4;
                break;
            case 51: deck = 3;
                break;
            case 50: deck = 2;
                break;
            case 49: deck = 1;
                break;
        }
        //alert(deck);
    }

    if (deck!=null){
        var text_deck = document.getElementById('deck');
        text_deck.innerText = "Установка" + deck + "-палубного корабля";
    }
}

function setOrient(){
    var str = event.keyCode;
    console.log(str);
    if (str==72 || str==104 || str==1056 || str==1088){//72=b,104=B(en);р=1056,Р=1088(рус/укр)
        orient = 'h';
    }
    else if(str==86 || str==118 || str==1084 || str==1052){//86=v,118=V(en);1084=м,1052=М(рус/укр)
        orient = 'v'
    }
    var text_orient = document.getElementById('orient');
    if(orient!=null){
        if (orient == 'h'){
            text_orient.innerText = "Ориентация корабля: горизонтальная";
        }
        else{
            text_orient.innerText = "Ориентация корабля: вертикальная";
        }
    }
    //alert('orient' + orient);
}
