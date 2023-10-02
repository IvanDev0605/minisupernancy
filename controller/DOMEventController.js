export class DOMEventController {
    constructor(selector) {
        this.elements = document.querySelectorAll(selector);

    }

    on(eventName, callback) {
        this.elements.forEach(element => {
            element.addEventListener(eventName, callback);
        });
        return this;  // Esto permite encadenamiento
    }

    off(eventName, callback) {
        this.elements.forEach(element => {
            element.removeEventListener(eventName, callback);
        });
        return this;  // Esto permite encadenamiento
    }

    click(callback) {
        return this.on('click', callback);
    }

    value() {
        if (this.elements.length > 0) {
            return this.elements[0].value;
        }
        return null; // o puedes lanzar un error si el selector no coincide con ningún elemento
    }
    addClass(className) {
        this.elements.forEach(element => {
            element.classList.add(className);
        });
        return this;  // Esto permite encadenamiento
    }

    // Puedes agregar también un método removeClass si lo necesitas:

    removeClass(className) {
        this.elements.forEach(element => {
            element.classList.remove(className);
        });
        return this;  // Esto permite encadenamiento
    }

    getFirstElement() {
        return this.elements.length > 0 ? this.elements[0] : null;
    }


    // Puedes agregar más métodos similares para otros eventos si lo deseas
}

