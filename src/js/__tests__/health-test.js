import { healthIndicator } from "../health";

test('character with health of 51 should be healthy', () => {
    expect(healthIndicator({ name: 'Маг', health: 51 })).toBe('healthy');
});

test('character with health of 50 should be wounded', () => {
    expect(healthIndicator({ name: 'Маг', health: 50 })).toBe('wounded');
});

test('character with health of 16 should be wounded', () => {
    expect(healthIndicator({ name: 'Маг', health: 16 })).toBe('wounded');
});

test('character with health of 15 should be critical', () => {
    expect(healthIndicator({ name: 'Маг', health: 15 })).toBe('critical');
});

test('character with health of 0 should be critical', () => {
    expect(healthIndicator({ name: 'Маг', health: 0 })).toBe('critical');
});