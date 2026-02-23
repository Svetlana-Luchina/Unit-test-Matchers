import { getHealthStatus } from '../health';

describe('getHealthStatus', () => {
  test.each([
    [{ name: 'Маг', health: 90 }, 'healthy'],
    [{ name: 'Воин', health: 50 }, 'wounded'],
    [{ name: 'Лучник', health: 30 }, 'wounded'],
    [{ name: 'Лекарь', health: 15 }, 'wounded'],
    [{ name: 'Вор', health: 14 }, 'critical'],
    [{ name: 'Мертвец', health: 0 }, 'critical'],
  ])('для %p должно вернуть %s', (character, expected) => {
    expect(getHealthStatus(character)).toBe(expected);
  });
});