import { DOMEventController } from '../controller/DOMEventController.js';

const $ = selector => new DOMEventController(selector);

export class MenuController {

    constructor() {
        this.rutaMenu = "../../models/MenuModel.json";
        this.dataMenu;
    }

    async renderMenu() {
        const menuData = [
            {
                label: 'General',
                items: [
                    {
                        icon: 'fas fa-tachometer-alt',
                        text: 'Dashboard',
                        isActive: true,
                    },
                ],
            },
            {
                label: 'Usuarios y roles',
                items: [
                    {
                        icon: 'fas fa-user',
                        text: 'Usuarios',
                    },
                    {
                        icon: 'fas fa-chart-pie',
                        text: 'Roles',
                    },
                ],
            },
            {
                label: 'Productos y Promociones',
                items: [
                    {
                        icon: 'fas fa-edit',
                        text: 'Productos',
                    },
                    {
                        icon: 'fas fa-table',
                        text: 'Promociones',
                    },
                ],
            },
            // ... más secciones aquí
        ];

        const menuDiv = document.querySelector('.menu.is-menu-main');
        let menuHTML = '';

        menuData.forEach((section) => {
            menuHTML += `<p class="menu-label">${section.label}</p>`;
            menuHTML += '<ul class="menu-list">';

            section.items.forEach((item) => {

                menuHTML += `
              <li class>
                <a class="has-icon has-dropdown-icon">
                  <span class="icon"><i class="mdi ${item.icon}"></i></span>
                  <span class="menu-item-label">${item.text}</span>
                  <div class="dropdown-icon">
                  <span class="icon"><i class="mdi fas fa-plus"></i></span>
                  </div>
                </a>
                <ul class="options-list" data-menu="${item.text.toLowerCase()}">

                </ul>
              </li>
            `;
            });

            menuHTML += '</ul>';
        });

        menuDiv.innerHTML = menuHTML;
    }

    async buildMenu() {
        await this.renderMenu();
        await this.getMenu(this.rutaMenu);

        $('.options-list').forEach(menuGroup => {
            const dataMenu = menuGroup.getAttribute('data-menu');  // Obtener el data-menu del grupo actual
            if (dataMenu === "dashboard") return;  // Short-circuito si es "dashboard"
            ['crear', 'ver', 'eliminar'].forEach(action => {
                // Crear un nuevo elemento li por cada acción
                const elementLI = document.createElement('li');

                // Crear el elemento a
                const elementA = document.createElement('a');
                elementA.classList.add('option');
                elementA.setAttribute('data-route', action + '-' + dataMenu);  // Usar dataMenu

                // Crear el elemento span y ponerle texto
                const elementSpan = document.createElement('span');
                elementSpan.textContent = action + ' ' + dataMenu;  // Usar dataMenu

                // Añadir el span al elemento a
                elementA.appendChild(elementSpan);

                // Añadir el elemento a al li
                elementLI.appendChild(elementA);

                // Añadir el li al menuGroup
                menuGroup.appendChild(elementLI);
            });
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
