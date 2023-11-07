import { DOMEventController } from '../controller/DOMEventController.js';
import { ModalController } from '../controller/ModalController.js';
import { ApiController } from '../controller/ApiController.js';

// rolesHandler.js
export default function initView() {
    //instanciar generetorInputs
    //instanciar eventos del Dom
    const $ = selector => new DOMEventController(selector);

    console.log("Inicializando vista de roles");
    $('#loginButton').on("click", () => console.log("Botón de login clickeado"));
    // Configura aquí el resto de tus eventos y lógica inicial
}
//https://chat.openai.com/share/2fc302d2-7f6b-4e6a-ba1d-d389a8cb719e
// // Aquí va el código de LoginServices.js
// const $ = selector => new DOMEventController(selector);
// const api = new ApiController();  // No necesitas un token al principio
// // Instanciamos el controlador para que se aplique a los modales en la página
// const modal = new ModalController();

// console.log("fdsf");


// const click = $('#loginButton').on("click", console.log("dfszfvd")) 