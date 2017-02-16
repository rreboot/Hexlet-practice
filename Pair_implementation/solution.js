export const cons = (x, y) => (m) => m(x, y);

// BEGIN (write your solution here)
export const car = (m) => m((x, y) => x);

export const cdr = (m) => m((x, y) => y);
// END