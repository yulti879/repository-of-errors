import Validator from "../validnames";

test('valid usernames', () => {
    expect(Validator.validateUserName("Aa0Bb1Cc2Dd3Ee4Ff5Gg6Hh789Ii-----Jj_____KkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz")).toBe(true);
});

test('special characters', () => {
    expect(Validator.validateUserName("a$b")).toBe(false);
    expect(Validator.validateUserName("a@b")).toBe(false);
});

test('empty username', () => {
    expect(Validator.validateUserName("")).toBe(false);
});

test('invalid digit sequences', () => {
    expect(Validator.validateUserName("a1234bc")).toBe(false);
    expect(Validator.validateUserName("a12345bc")).toBe(false);
});

test('invalid starting characters', () => {
    expect(Validator.validateUserName("_ab")).toBe(false);
    expect(Validator.validateUserName("-ab")).toBe(false);
    expect(Validator.validateUserName("1ab")).toBe(false);
});

test('invalid ending characters', () => {
    expect(Validator.validateUserName("ab_")).toBe(false);
    expect(Validator.validateUserName("ab-")).toBe(false);
    expect(Validator.validateUserName("ab1")).toBe(false);
});