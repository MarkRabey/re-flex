/* eslint-disable */
import React from 'react';
import Flex from 'Flex';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/styles';

export default () => (
  <article className="demo__example">
    <header>
      <h3>Basic Grid</h3>
      <small>(padding and background-color added for demo purposes)</small>
    </header>

    <SyntaxHighlighter language="html" style={ atomOneDark }>
{`<Flex
  cellWidth={[ 1, 1/2, 1/4 ]}
  style={{ padding: 12, backgroundColor: '#ddd' }}>
  <Flex>Flex #1</Flex>
  <Flex>Flex #2</Flex>
  <Flex>Flex #3</Flex>
  <Flex>Flex #4</Flex>
</Flex>`}
    </SyntaxHighlighter>

    <Flex
      cellWidth={[ 1, 1/2, 1/4 ]}
      style={{ padding: 12, backgroundColor: '#ddd' }}>
      <Flex style={{ padding: 12, backgroundColor: '#bcbcbc' }}>Flex #1</Flex>
      <Flex style={{ padding: 12, backgroundColor: '#bcbcbc' }}>Flex #2</Flex>
      <Flex row style={{ padding: 12, backgroundColor: '#bcbcbc' }}>Flex #3</Flex>
      <Flex style={{ padding: 12, backgroundColor: '#bcbcbc' }}>Flex #4</Flex>
    </Flex>
  </article>
);