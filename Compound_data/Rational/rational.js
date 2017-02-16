import { cons, car, cdr } from 'hexlet-pairs';

// BEGIN (write your solution here)
export const make = (numer, denom) => {
  if (denom < 0) {
    numer = -numer;
  }
  return cons(numer, denom);
};

export const numer = (rational) => car(rational);

export const denom = (rational) => cdr(rational);

export const toString = (rational) => `${numer(rational)} / ${denom(rational)}`;

export const isEqual = (rational1, rational2) => {
  const numer1 = numer(rational1);
  const numer2 = numer(rational2);
  const denom1 = denom(rational1);
  const denom2 = denom(rational2);
  if (numer1 / denom1 === numer2 / denom2) {
    return true;
  }
  return false;
};

export const add = (rat1, rat2) => {
  const num1 = numer(rat1);
  const num2 = numer(rat2);
  const den1 = denom(rat1);
  const den2 = denom(rat2);
  const newNum = (num1*den2 + den1*num2);
  const newDen = (den1*den2);
  return make(newNum, newDen);
};

export const sub = (rat1, rat2) => {
  const num1 = numer(rat1);
  const num2 = numer(rat2);
  const den1 = denom(rat1);
  const den2 = denom(rat2);
  const newNum = (num1*den2 - den1*num2);
  const newDen = (den1*den2);
  return make(newNum, newDen);
};

export const mul = (rat1, rat2) => {
  const num1 = numer(rat1);
  const num2 = numer(rat2);
  const den1 = denom(rat1);
  const den2 = denom(rat2);
  const newNum = (num1*num2);
  const newDen = (den1*den2);
  return make(newNum, newDen);
};

export const div = (rat1, rat2) => {
  const num1 = numer(rat1);
  const num2 = numer(rat2);
  const den1 = denom(rat1);
  const den2 = denom(rat2);
  const newNum = (num1*den2);
  const newDen = (num2*den1);
  return make(newNum, newDen);
};
// END
