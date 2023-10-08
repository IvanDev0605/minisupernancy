export class ApiClientModel {
    constructor(token) {
        this.baseUrl = "http://api.minisupernancy.com/";
        this.token = token;
    }

    async post(endpoint = '', headers, body = {}) {
        const response = await fetch(`${this.baseUrl}api/${endpoint}`, {
            method: 'POST',
            headers,
            body,
            credentials: 'include'
        });

        if (!response.ok) {
            throw new Error(`POST request failed: ${response.statusText}`);
        }

        return await response.json();
    }

    // ... [otros métodos HTTP aquí]
}
