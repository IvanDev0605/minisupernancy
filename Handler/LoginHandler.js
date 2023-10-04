import { DOMEventController } from '../controller/DOMEventController.js';
import { ModalController } from '../controller/ModalController.js';
// Ajusta la ruta según tu estructura.
// Ajusta la ruta según tu estructura.
import { ApiController } from '../controller/ApiController.js';

// Aquí va el código de LoginServices.js
const $ = selector => new DOMEventController(selector);
const api = new ApiController();  // No necesitas un token al principio
// Instanciamos el controlador para que se aplique a los modales en la página
const modal = new ModalController();

$('#loginButton').click(async () => {
    const body = {
        userName: $('#username').value(),
        password: $('#password').value()
    };

    try {
        const response = await api.post('login', body);

        if (response.status) {
            localStorage.setItem('authToken', response.access_token);
            window.location.href = "views/index.php";
            console.log(response.msg);
        } else {
            modal.openModal("informative", response)
        }
    } catch (error) {

        console.error("Error al iniciar sesión:", error.message);
    }
});






