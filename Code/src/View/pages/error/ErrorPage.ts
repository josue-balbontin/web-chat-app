import { RUTAS } from "../../../constants/Rutas";
import Blocks from "../../../Controllers/Blocks/Blocks";
import { Router } from "../../../Controllers/router/Router";
import './ErrorPage.css';
import templateHbs from './ErrorPage.hbs?raw';



export class ErrorPage extends Blocks {

    propiedades : { codigo : number , mensaje : string } ;

    

    constructor(codigo : number = 500, mensaje : string = "Ya lo estamos solucionando"){
        super(templateHbs); 
        this.propiedades = { codigo, mensaje };
    }


      agregarEventos(elementoRaiz: Element): void {
        const botonRegresar = elementoRaiz.querySelector('.Error__regresar');
        
        if (botonRegresar) {
            botonRegresar.addEventListener('click', () => {

                Router.ir(RUTAS.CHAT); 
            });
        }
    }

}