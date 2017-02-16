import chai from 'chai';
import * as points from 'hexlet-points';
import {
  makeSegment,
  startSegment,
  endSegment,
  midpointSegment,
  toStr,
} from './solution';

const assert = chai.assert;

const segment = makeSegment(points.makePoint(1, 2), points.makePoint(-4, -2));

assert.equal(points.toString(startSegment(segment)), points.toString(points.makePoint(1, 2)));
assert.equal(points.toString(endSegment(segment)), points.toString(points.makePoint(-4, -2)));

assert.equal(toStr(segment), '[(1, 2), (-4, -2)]');

assert.equal(points.toString(midpointSegment(segment)), '(-1.5, 0)');