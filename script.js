//Esto agrega a la pantalla el valor del botón de la calculadora.
function agregar(valor){
    document.getElementById('pantalla').value +=valor
}
//Esta función borra la pantalla
function borrar(){
    document.getElementById('pantalla').value = ''
}
//Esta función calcula los valores en pantalla
function calcular(){
    const valorPantalla = document.getElementById('pantalla').value 
    const resultado = eval(valorPantalla)
    document.getElementById('pantalla').value = resultado
}