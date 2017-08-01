/* eslint-disable */
import React from 'react';
import Flex from 'Flex';

export default () => (
  <section className="demo__section">
    <header className="demo__section-header">
      <h2>Properties</h2>
    </header>

    <table className="table">
      <thead className="table__head">
        <tr className="table__row">
          <th>Property</th>
          <th>Type</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody className="table__body">
        <tr className="table__row">
          <td><code>row</code></td>
          <td>boolean</td>
          <td>false</td>
          <td>Sets <code>flex-direction: row;</code></td>
        </tr>

        <tr className="table__row">
          <td><code>column</code></td>
          <td>boolean</td>
          <td>false</td>
          <td>Sets <code>flex-direction: column;</code></td>
        </tr>

        <tr className="table__row">
          <td><code>className</code></td>
          <td>string</td>
          <td>null</td>
          <td>Adds specified CSS class to resulting <code>&lt;div&gt;</code></td>
        </tr>

        <tr className="table__row">
          <td><code>style</code></td>
          <td>object</td>
          <td>null</td>
          <td>Inline styles to be added to resulting <code>&lt;div&gt;</code></td>
        </tr>

        <tr className="table__row">
          <td><code>height</code></td>
          <td>String</td>
          <td><code>null</code></td>
          <td>
            Sets CSS <code>height</code> property
          </td>
        </tr>

        <tr className="table__row">
          <td><code>width</code></td>
          <td>One of array, number, or string</td>
          <td><code>100%</code></td>
          <td>
            Width of the element. If a number is passed that is between 0 and 1, it is converted to a percentage.
            If the number is larger than 1, it is added as a pixel value.
            If a string is included, it is added "as-is".
            When an array is passed, it is added to the corresponding media query
            (see <a href="#responsive-layouts">responsive layouts</a>).
          </td>
        </tr>

        <tr className="table__row">
          <td><code>cellWidth</code></td>
          <td>One of array, number, or string</td>
          <td><code>null</code></td>
          <td>
            Width of child <code>Flex</code> components. Ideal for nested components.
          </td>
        </tr>

        <tr className="table__row">
          <td><code>wrap</code></td>
          <td>string</td>
          <td><code>wrap</code></td>
          <td>
            Sets CSS <code>flex-wrap</code> property
          </td>
        </tr>

        <tr className="table__row">
          <td><code>justifyContent</code></td>
          <td>string</td>
          <td><code>inherit</code></td>
          <td>
            Sets CSS <code>justify-content</code> property
          </td>
        </tr>

        <tr className="table__row">
          <td><code>alignContent</code></td>
          <td>string</td>
          <td><code>inherit</code></td>
          <td>
            Sets CSS <code>align-content</code> property
          </td>
        </tr>

        <tr className="table__row">
          <td><code>alignItems</code></td>
          <td>string</td>
          <td><code>inherit</code></td>
          <td>
            Sets CSS <code>align-items</code> property
          </td>
        </tr>
      </tbody>
    </table>
  </section>
);