function validarEdad()
{
    let inputEdad= document.getElementById("num")
    let numero= inputEdad.value
}


function numeroPositivoNegativo()
{
    let inputnum= document.getElementById("num")
    let numero= inputnum.value
    if (numero>0)
        {
            alert('Numero Positivo');
        }
    else
    {
        alert('Numero Negativo');
    }
    if (numero==0)
        {
            alert('El numero es 0');
        }
}