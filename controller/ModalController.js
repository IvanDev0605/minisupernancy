import { DOMEventController } from '../controller/DOMEventController.js';
const $ = selector => new DOMEventController(selector);

export class ModalController {
    constructor() {
        this.header = $(".modal-card-head");
        this.modalTitle = $(".modal-card-title");
        this.body = $(".modal-card-body");
        this.modalBody = $(".modal-body");
        this.footer = $(".modal-card-foot");
    }

    initModalClosers() {
        // Usando la controladora para añadir el evento de cierre
        $('.jb-modal-close').on('click', e => this.closeModal(e));
    }

    openModal(type, body) {
        switch (type) {
            case 'informative':
                this.infoModal(body);
                break;
            case 'confirmative':
                this.confirmModal(body);
                break;
            default:
                console.error("Unknown modal type:", type);
                return;
        }

        // Usando la controladora para añadir clases
        $('#modal').addClass('is-active');
        $('html').addClass('is-clipped');
    }

    closeModal(event) {
        // Usando la controladora para eliminar clases
        $(event.currentTarget.closest('.modal')).removeClass('is-active');
        $('html').removeClass('is-clipped');
    }

    infoModal(body) {
        this.setTitle(body.status);
        this.setBody(body);
        this.setButtonModal();
    }

    confirmModal(body) {
        // Aquí puedes agregar lógica específica para manejar modales confirmativos.
        // ...
        // Usando la controladora para añadir el evento al botón de confirmación
        $('#confirm-btn').on('click', () => {
            this.closeModal({ currentTarget: document.getElementById('modal') });
        });
    }

    setTitle(status) {
        // Usando la controladora para establecer texto
        this.modalTitle.text(status ? "Éxito" : "Error");

        this.header.addClass(status ? "has-background-success" : "has-background-warning")
        this.footer.addClass(status ? "has-background-success-light" : "has-background-warning-light")
    }


    setBody(body) {
        // Usando la controladora para añadir clases y establecer texto
        this.body.addClass(body.status ? "has-background-success-light" : "has-background-warning-light")
        this.modalBody.text(String(body.msg));
    }

    setButtonModal() {
        // Usando la controladora para manipular el DOM
        const footer = this.footer.getFirstElement();

        // Limpiar el contenedor de botones existentes
        footer.innerHTML = '';

        // Crear y agregar el botón "Aceptar"
        const acceptButton = document.createElement('button');
        acceptButton.className = 'button is-success jb-modal-close';
        acceptButton.textContent = 'Aceptar';
        footer.appendChild(acceptButton);

        // Crear y agregar el botón "Cerrar"
        const closeButton = document.createElement('button');
        closeButton.className = 'button jb-modal-close';
        closeButton.textContent = 'Cerrar';
        footer.appendChild(closeButton);

        this.initModalClosers();
    }
}
