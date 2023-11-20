import { ApiClientModel } from '../models/ApiModel.js';

export class ApiController {
    constructor(token) {
        this.apiClient = new ApiClientModel(token);
        this.token = token;
    }

    getHeaders(body) {
        const headers = {
            'Authorization': `Bearer ${this.token}`,
            'Accept': 'application/json'
        };
        if (!(body instanceof FormData)) {
            headers['Content-Type'] = 'application/json';
        }
        return headers;
    }

    async getCsrfCookie() {
        const response = await fetch(`http://api.minisupernancy.com/sanctum/csrf-cookie`, {
            method: 'GET',
            credentials: 'include'
        });
        if (!response.ok) {
            throw new Error(`Failed to get CSRF cookie: ${response.statusText}`);
        }
    }

    async post(endpoint, body) {
        console.log(body)
        try {
            this.token = this.getToken(); // Actualiza el token
            await this.getCsrfCookie();
            const headers = this.getHeaders(body);
            let payload;

            if (body instanceof FormData) {
                payload = body;
            } else {
                payload = JSON.stringify(body);

            }
            console.log(payload)
            return await this.apiClient.post(endpoint, headers, payload);
        } catch (error) {
            throw new Error(`Failed to post: ${error.message}`);
        }
    }

    getToken() {
        return localStorage.getItem('authToken'); // Asegúrate de que 'token' sea la clave correcta en localStorage
    }


    formatearRespuesta(data) {
        let resultado = '';
        for (const [clave, valor] of Object.entries(data)) {
            resultado += `${clave}: ${valor}\n`; // Agrega cada par clave-valor con un salto de línea
        }
        return resultado.trim(); // Elimina el último salto de línea
    }

}
