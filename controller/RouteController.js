export class RouteController {
  constructor() {
    this.mainSection = document.querySelector('.section.is-main-section');
    this.currentPath = window.location.pathname
  }



  handleMenuClick(event) {
    const targetRoute = event.target.getAttribute('data-route');

    if (targetRoute) {
      window.history.pushState({}, '', targetRoute);
      this.loadView();
    }
  }

  loadView() {
    const currentPath = window.location.pathname;

    switch (currentPath) {
      case '/profile':
        this.loadProfileView();
        break;
      case '/forms':
        this.loadFormsView();
        break;
      default:
        this.loadDefaultView();
    }
  }

  loadProfileView() {
    this.fetchAndRender('views/profile.html');
  }

  loadFormsView() {
    this.fetchAndRender('views/forms.html');
  }

  loadDefaultView() {
    this.fetchAndRender('views/forms.html');
  }

  fetchAndRender(viewPath) {
    fetch(viewPath)
      .then(response => response.text())
      .then(html => {
        this.mainSection.innerHTML = html;
      });
  }
}
