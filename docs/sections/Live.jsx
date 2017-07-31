/* eslint-disable */
import React from 'react';
import Flex from '../../src';

import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview,
} from 'react-live';

const Live = () => (
  <section className="demo__section">
    <header className="demo__section-header">
      <h2>
        Live Example
      </h2>
    </header>
    <LiveProvider
      scope={{ Flex }}
      code={
`const App = () => (
  <Flex cellWidth={[ 1, 1/2 ]}>
    <Flex>Item 1</Flex>
    <Flex>Item 2</Flex>
    <Flex>Item 3</Flex>
  </Flex>
);` }>
  <LivePreview />
  <LiveEditor />
  <LiveError />
    </LiveProvider>
  </section>
);

export default Live;