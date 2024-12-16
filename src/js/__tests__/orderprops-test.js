import orderByProps from "../orderbyprops";

test('Sorts the properties of an object in the specified order', () => {
    const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };
    const order = ['name', 'level'];
    const expected = [
      { key: 'name', value: 'мечник' },
      { key: 'level', value: 2 },
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
    ];
    expect(orderByProps(obj, order)).toEqual(expected);
  });
  
  test('Ignores properties from order that are not present in the object', () => {
    const obj = { name: 'мечник', health: 10 };
    const order = ['name', 'level', 'unknownKey'];
    const expected = [
      { key: 'name', value: 'мечник' },
      { key: 'health', value: 10 },
    ];
    expect(orderByProps(obj, order)).toEqual(expected);
  });  
  
  test('Returns an empty array for an empty object', () => {
    const obj = {};
    const order = ['name'];
    const expected = [];
    expect(orderByProps(obj, order)).toEqual(expected);
  });
  
  test('Returns the corresponding array if order is empty', () => {
    const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };
    const order = [];
    const expected = [
        { key: 'attack', value: 80 },
        { key: 'defence', value: 40 },
        { key: 'health', value: 10 },
        { key: 'level', value: 2 }, 
        { key: 'name', value: 'мечник' },
    ];
    expect(orderByProps(obj, order)).toEqual(expected);
  });