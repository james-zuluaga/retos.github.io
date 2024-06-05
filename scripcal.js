 /// ejercio en los cuales sacamos la info de html///////

 
 function sumar(){
    let suma=0;
    let contador=0;
    let numer1=Number(document.getElementById(`pal1`).value);
    let numer2=Number(document.getElementById(`pal2`).value);
    
    let resultado= numer1+numer2;
       document.getElementById('resultado').textContent = 'la suma es: ' + resultado;
  }

  function multiplicar(){
    let suma=0;
    let contador=0;
    let numer1=document.getElementById(`pal1`).value;
    let numer2=document.getElementById(`pal2`).value;
    
    let resultadomul= numer1*numer2;
       document.getElementById('resultado').textContent = 'la multiplicacion es: ' + resultadomul;
  }

  function resta(){
    let suma=0;
    let contador=0;
    let numer1=Number(document.getElementById(`pal1`).value);
    let numer2=Number(document.getElementById(`pal2`).value);
    
    let resultado= numer1-numer2;
       document.getElementById('resultado').textContent = 'la suma es: ' + resultado;
  }

  function division(){
    let suma=0;
    let contador=0;
    let numer1=document.getElementById(`pal1`).value;
    let numer2=document.getElementById(`pal2`).value;
    
    let resultadomul= numer1/numer2;
       document.getElementById('resultado').textContent = 'la multiplicacion es: ' + resultadomul;
  }
