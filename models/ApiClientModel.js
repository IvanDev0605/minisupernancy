export class ApiClientModel {
    constructor(token) {
        this.baseUrl = "http://api.minisupernancy.com/";
        this.token = token;
    }

    async getCsrfCookie() {
        const response = await fetch(`${this.baseUrl}sanctum/csrf-cookie`, {
            method: 'GET',
            credentials: 'include'  // Importante para enviar y recibir cookies
        });
        if (!response.ok) {
            throw new Error(`Failed to get CSRF cookie: ${response.statusText}`);
        }
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

    async post(endpoint = '', body = {}) {
        await this.getCsrfCookie();

        let payload;

        if (body instanceof FormData) {
            payload = body;
        } else {
            payload = JSON.stringify(body);
        }

        const response = await fetch(`${this.baseUrl}api/${endpoint}`, {
            method: 'POST',
            headers: this.getHeaders(body),
            body: payload,
            credentials: 'include' // De nuevo, importante para las cookies
        });

        if (!response.ok) {
            throw new Error(`POST request failed: ${response.statusText}`);
        }

        return await response.json();
    }

    // ... [otros métodos aquí]
}
