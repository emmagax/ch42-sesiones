
/**
 * Una clase es una plantilla(molde) que servirá para crear objetos.
 * En la clase se definirán propiedades y métodos que los objetos
 * creados a partir de la clase compartirán.
 * 
 * Las clases permiten agrupar datos y comportamientos relacionados
 * en una única estructura, lo que facilita la organización y
 * reutilización del código
 
 El nombre de las clases debe ser con UpperCamelCase.
 Se recomienda que el nombre sea un sustantivo en singular.

*/
class Comestible {

    #fechaCreacion;

    // El método constructor nos ayuda a inicializar atributos del objeto
    constructor( nombreEntrada = "alguito", sabor = "neutro" ){
        this.nombre = nombreEntrada;
        this.sabor = sabor;
        this.#fechaCreacion = new Date();
        console.log(`Soy ${this.nombre} y tengo vida :V , mi sabor es ${this.sabor}`);
    }

    mostrarCaducidad(){
        const calcularCaducidad =  this.#fechaCreacion.getTime() + 3_600_000;
        const caducidad = new Date(calcularCaducidad );
        return `Soy ${this.nombre}, caduco el ${ caducidad.toLocaleString() }`;

    }

    // métodos setters y getters
    get fechaCreacion(){
        return this.#fechaCreacion;
    }

    set fechaCreacion( newValue ){
        this.#fechaCreacion = newValue;
    }

}

export { Comestible };