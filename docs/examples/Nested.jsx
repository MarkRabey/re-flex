/* eslint-disable */
import React from 'react';
import { Flex, Box } from 're-flex';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/styles';

export default () => (
  <article className="demo__example">
    <header>
      <h3>Nested Multiple Levels</h3>
    </header>

    <SyntaxHighlighter language="html" style={ atomOneDark }>
{`<Flex>
  <Flex>
    <Flex width="100px">Fixed width</Flex>
    <Flex width="100px">Fixed width</Flex>
  </Flex>
  <Flex>All the place in the world</Flex>
</Flex>`}
    </SyntaxHighlighter>

    <Flex gutter={1}>
      <Box width={1/3}>Box</Box>
      <Box width={2/3}>
        <Flex gutter={1}>
          <Box width={1}>Box</Box>
          <Box width={1}>Box</Box>
        </Flex>
      </Box>
    </Flex>
  </article>
);