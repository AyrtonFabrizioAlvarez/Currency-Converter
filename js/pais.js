//clase moneda y su constructor + metodo de calculo
class Pais {
    constructor(indice, nombre, moneda, abreviatura, valorRespectoAlPesoArgentino, valorRespectoAlDolar, valorRespectoAlEuro, valorRespectoAlReal){
        this.indice = indice;
        this.nombre = nombre;
        this.moneda = moneda;
        this.abreviatura = abreviatura;
        this.valorRespectoAlPesoArgentino = valorRespectoAlPesoArgentino;
        this.valorRespectoAlEuro = valorRespectoAlEuro;
        this.valorRespectoAlDolar = valorRespectoAlDolar;
        this.valorRespectoAlReal = valorRespectoAlReal;
    }
    obtenerCambioAPesosArgentinos(monto){
        let resultado = this.valorRespectoAlPesoArgentino * monto;
        if (monto <= 1)
            return resultado.toFixed(2);
        else
            return resultado;
    }
    obtenerCambioAEuros(monto){
        let resultado = this.valorRespectoAlEuro * monto;
        if (monto <= 1)
            return resultado.toFixed(4);
        else
            return resultado.toFixed(2);
    }
    obtenerCambioADolar(monto){
        let resultado = this.valorRespectoAlDolar * monto;
        if (monto <= 1)
            return resultado.toFixed(4);
        else
            return resultado.toFixed(2);
    }
    obtenerCambioAReal(monto){
        let resultado = this.valorRespectoAlReal * monto;
        if (monto <= 1)
            return resultado.toFixed(4);
        else
            return resultado.toFixed(2);
    }
    
}