import Blocks from "../Blocks/Blocks";
import { RUTAS } from "../../constants/Rutas";

export const Router = {
    rutas : new Map<string , () => Blocks>() ,

    Idselecion : "main",

    usar(ruta : string , creadorComponente : () => Blocks) : any  {
        this.rutas.set(ruta , creadorComponente);
        return this; 
    },

    iniciar() : void{
        window.addEventListener("popstate",()=>{
            this.ir(window.location.pathname , false);
        });

        this.ir(window.location.pathname , false);
    },

    ir(ruta : string , agregarHistorial : boolean = true) : void {
        if(agregarHistorial){
            history.pushState({ route: ruta }, "", ruta);
        }

        const main = document.getElementById(this.Idselecion);
        
        if(!main){
            console.error(`No se encontró el elemento con id ${this.Idselecion}`);
            return;
        }

        const creadorComponente = this.rutas.get(ruta) || this.rutas.get(RUTAS.ERROR404);

        if(!creadorComponente){
            console.error(`No se encontró un componente para la ruta ${ruta} y no se definió una ruta ${RUTAS.ERROR404}`);
            return ; 
        }

        main.textContent = "";

        const componente = creadorComponente();
        const elementoDOM = componente.obtenerHtml();
        

        if (elementoDOM) {
            main.appendChild(elementoDOM);
        }


    }

    
}