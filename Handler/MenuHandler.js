import { DOMEventController } from '../controller/DOMEventController.js';
import { RouteController } from '../controller/RouteController.js';
import { MenuController } from '../controller/MenuController.js';

const $ = selector => new DOMEventController(selector);
const routeController = new RouteController();
const menuController = new MenuController();


// Cuando se carga la página
document.addEventListener("DOMContentLoaded", function () {
    routeController.loadView();
    menuController.buildMenu()

});


const menu = document.querySelector('nav ul');
if (menu) {
    menu.addEventListener('click', (event) => {
        routeController.handleMenuClick(event);
    });
}