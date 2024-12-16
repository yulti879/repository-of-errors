import Team from '../team';
import { Bowman, Swordsman } from '../characters';


    let team;
    let character1;
    let character2;
    let character3;
    
    beforeEach(() => {
        team = new Team();
        character1 = new Bowman('Bowman1');
        character2 = new Swordsman('Swordsman1');
        character3 = new Bowman('Bowman2');
    });
    
    test('adding a unique character is done correctly', () => {
        team.add(character1);
        expect(team.members.has(character1)).toBe(true);
    });
    
    test('adding a duplicate character causes an error', () => {
        team.add(character1);
        expect(() => team.add(character1)).toThrow('Персонаж уже добавлен в команду');
    });
    
    test('adding several unique characters to an empty team is done correctly', () => {
        team.addAll(character1, character2);
        expect(team.members.size).toBe(2);        
    });

    test('adding several unique characters to a non-empty team is done correctly', () => {
        team.addAll(character1);       
        team.addAll(character2, character3);
        expect(team.members.size).toBe(3);        
    });

    test('adding a duplicate character to an empty team', () => {
        team.addAll(character1, character1);
        expect(team.members.size).toBe(1);        
    });

    test('adding several characters, including a duplicate, to an empty team', () => {
        team.addAll(character1, character1, character2);
        expect(team.members.size).toBe(2);        
    });

    test('adding a duplicate character to a non-empty team', () => {
        team.add(character1);   
        team.addAll(character1, character2, character3);
        expect(team.members.size).toBe(3);        
    });

    test('convert to array is done correctly', () => {
        team.add(character1);
        team.addAll(character2, character3);
        const charactersArray = team.toArray();
        expect(charactersArray).toEqual([character1, character2, character3]);
    });