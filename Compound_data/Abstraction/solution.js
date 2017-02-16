import { makePoint, getX, getY, quadrant } from 'hexlet-points';
import { cons, car, cdr, toString } from 'hexlet-pairs';

// BEGIN (write your solution here)
const getWidth = (rectangle) => {
  return car(cdr(rectangle));
};

const getHeight = (rectangle) => {
  return cdr(cdr(rectangle));
};

export const makeRectangle = (point, width, height) => {
  return cons(point, cons(width, height));
};

export const square = (rectangle) => {
  const sideA = getWidth(rectangle);
  const sideB = getHeight(rectangle);
  return sideA * sideB;
};

export const perimeter = (rectangle) => {
  const sideA = getWidth(rectangle);
  const sideB = getHeight(rectangle);
  return 2 * (sideA + sideB);
};

export const containsTheOrigin = (rectangle) => {
  const leftTopPoint = car(rectangle);
  const leftDownPoint = makePoint(getX(leftTopPoint), getY(leftTopPoint) - getHeight(rectangle));
  const rightTopPoint = makePoint(getY(leftTopPoint), getX(leftTopPoint) + getWidth(rectangle));
  if (quadrant(leftTopPoint) === 2 
  && quadrant(leftDownPoint) === 3 
  && quadrant(rightTopPoint) === 1) {
      return true;
    }
  return false;
};

// END