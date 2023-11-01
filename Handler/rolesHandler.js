import { DOMEventController } from '../controller/DOMEventController.js';
import { ModalController } from '../controller/ModalController.js';
import { ApiController } from '../controller/ApiController.js';

// Aquí va el código de LoginServices.js
const $ = selector => new DOMEventController(selector);
const api = new ApiController();  // No necesitas un token al principio
// Instanciamos el controlador para que se aplique a los modales en la página
const modal = new ModalController();

