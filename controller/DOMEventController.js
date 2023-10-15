export class DOMEventController {
    // Constructor: Inicializa el controlador con los elementos que coinciden con el selector
    constructor(selector) {
        if (typeof selector === 'string') {
            this.elements = document.querySelectorAll(selector);
        } else if (selector instanceof Element) {
            this.elements = [selector];
        } else {
            throw new Error('Invalid selector');
        }
    }


    // Método para añadir un evento a los elementos
    on(eventName, callback) {
        this.elements.forEach(element => {
            element.addEventListener(eventName, callback);
        });
        return this;  // Permite encadenamiento
    }

    // Método para eliminar un evento de los elementos
    off(eventName, callback) {
        this.elements.forEach(element => {
            element.removeEventListener(eventName, callback);
        });
        return this;  // Permite encadenamiento
    }

    // Método para añadir un evento de clic a los elementos
    click(callback) {
        return this.on('click', callback);
    }

    // Método para obtener el valor del primer elemento
    value() {
        if (this.elements.length > 0) {
            return this.elements[0].value;
        }
        return null;
    }

    // Método para añadir una clase a los elementos
    addClass(className) {
        this.elements.forEach(element => {
            element.classList.add(className);
        });
        return this;  // Permite encadenamiento
    }

    // Método para eliminar una clase de los elementos
    removeClass(className) {
        this.elements.forEach(element => {
            element.classList.remove(className);
        });
        return this;  // Permite encadenamiento
    }

    // Método nuevo: Alternar una clase en los elementos
    toggleClass(className) {
        this.elements.forEach(element => {
            element.classList.toggle(className);
        });
        return this;  // Permite encadenamiento
    }

    // Método nuevo: Establecer un atributo en los elementos
    setAttribute(attrName, attrValue) {
        this.elements.forEach(element => {
            element.setAttribute(attrName, attrValue);
        });
        return this;  // Permite encadenamiento
    }

    // Método nuevo: Obtener el valor de un atributo del primer elemento
    getAttribute(attrName) {
        if (this.elements.length > 0) {
            return this.elements[0].getAttribute(attrName);
        }
        return null;
    }

    // Método nuevo: Eliminar un atributo de los elementos
    removeAttribute(attrName) {
        this.elements.forEach(element => {
            element.removeAttribute(attrName);
        });
        return this;  // Permite encadenamiento
    }

    // Método nuevo: Establecer o obtener el HTML interno de los elementos
    html(newHtml) {
        if (newHtml !== undefined) {
            this.elements.forEach(element => {
                element.innerHTML = newHtml;
            });
            return this;  // Permite encadenamiento
        } else {
            return this.elements.length > 0 ? this.elements[0].innerHTML : null;
        }
    }

    // Método nuevo: Establecer o obtener el texto interno de los elementos
    text(newText) {
        if (newText !== undefined) {
            this.elements.forEach(element => {
                element.textContent = newText;
            });
            return this;  // Permite encadenamiento
        } else {
            return this.elements.length > 0 ? this.elements[0].textContent : null;
        }
    }

    // Método nuevo: Encontrar elementos hijos que coincidan con un selector
    find(selector) {
        return this.elements.length > 0 ? this.elements[0].querySelectorAll(selector) : null;
    }

    // Método para obtener el primer elemento del conjunto
    getFirstElement() {
        return this.elements.length > 0 ? this.elements[0] : null;
    }
    // Añade este método a tu clase DOMEventController
    forEach(callback) {
        this.elements.forEach(callback);
        return this;  // Para permitir encadenamiento
    }

}
