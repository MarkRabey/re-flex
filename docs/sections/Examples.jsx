/* eslint-disable */
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/styles';

import SingleElement from '../examples/SingleElement';
import BasicGrid from '../examples/BasicGrid';
import Nested from '../examples/Nested';

export default () => (
  <section className="demo__section">
    <header className="demo__section-header">
      <h2>Examples</h2>
    </header>

    <SingleElement />
    <BasicGrid />
    <Nested />
  </section>
);