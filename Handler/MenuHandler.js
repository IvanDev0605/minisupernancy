import { RouteController } from '../controller/RouteController.js';

const routeController = new RouteController();

// Cuando se carga la página
window.addEventListener('load', () => {
    routeController.loadView();
});


const menu = document.querySelector('nav ul');
menu.addEventListener('click', (event) => {
    routeController.handleMenuClick(event);
});
