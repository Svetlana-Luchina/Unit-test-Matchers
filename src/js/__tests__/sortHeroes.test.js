import { sortHeroes } from '../sortHeroes';

describe('sortHeroes', () => {
  test('should sort heroes by health descending', () => {
    const heroes = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];
    const expected = [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ];
    expect(sortHeroes(heroes)).toEqual(expected);
  });

  test('should return empty array when input is empty', () => {
    expect(sortHeroes([])).toEqual([]);
  });

  test('should handle single hero', () => {
    const heroes = [{ name: 'воин', health: 50 }];
    expect(sortHeroes(heroes)).toEqual([{ name: 'воин', health: 50 }]);
  });

  test('should handle heroes with same health (stable sort)', () => {
    const heroes = [
      { name: 'лучник', health: 50 },
      { name: 'маг', health: 50 },
      { name: 'мечник', health: 30 },
    ];
    const result = sortHeroes(heroes);

    expect(result[0].name).toBe('лучник');
    expect(result[1].name).toBe('маг');
    expect(result[2].name).toBe('мечник');
  });

  test('should handle zero and negative health', () => {
    const heroes = [
      { name: 'герой1', health: 0 },
      { name: 'герой2', health: -10 },
      { name: 'герой3', health: 5 },
    ];
    const expected = [
      { name: 'герой3', health: 5 },
      { name: 'герой1', health: 0 },
      { name: 'герой2', health: -10 },
    ];
    expect(sortHeroes(heroes)).toEqual(expected);
  });
});