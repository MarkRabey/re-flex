/* eslint-disable */
import React from 'react';
import Flex from 'Flex';
// import FlexItem from 'FlexItem';

export default () => (
  <section className="demo__section">
    <header className="demo__section-header">
      <h2>Examples</h2>
    </header>
    <code>FlexItem</code> with default properties:
    <ul>
      <li><code>width</code> = 1/3</li>
      <li><code>horizontalAlign</code> = 'left'</li>
      <li><code>verticalAlign</code> = 'top'</li>
    </ul>
    <Flex className="demo__container">
      <Flex className="demo__item"><code>&lt;Flex /&gt;</code></Flex>
      <Flex className="demo__item"><code>&lt;Flex /&gt;</code></Flex>
      <Flex className="demo__item"><code>&lt;Flex /&gt;</code></Flex>
    </Flex>
  </section>
);