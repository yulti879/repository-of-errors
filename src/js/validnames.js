export default class Validator {
    static validateUserName(username) {
        const regex = /^(?![-_\d])(?!.*\d{4,})[a-zA-Z0-9-_]*[a-zA-Z]$/;
    
        return regex.test(username);
    }
}