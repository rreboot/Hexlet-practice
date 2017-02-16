import { makePoint, getX, getY, toString } from 'hexlet-points';
import { cons, car, cdr } from 'hexlet-pairs';

// BEGIN (write your solution here)
export const makeSegment = (point1, point2) => {
  return cons(point1, point2);
};

export const startSegment = (segment) => {
  return car(segment);
};

export const endSegment = (segment) => {
  return cdr(segment);
};

export const midpointSegment = (segment) => {
  const x1 = getX(startSegment(segment));
  const x2 = getX(endSegment(segment));
  const y1 = getY(startSegment(segment));
  const y2 = getY(endSegment(segment));
  return makePoint((x1+x2)/2, (y1+y2)/2);
};

export const toStr = (segment) => {
  return `[${toString(startSegment(segment))}, ${toString(endSegment(segment))}]`;
};

// END