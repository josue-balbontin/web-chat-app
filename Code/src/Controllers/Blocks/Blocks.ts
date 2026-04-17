import Handlebars from 'handlebars';

export default abstract class Blocks {
    
    abstract propiedades : any;

    templateHbs : string = "";

    constructor(templateHbs : string = ""){
        this.templateHbs = templateHbs;
    }

    obtenerHtml(): Element | null{
        const generadorHtml = Handlebars.compile(this.templateHbs);
        const htmlEnTexto = generadorHtml(this.propiedades);

        const creadorTemporal = document.createElement('template');

        creadorTemporal.innerHTML = htmlEnTexto;

        const elemento = creadorTemporal.content.firstElementChild;

        if (elemento) {
            this.agregarEventos(elemento);
        }

        return elemento;
        
    }

    abstract agregarEventos(elementoRaiz: Element): void;
    
}