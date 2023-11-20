import { InputController } from '../controller/InputController.js';
// Controlador de rutas para la gestión de vistas y navegación
export class RouteController {
  // Inicializa el controlador con la sección principal y la ruta actual
  constructor() {
    this.mainSection = document.querySelector('.section.is-main-section');
    this.currentPath = window.location.pathname;
  }

  // Procesa el clic en el menú para navegar a la vista correspondiente
  handleMenuClick(action) {
    const [operation, entity] = action.split('-');
    const cleanURL = `/${entity}/${operation}`;
  
    // Limpiar la URL actual para evitar duplicaciones
    let currentURL = window.location.href;
    currentURL = currentURL.replace(/views\/.*$/, '');
  
    // Construir y establecer la nueva URL
    const newURL = currentURL + "views" + cleanURL;
    window.history.pushState({}, '', newURL);
    this.fetchAndRender(cleanURL);
  }
  
  


  // Obtiene el HTML de la vista y lo inyecta en la sección principal
  fetchAndRender(cleanURL) {

    fetch("/views/pages/" + cleanURL)
      .then(response => response.text())
      .then(html => {
        this.mainSection.innerHTML = html;
        return this.loadScriptForView(cleanURL);
      })
      .then(initFunction => {
        if (initFunction) initFunction();
      });
  }

  // Carga el script asociado a la vista actual
  loadScriptForView(cleanURL) {
    const partes = cleanURL.split('/');
    const [, vista, accion] = partes;

    const controlador = new InputController('.field-input');
    controlador.crearInputs();
    return import(`/Handler/${vista}Handler.js`)
      .then(module => module.default)
      .catch(error => console.error(`Error al cargar el script: ${vista}`, error));
  }
}
