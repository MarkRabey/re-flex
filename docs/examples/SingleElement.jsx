/* eslint-disable */
import React from 'react';
import { Flex } from 're-flex';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/styles';

export default () => (
  <article className="demo__example">
    <header>
      <h3>Single Element</h3>
    </header>

    <SyntaxHighlighter language="html" style={ atomOneDark }>
{`<Flex
  alignItems="center"
  justifyContent="center"
  style={{ backgroundColor: '#ddd', fontSize: 36 }}>
  Re-Flex
</Flex>`}
    </SyntaxHighlighter>

    <Flex
      alignItems="center"
      justifyContent="center"
      style={{ backgroundColor: '#ddd', fontSize: 36 }}>
      Re-Flex
    </Flex>
  </article>
);