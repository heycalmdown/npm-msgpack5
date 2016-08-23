import test = require('blue-tape');

import * as msgpack5 from 'msgpack5';

test('simple test', (t) => {
  const packer = msgpack5();
  const IN = {};
  const OUT = packer.decode(packer.encode(IN));
  t.deepEquals(IN, OUT);
  t.end();
});
