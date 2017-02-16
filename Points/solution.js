import { makePoint, getX, getY } from 'hexlet-points';

// BEGIN (write your solution here)
export const quadrant = (point) => {
  const x = getX(point);
  const y = getY(point);
  if (x === 0 || y === 0) {
    return undefined;
  } else if (x > 0) {
    if (y > 0) return 1;
    if (y < 0) return 4;
  } else {
    if (y > 0) return 2;
    if (y < 0) return 3;
  }
};
// END

// BEGIN (write your solution here)
export const symmetricalPoint = (point) => {
  const x = getX(point);
  const y = getY(point);
  return makePoint(-x, -y);
};
// END

// BEGIN (write your solution here)
export const distance = (point1, point2) => {
  const x1 = getX(point1);
  const x2 = getX(point2);
  const y1 = getY(point1);
  const y2 = getY(point2);
  return Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2));
};
// END