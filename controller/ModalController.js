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
        Array.from(document.getElementsByClassName('jb-modal-close')).forEach(el => {
            el.addEventListener('click', e => this.closeModal(e));
        });
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

        document.getElementById('modal').classList.add('is-active');
        document.documentElement.classList.add('is-clipped');
    }

    closeModal(event) {
        event.currentTarget.closest('.modal').classList.remove('is-active');
        document.documentElement.classList.remove('is-clipped');
    }

    infoModal(body) {
        // Setear la información en el contenido del modal
        this.setTitle(body.status)
        this.setBody(body)
        this.setButtonModal();

    }

    confirmModal(body) {
        // Aquí puedes agregar lógica específica para manejar modales confirmativos.
        // Por ejemplo, mostrar un mensaje y añadir botones de "Aceptar" y "Cancelar".
        const modalContent = document.getElementById('modal-content');
        if (modalContent) {
            modalContent.innerHTML = `
                <p>${body}</p>
                <button id="confirm-btn">Aceptar</button>
                <button class="jb-modal-close">Cancelar</button>
            `;

            // También podrías agregar un eventListener al botón de confirmación si es necesario.
            document.getElementById('confirm-btn').addEventListener('click', () => {
                // Lógica cuando se presiona "Aceptar"
                this.closeModal({ currentTarget: document.getElementById('modal') }); // Suponiendo que 'modal' es el ID de tu modal.
            });
        }
    }

    setTitle(status) {

        this.modalTitle.getFirstElement().textContent = status ? "Éxito" : "Error";
        this.header.addClass(status ? "has-background-success" : "has-background-warning")
        this.footer.addClass(status ? "has-background-success-light" : "has-background-warning-light")
    }

    setBody(body) {
        this.body.addClass(body.status ? "has-background-success-light" : "has-background-warning-light")
        this.modalBody.getFirstElement().textContent = String(body.msg)

    }

    setButtonModal() {
        // Obtener el contenedor de los botones
        const footer = this.footer.getFirstElement();


        // Limpiar el contenedor de botones existentes
        while (footer.firstChild) {
            footer.removeChild(footer.firstChild);
        }
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
