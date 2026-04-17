import type Blocks from "../Blocks/Blocks";

export const router = {
    rutas : new Map<string , Blocks>() ,

    Idselecion : "main",

    usar(ruta : string , componente : Blocks) : any  {
        this.rutas.set(ruta , componente);
        return this; 
    },

    iniciar(){
        
    }

    
}