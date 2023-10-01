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
    // Puedes agregar más métodos similares para otros eventos si lo deseas
}

