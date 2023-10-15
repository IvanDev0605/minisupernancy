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
        try {
            await this.getCsrfCookie();
            const headers = this.getHeaders(body);
            let payload;

            if (body instanceof FormData) {
                payload = body;
            } else {
                payload = JSON.stringify(body);
            }

            return await this.apiClient.post(endpoint, headers, payload);
        } catch (error) {
            throw new Error(`Failed to post: ${error.message}`);
        }
    }

    // ... [otros métodos aquí]
}
