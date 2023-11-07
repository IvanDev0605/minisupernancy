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
    const targetRoute = `/views/pages/${entity}/${operation}.html`;
    const cleanURL = `/${entity}/${operation}`;
    window.history.pushState({}, '', targetRoute);
    this.loadView(targetRoute, cleanURL);
  }

  // Carga la vista solicitada en la sección principal
  loadView(targetRoute = window.location.pathname, cleanURL) {
    const [_, entity, operation] = targetRoute.split('/');
    targetRoute = `/views/pages/${entity}/${operation}.html`;
    this.fetchAndRender(targetRoute, cleanURL);
  }

  // Obtiene el HTML de la vista y lo inyecta en la sección principal
  fetchAndRender(viewPath, cleanURL) {
    fetch(viewPath)
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
    return import(`/Handler/${vista}Handler.js`)
      .then(module => module.default)
      .catch(error => console.error(`Error al cargar el script: ${vista}`, error));
  }
}
