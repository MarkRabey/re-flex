/* eslint-disable */
import React from 'react';
import { Flex, Box } from 're-flex';
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
  gutter={ 1 }
  style={{ backgroundColor: '#ddd' }}>
  <Box width={[1, [600, 1/2], [800, 1/3], [960, 1/4]]}>Box #1</Box>
  <Box width={[1, [600, 1/2], [800, 1/3], [960, 1/4]]}>Box #2</Box>
  <Box width={[1, [600, 1/2], [800, 1/3], [960, 1/4]]}>Box #3</Box>
  <Box width={[1, [600, 1/2], [800, 1/3], [960, 1/4]]}>Box #4</Box>
</Flex>`}
    </SyntaxHighlighter>

    <Flex
      gutter={ 1 }
      style={{ backgroundColor: '#ddd' }}>
      <Box width={[1, [600, 1/2], [800, 1/3], [960, 1/4]]} style={{ backgroundColor: '#bcbcbc' }}>Box #1</Box>
      <Box width={[1, [600, 1/2], [800, 1/3], [960, 1/4]]} style={{ backgroundColor: '#bcbcbc' }}>Box #2</Box>
      <Box width={[1, [600, 1/2], [800, 1/3], [960, 1/4]]} style={{ backgroundColor: '#bcbcbc' }}>Box #3</Box>
      <Box width={[1, [600, 1/2], [800, 1/3], [960, 1/4]]} style={{ backgroundColor: '#bcbcbc' }}>Box #4</Box>
    </Flex>
  </article>
);