import test from 'ava';
import React from 'react';
import { create } from 'react-test-renderer';

import { Flex, FlexItem } from './src';
 
test('exports components', t => {
  t.is(typeof Flex, 'function');
  t.is(typeof FlexItem, 'function');
});
