/* eslint-disable */
import React from 'react';
import Flex from 'Flex';
import FlexItem from 'FlexItem';
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
      scope={{ Flex, FlexItem }}
      code={
`const App = () => (
  <Flex>
    <FlexItem>Item 1</FlexItem>
    <FlexItem>Item 2</FlexItem>
    <FlexItem>Item 3</FlexItem>
  </Flex>
);` }>
      <Flex cellWidth="1/2" gutter="0px">
        <FlexItem>
          <LiveEditor />
        </FlexItem>

        <FlexItem>
          <LivePreview />
        </FlexItem>

        <FlexItem width="1">
          <LiveError />
        </FlexItem>
      </Flex>
    </LiveProvider>
  </section>
);

export default Live;