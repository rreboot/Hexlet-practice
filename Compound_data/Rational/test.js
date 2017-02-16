import assert from 'assert';
import * as rational from './rational';

const rat1 = rational.make(2, 3);
const rat12 = rational.make(4, 6);
const rat2 = rational.make(7, 2);

assert.equal(rational.toString(rat12), '4 / 6');

assert(rational.isEqual(rat1, rat12));
assert(!rational.isEqual(rat1, rat2));

assert.equal(
  rational.toString(rational.add(rat1, rat2)),
  rational.toString(rational.make(25, 6))
);

assert.equal(
  rational.toString(rational.sub(rat2, rat1)),
  rational.toString(rational.make(17, 6))
);

assert.equal(
  rational.toString(rational.mul(rat1, rat2)),
  rational.toString(rational.make(14, 6))
);

assert.equal(
  rational.toString(rational.div(rat1, rat2)),
  rational.toString(rational.make(4, 21))
);
