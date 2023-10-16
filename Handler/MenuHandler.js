import { DOMEventController } from '../controller/DOMEventController.js';
import { RouteController } from '../controller/RouteController.js';
import { MenuController } from '../controller/MenuController.js';

const $ = selector => new DOMEventController(selector);
const routeController = new RouteController();
const menuController = new MenuController();


// Cuando se carga la página
document.addEventListener("DOMContentLoaded", (async function () {
    routeController.loadView();
    await menuController.buildMenu();
    $('.option').on('click', function (Event) {
        console.log(this.getAttribute("data-route"));
    });
})());



// const menu = document.querySelector('.option');
// console.log(menu)
// if (menu) {
//     menu.addEventListener('click', (event) => {
//         console.log("cvedvf")
//         routeController.handleMenuClick(event);
//     });
// }