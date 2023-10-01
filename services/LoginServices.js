import { DOMEventController } from '../controller/DOMEventController.js';
// Ajusta la ruta según tu estructura.
import { ApiClientModel } from '../models/ApiClientModel.js';

// Aquí va el código de LoginServices.js
const $ = selector => new DOMEventController(selector);
const api = new ApiClientModel();  // No necesitas un token al principio

$('#loginButton').click(async () => {
    const body = {
        userName: $('#username').value(),
        password: $('#password').value()
    };

    try {
        const response = await api.post('login', body);

        if (response.status) {
            localStorage.setItem('authToken', response.access_token);
            console.log(response.msg);
        } else {
            console.error(response.msg);
        }
    } catch (error) {
        console.error("Error al iniciar sesión:", error.message);
    }
});






