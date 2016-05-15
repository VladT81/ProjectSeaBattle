/**
 * Created by Vovan on 08.05.2016.
 */
document.write("<table id='set_field' rules='all'>");//начало поля table
document.write("<tr> ");                            // первая
for (var i1= 0; i1<=11; i1++){                      //строка
    document.write('<td id=' + 'a' + i1  + ">");    //поля
}
var idIndex = 0;                                               //формирование игрового поля
for(var i=0; i<=9; i++){
    document.write("<tr>");
    document.write('<td id=' + 'v1' + i + ">");
    for(var j=0; j<=9; j++){
        document.write("<td id=" + ++idIndex  + " onclick=\"set(this)\"" + " class= \"0\"" + ">");
    }
    document.write("<td id=" + "v2" + i + ">");
}
document.write("<tr> ");                          //последняя
for (var i2= 0; i2<=11; i2++){                    //строка
    document.write('<td id=' + 'b' + i2  + ">");  //поля
}
document.write("</table>");                         //конец поля table

for (var k= 1; k<=10; k++){
    document.getElementById('a' + k).innerHTML = k;//заполняем верхнюю строку 1-10
    document.getElementById('b' + k).innerHTML = k;//заполняем нижнюю строку 1-10


}
for (var m=0, a=65; m<=9; m++, a++){
    function char(ascii){
        return String.fromCharCode(ascii);
    }
    var str = char(a);
    document.getElementById('v1' + m).innerHTML = str;//заполняем крайний правый столбец A-J
    document.getElementById('v2' + m).innerHTML = str;//заполняем крайний левый столбец A-J
}