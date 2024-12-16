import Character from "../parent-character";

import { Bowman, Swordsman, Magician, Undead, Zombie, Daemon } from "../characters";

test('Character with invalid type should throw an error', () => {
    expect(() => new Character('aБ', 'невесть кто')).toThrow('Некорректный тип персонажа');
});

test('Character with invalid name should throw an error', () => {
    expect(() => new Bowman('')).toThrow('Имя должно быть строкой длиной от 2 до 10 символов');
    expect(() => new Bowman(1)).toThrow('Имя должно быть строкой длиной от 2 до 10 символов');
    expect(() => new Bowman('A')).toThrow('Имя должно быть строкой длиной от 2 до 10 символов');    
    expect(() => new Bowman('aБВГДЕЖЗИКЛ')).toThrow('Имя должно быть строкой длиной от 2 до 10 символов');
});

test('Character with valid name and type should be created successfully', () => {
    const character = new Bowman('aБ');
    expect(character.name).toBe('aБ');
    expect(character.type).toBe('Bowman');
    expect(character.health).toBe(100);
    expect(character.level).toBe(1);
    expect(character.attack).toBe(25);
    expect(character.defence).toBe(25);
});

test('Character with valid name and type should be created successfully', () => {
    const character = new Swordsman('aБ');
    expect(character.name).toBe('aБ');
    expect(character.type).toBe('Swordsman');
    expect(character.health).toBe(100);
    expect(character.level).toBe(1);
    expect(character.attack).toBe(40);
    expect(character.defence).toBe(10);
});

test('Character with valid name and type should be created successfully', () => {
    const character = new Magician('aБ');
    expect(character.name).toBe('aБ');
    expect(character.type).toBe('Magician');
    expect(character.health).toBe(100);
    expect(character.level).toBe(1);
    expect(character.attack).toBe(10);
    expect(character.defence).toBe(40);
});

test('Character with valid name and type should be created successfully', () => {
    const character = new Undead('aБ');
    expect(character.name).toBe('aБ');
    expect(character.type).toBe('Undead');
    expect(character.health).toBe(100);
    expect(character.level).toBe(1);
    expect(character.attack).toBe(25);
    expect(character.defence).toBe(25);
});

test('Character with valid name and type should be created successfully', () => {
    const character = new Daemon('aБ');
    expect(character.name).toBe('aБ');
    expect(character.type).toBe('Daemon');
    expect(character.health).toBe(100);
    expect(character.level).toBe(1);
    expect(character.attack).toBe(10);
    expect(character.defence).toBe(40);
});

test('Character with valid name and type should be created successfully', () => {
    const character = new Zombie('aБ');
    expect(character.name).toBe('aБ');
    expect(character.type).toBe('Zombie');
    expect(character.health).toBe(100);
    expect(character.level).toBe(1);
    expect(character.attack).toBe(40);
    expect(character.defence).toBe(10);
});