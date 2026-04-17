import Blocks from "../../../Controllers/Blocks/Blocks";
import './ErrorPage.css';
import templateHbs from './ErrorPage.hbs?raw';
import Handlebars from 'handlebars';


export class ErrorPage extends Blocks {

    codigo : number; 
    
    mensaje : string;

    constructor(codigo : number = 500, mensaje : string = "Ya lo estamos solucionando"){
        super(); 
        this.codigo = codigo;
        this.mensaje = mensaje; 
    }


    obtenerHtml(): Element | null {
        const generadorHtml = Handlebars.compile(templateHbs);
        const htmlEnTexto = generadorHtml({ codigo: this.codigo, mensaje: this.mensaje });


        const creadorTemporal = document.createElement('template');
        creadorTemporal.innerHTML = htmlEnTexto;


        return creadorTemporal.content.firstElementChild;
        
    }
}