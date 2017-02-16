import { makePoint } from 'hexlet-points';

import {
  makeRectangle,
  width,
  square,
  perimeter,
  containsTheOrigin,
} from '../solution';

const rectangle = makeRectangle(makePoint(0, 1), 5, 4);

test('rectangle', () => {
  expect(square(rectangle)).toBe(20);
  expect(perimeter(rectangle)).toBe(18);
  expect(containsTheOrigin(rectangle)).toBeFalsy();

  expect(containsTheOrigin(makeRectangle(makePoint(-4, 3), 5, 4))).toBeTruthy();
  expect(containsTheOrigin(makeRectangle(makePoint(-4, 4), 5, 2))).toBeFalsy();
  expect(containsTheOrigin(makeRectangle(makePoint(-4, 3), 2, 8))).toBeFalsy();
});