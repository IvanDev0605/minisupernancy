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
    
        const responseData = await response.json(); // Siempre obtenemos la respuesta JSON
    
        if (!response.ok) {
            // Agregamos un nuevo campo 'isError' para identificar fácilmente los errores
            return { ...responseData, isError: true };
        }
    
        return responseData;
    }
    

    // ... [otros métodos HTTP aquí]
}
