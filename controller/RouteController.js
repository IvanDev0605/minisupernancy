export class RouteController {
  constructor() {
    this.mainSection = document.querySelector('.section.is-main-section');
    this.currentPath = window.location.pathname
  }



  handleMenuClick(action) {
    console.log(action);

    // Descomponer la acción en entidad y operación
    const [operation, entity] = action.split('-');

    // Construir la ruta del archivo basada en la entidad y la operación
    const targetRoute = `/views/pages/${entity}/${operation}.html`;

    if (targetRoute) {
      window.history.pushState({}, '', targetRoute);
      this.loadView();
    }
  }


  loadView() {
    const currentPath = window.location.pathname;
    this.fetchAndRender(currentPath);
  }




  fetchAndRender(viewPath) {
    fetch(viewPath)
      .then(response => response.text())
      .then(html => {
        this.mainSection.innerHTML = html;
      });
  }
}
