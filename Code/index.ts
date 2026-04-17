import { Router } from "./src/Controllers/router/Router";
import { ErrorPage } from "./src/View/pages/error/ErrorPage";

addEventListener("DOMContentLoaded", () => {

Router
    .usar("/500" , () => new ErrorPage(500, "Ya lo estamos solucionando") )
    .usar("/404" , () => new ErrorPage(404, "Nos equivocamos de lugar") );

Router.iniciar();
});