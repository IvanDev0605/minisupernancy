export class InputController {
    constructor(selector) {
        this.divs = document.querySelectorAll(selector);
    }

    crearInputs() {
        this.divs.forEach(div => {
            // Obtener los atributos del div
            const label = div.getAttribute('data-label');
            const type = div.getAttribute('data-type');
            const id = div.getAttribute("data-id");
            const placeholder = div.getAttribute('data-placeholder');

            // Crear el nuevo div con el input
            const newDiv = document.createElement('div');
            newDiv.className = 'field';

            const newLabel = document.createElement('label');
            newLabel.className = 'label';
            newLabel.textContent = label;

            const controlDiv = document.createElement('div');
            controlDiv.className = 'control';

            const input = document.createElement('input');
            input.className = 'input';
            input.type = type;
            input.id = id;
            input.placeholder = placeholder;


            // Armar la estructura
            controlDiv.appendChild(input);
            newDiv.appendChild(newLabel);
            newDiv.appendChild(controlDiv);

            // Insertar el nuevo div en el DOM
            div.parentNode.insertBefore(newDiv, div.nextSibling);
        });
    }
}

// Uso de la clase

