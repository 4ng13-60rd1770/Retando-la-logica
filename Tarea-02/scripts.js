const text1= document.getElementById("caja1");
const text2= document.getElementById("caja2");
const btnMenor = document.getElementById("calcular");
const btnIguales = document.getElementById("resultado");
const btnIntercambiar = document.getElementById("ver");
const btnSumar = document.getElementById("mostrar");
const imprimirRespuesta= document.getElementById("respuesta");

document.addEventListener('click', (e) =>{
    e.preventDefault()

    let num1 = Number( text1.value ) 
    let num2 = Number( text2.value )

    if (e.target == btnMenor) {

        if (Math.sign(num1) === 1 && Number.isInteger(num1) &&
            Math.sign(num2) === 1 && Number.isInteger(num2) ) {
            let respuesta = hallarElmenor(num1, num2)
              alert(`el numero menor es ${respuesta}`);
                return;
            }
            alert(`el numero tiene que ser positivo y un entero`)
 return;   
    }
    if (e.target == btnIguales) {

        if (Math.sign(num1) === 1 && Number.isInteger(num1) && 
            Math.sign(num2) === 1 && Number.isInteger(num2) ) {
            let respuesta = determinarIguales(num1, num2)
            alert(`Estos números son: ${respuesta}`);
            return;
        }
            alert(`el numero tiene que ser positivo y un entero`)
        return;
    }

    if (e.target == btnIntercambiar) {

        if (Math.sign(num1) === 1 && Number.isInteger(num1) && 
            Math.sign(num2) === 1 && Number.isInteger(num2) ) {
                alert(`Intercambio relizado`);
                return;

                intercambiar()
            }
            alert(`el numero tiene que ser positivo y un entero`)
        return;
    }
    if (e.target == btnSumar) {

        if (Math.sign(num1) === 1 && Number.isInteger(num1) &&
            Math.sign(num2) === 1 && Number.isInteger(num2) ) {
                let respuesta = SumarNumeros(num1, num2)
            
            alert(`La suma de estos numeros es ${respuesta}`);
            return;

        }
            alert(`el numero tiene que ser positivo y un entero`)
            return;
        }
})


function hallarElmenor(num1, num2) {
    return Math.min(num1,num2)
}

function determinarIguales(num1, num2) {
    let str1 = num1.toString()
    let str2 = num2.toString()

    if (str1.includes(str2)) {
        return `${str1} y ${str2} son iguales`
    }

    return `${str1} y ${str2} No son iguales`

}

function intercambiar(){
    let a = text1.value;
    let b = text2.value;
    text1.value = b[0];
    text2.value = a [0];
}



function SumarNumeros(a, b){
    while(b!=0){
      let suma = a&b;
      a = a^b;
      b = suma<<1;
    }
    return a;
  }
  
  document.write(SumarNumeros(a, b))
