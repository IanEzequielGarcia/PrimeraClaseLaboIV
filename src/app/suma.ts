export class Suma{
    edadUno:number = 0;
    edadDos:number = 0;
    resultado:number = 0;
    suma()
    {
        this.resultado= Number(this.edadUno) + Number(this.edadDos);
        let sumaTxt = document.getElementById('inputSuma') as HTMLInputElement;
        let resultadoTxt = document.getElementById('inputPromedio') as HTMLInputElement;
        sumaTxt.value= `${this.resultado}`;
        resultadoTxt.value= `${this.resultado/2}`;
    }
    limpiar()
    {
        let sumaTxt = document.getElementById('inputSuma') as HTMLInputElement;
        let resultadoTxt = document.getElementById('inputPromedio') as HTMLInputElement;
        sumaTxt.value="";
        resultadoTxt.value="";
        let edadUno = document.getElementById('edadUno') as HTMLInputElement;
        let edadDos = document.getElementById('edadDos') as HTMLInputElement;
        edadUno.value="";
        edadDos.value="";
    }
}