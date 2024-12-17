export default class ErrorRepository {
    constructor() {
        this.errors = new Map([
            [204, 'No Content'],
            [400, 'Bad Request'],
            [401, 'Unauthorized'],
            [403, 'Forbidden'],
            [404, 'Not Found'],
            [500, 'Internal Server Error'],
            // Можно добавлятье другие варианты
        ]);
    }
    
    translate(code) {
        return this.errors.get(code) || 'Unknown error'; 
    }
}