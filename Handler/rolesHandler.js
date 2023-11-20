import { DOMEventController } from '../controller/DOMEventController.js';
import { ModalController } from '../controller/ModalController.js';
import { ApiController } from '../controller/ApiController.js';

export default function initView() {
    console.log("Inicializando vista de roles");
    const $ = selector => new DOMEventController(selector);
    const api = new ApiController();
    const modal = new ModalController(); // Instancia de ModalController
    crearRol()

}

function crearRol() {
    const submitButton = $('#loginButton');
    submitButton.on('click', async (event) => {
        event.preventDefault();

        const roleName = $('#rol').value();
        const roleDescription = $('#descripcion').value();

        try {
            const requestBody = {
                nameType: roleName,
                descriptionType: roleDescription
            };
            const response = await api.post('tipoUsuario/registrar', requestBody);

            if (response.isError) {
                // Manejo de errores específicos de la API
                console.error('Error al crear el rol:', response.message);
                const errorsText = JSON.stringify(response.errors, null, 2);
                modal.openModal('informative', { status: false, title: response.message, msg: errorsText });
            } else {
                // Manejo de éxito
                console.log('Rol creado:', response);
                const responseDataText = JSON.stringify(response.data, null, 2);
                modal.openModal('informative', { status: true, title: response.message, msg: responseDataText });
            }
        } catch (error) {
            console.error('Error al crear el rol:', error);
            modal.openModal('informative', { status: false, msg: error.message || 'Error al procesar la solicitud.' });
        }


    })
}