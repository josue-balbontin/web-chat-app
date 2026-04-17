import { Router } from "./src/Controllers/router/Router";
import { ErrorPage } from "./src/View/pages/error/ErrorPage";
import { RUTAS } from "./src/constants/Rutas";

addEventListener("DOMContentLoaded", () => {

Router
    .usar(RUTAS.ERROR500 , () => new ErrorPage(500, "Ya lo estamos solucionando") )
    .usar(RUTAS.ERROR404 , () => new ErrorPage(404, "Nos equivocamos de lugar") );

Router.iniciar();
});