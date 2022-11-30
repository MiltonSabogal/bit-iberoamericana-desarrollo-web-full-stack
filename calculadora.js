
//var resultado =[];
var op1;
var op2;
var operacion;

function init(){

    var res = document.getElementById("res").value;
    var resultado = document.getElementById("resultado").value;
    var borrar_todo= document.getElementById('borrar_todo').value;
    var borrar_izq = document.getElementById('borrar_izq').value;
    var suma = document.getElementById('suma').value;
    var resta = document.getElementById('resta').value;
    var multiplicacion = document.getElementById('multiplicacion').value;
    var division = document.getElementById('division').value;
    var igual = document.getElementById('igual').value;
    var uno = document.getElementById('uno').value;
    var dos = document.getElementById('dos').value;
    var tres = document.getElementById('tres').value;
    var cuatro = document.getElementById('cuatro').value;
    var cinco = document.getElementById('cinco').value;
    var seis = document.getElementById('seis').value;
    var siete = document.getElementById('siete').value;
    var ocho = document.getElementById('ocho').value;
    var nueve = document.getElementById('nueve').value;
    var cero = document.getElementById('cero').value;
    var punto = document.getElementById('.').value;
  }
  uno.onclick = function(){
    resultado.textContent = resultado.textContent  + "1";
}
dos.onclick = function(e){
    resultado.textContent = resultado.textContent  + "2";
}
tres.onclick = function(e){
    resultado.textContent = resultado.textContent  + "3";
}
cuatro.onclick = function(e){
    resultado.textContent = resultado.textContent  + "4";
}
cinco.onclick = function(e){
    resultado.textContent = resultado.textContent  + "5";
}
seis.onclick = function(e){
    resultado.textContent = resultado.textContent  + "6";
}
siete.onclick = function(e){
    resultado.textContent = resultado.textContent  + "7";
}
ocho.onclick = function(e){
    resultado.textContent = resultado.textContent  + "8";
}
nueve.onclick = function(e){
    resultado.textContent = resultado.textContent  + "9";
}
cero.onclick = function(e){
    resultado.textContent = resultado.textContent  + "0";
}
punto.onclick = function(e){
    resultado.textContent = resultado.textContent  + ".";
}
borrar_todo.onclick = function(e){
    resetear();
}
borrar_izq.onclick = function(e){
    retro();
 }
suma.onclick = function(e){
    op1 = resultado.textContent;
    operacion = "+";
    
}
resta.onclick = function(e){
    op1 = resultado.textContent;
    operacion = "-";
    limpiar();
}
multiplicacion.onclick = function(e){
    op1 = resultado.textContent;
    operacion = "*";
    limpiar();
}
division.onclick = function(e){
    op1 = resultado.textContent;
    operacion = "/";
    limpiar();
}
igual.onclick = function(e){
    op2 = resultado.textContent;
    resolver();
}
 var limpiar = function(){
    resultado.textContent = "";
  }
 var resetear = function(){
    resultado.textContent = "";
    op1 = 0;
    op2 = 0;
    operacion = "";
  }
 
  var resolver = function(){
    var res = 0;
    switch(operacion){
      case "+":
        res = parseFloat(op1) + parseFloat(op2);
        break;
      case "-":
          res = parseFloat(op1) - parseFloat(op2);
          break;
      case "*":
        res = parseFloat(op1) * parseFloat(op2);
        break;
      case "/":
        res = parseFloat(op1) / parseFloat(op2);
        break;
    }
    resetear();
    resultado.textContent = res;
  }
 
    