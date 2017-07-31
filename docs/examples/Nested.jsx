/* eslint-disable */
import React from 'react';
import Flex from 'Flex';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/styles';

export default () => (
  <article className="demo__example">
    <header>
      <h3>Nested Multiple Levels</h3>
    </header>

    <SyntaxHighlighter language="html" style={ atomOneDark }>
{`<Flex row>
  <Flex row>
    <Flex column width="100px">Left</Flex>
    <Flex column width="100px">Left</Flex>
  </Flex>
  <Flex row>All the place in the world</Flex>
</Flex>`}
    </SyntaxHighlighter>

    <Flex row>
      <Flex row>
        <Flex column width="100px">Left</Flex>
        <Flex column width="100px">Left</Flex>
      </Flex>
      <Flex row>All the place in the world</Flex>
    </Flex>
  </article>
);