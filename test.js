import test from 'ava';
import React from 'react';
import { create } from 'react-test-renderer';

import Flex from './src';
 
test('exports components', t => {
  t.is(typeof Flex, 'function');
});
