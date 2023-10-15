import { DOMEventController } from '../controller/DOMEventController.js';

const $ = selector => new DOMEventController(selector);

export class MenuController {

    constructor() {
        this.rutaMenu = "../../models/MenuModel.json";
        this.dataMenu;
    }

    async buildMenu() {
        await this.getMenu(this.rutaMenu);


        $(".options-list").forEach(menuGroup => {
            ["Crear", "Ver", "Eliminar"].forEach(action => {
                // Crear un nuevo elemento li por cada acción
                const elementLI = document.createElement("li");

                // Crear el elemento a
                const elementA = document.createElement("a");
                elementA.setAttribute("data-click", action + "-" + $(".options-list").getAttribute("data-menu"));

                // Crear el elemento span y ponerle texto
                const elementSpan = document.createElement("span");
                console.log($(".options-list"))
                elementSpan.textContent = action + " " + $(".options-list").getAttribute("data-menu");  // Puedes cambiar el texto según necesites

                // Añadir el span al elemento a
                elementA.appendChild(elementSpan);

                // Añadir el elemento a al li
                elementLI.appendChild(elementA);

                // Añadir el li al menuGroup
                menuGroup.appendChild(elementLI);


            });
            console.log(menuGroup); // Si aún quieres hacer un log de la acción

        });


    }

    async getMenu(ruta) {
        try {
            const response = await fetch(ruta);
            const data = await response.json();
            this.dataMenu = data;
        } catch (error) {
            console.error('Error al leer el archivo JSON:', error);
        }
    }
}
