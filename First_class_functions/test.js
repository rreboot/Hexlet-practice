import assert from 'assert';

import { flip } from './solution';

const wop = flip(Math.pow);

assert.equal(wop(1, 2), 2);
assert.equal(wop(3, 2), 8);
