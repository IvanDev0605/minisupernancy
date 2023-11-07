"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["Handler_rolesHandler_js"],{

/***/ "./Handler/rolesHandler.js":
/*!*********************************!*\
  !*** ./Handler/rolesHandler.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initView)
/* harmony export */ });
/* harmony import */ var _controller_DOMEventController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controller/DOMEventController.js */ "./controller/DOMEventController.js");
/* harmony import */ var _controller_ModalController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controller/ModalController.js */ "./controller/ModalController.js");
/* harmony import */ var _controller_ApiController_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controller/ApiController.js */ "./controller/ApiController.js");




// rolesHandler.js
function initView() {
  //instanciar generetorInputs
  //instanciar eventos del Dom
  var $ = function $(selector) {
    return new _controller_DOMEventController_js__WEBPACK_IMPORTED_MODULE_0__.DOMEventController(selector);
  };
  console.log("Inicializando vista de roles");
  $('#loginButton').on("click", function () {
    return console.log("Botón de login clickeado");
  });
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

/***/ })

}]);