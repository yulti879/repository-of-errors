import ErrorRepository from '../errors';

describe('ErrorRepository', () => {
    let errorRepo;
    
    beforeEach(() => {
        errorRepo = new ErrorRepository();
    });
    
    const testCases = [
        { code: 204, expected: 'No Content' },
        { code: 400, expected: 'Bad Request' },
        { code: 404, expected: 'Not Found' },
        { code: 999, expected: 'Unknown error' },
        { code: -1, expected: 'Unknown error' },
        { code: 'not a number', expected: 'Unknown error' },
    ];
    
    testCases.forEach(({ code, expected }) => {
        test(`should return "${expected}" for code ${code}`, () => {
            expect(errorRepo.translate(code)).toBe(expected);
        });
    });
});