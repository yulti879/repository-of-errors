import { Zombie } from "../characters.js";

const character = new Zombie('aБ');

test('level up at 0 health should throw an error', () => {    
    character.health = 0;    
    expect(() => character.levelUp()).toThrow('Нельзя повысить левел умершего');
});

test('level, attack, defense and health are increased', () => {
    character.health = 10;
    character.levelUp();
    expect(character.level).toBe(2);
    expect(character.attack).toBe(48);
    expect(character.defence).toBe(12);
    expect(character.health).toBe(100);    
});