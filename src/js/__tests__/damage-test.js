import { Magician } from "../characters.js";

const character = new Magician('aБ');

test('should decrease health correctly based on damage and defence', () => {    
    character.damage(20);
    expect(character.health).toBe(88)
});    
    
test('should not reduce health below 0', () => {    
    character.health = 10;
    character.damage(100);
    expect(character.health).toBe(0);
});

test('should correctly handle zero damage', () => {    
    character.health = 100;
    character.damage(0);
    expect(character.health).toBe(100);
});