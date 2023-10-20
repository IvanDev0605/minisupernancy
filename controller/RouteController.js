export class RouteController {
  constructor() {
    this.mainSection = document.querySelector('.section.is-main-section');
    this.currentPath = window.location.pathname;
  }

  handleMenuClick(action) {
    console.log(action);

    // Descomponer la acción en entidad y operación
    const [operation, entity] = action.split('-');

    // Construir la ruta del archivo basada en la entidad y la operación
    const targetRoute = `/views/pages/${entity}/${operation}.html`;

    // Construir la URL "limpia" para mostrar en la barra de direcciones
    const cleanURL = `/${entity}/${operation}`;

    if (targetRoute) {
      window.history.pushState({}, '', targetRoute);
      this.loadView(targetRoute);  // Pasamos targetRoute como argumento
    }
  }

  loadView(targetRoute = window.location.pathname) {
    // Si targetRoute es igual a una URL "limpia", convertirla a la ruta del archivo
    if (!targetRoute.startsWith('/views/pages/')) {
      const [_, entity, operation] = targetRoute.split('/');
      targetRoute = `/views/pages/${entity}/${operation}`;
    }

    this.fetchAndRender(targetRoute);
  }

  fetchAndRender(viewPath) {
    fetch(viewPath)
      .then(response => response.text())
      .then(html => {
        this.mainSection.innerHTML = html;
      });
  }
}
