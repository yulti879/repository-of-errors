import { sortCharactersByHealth } from "../sort";

test('characters should be sorted by health in descending order', () => {

  const characters = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];
  
  const sortedCharacters = sortCharactersByHealth(characters);
  
  expect(sortedCharacters).toEqual([
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ]);
});