import { Router } from "./src/Controllers/router/Router";
import { ErrorPage } from "./src/View/pages/error/ErrorPage";

addEventListener("DOMContentLoaded", () => {

Router
    .usar("/" , () => new ErrorPage() )   
    .usar()

Router.iniciar();
});