/* eslint-disable */
import React from 'react';

export default () => (
  <section className="demo__section">
    <header className="demo__section-header">
      <h2>Properties</h2>
    </header>

    <h3 className="demo__table-header">Flex</h3>

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
          <td><code>alignItems</code></td>
          <td>string</td>
          <td><code>inherit</code></td>
          <td>
            Sets CSS <code>align-items</code> property
          </td>
        </tr>

        {/*
          <tr className="table__row">
            <td><code>cellWidth</code></td>
            <td>One of array, number, or string</td>
            <td><code>null</code></td>
            <td>
              Width of child <code>Flex</code> components. Ideal for nested components.
            </td>
          </tr>
        */}

        <tr className="table__row">
          <td><code>gutter</code></td>
          <td>number</td>
          <td><code>0</code></td>
          <td>
            Sets the gutter of children
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
          <td><code>nowrap</code></td>
          <td>boolean</td>
          <td><code>false</code></td>
          <td>
            Set <code>true</code> to set <code>flex-wrap: nowrap;</code>
          </td>
        </tr>
      </tbody>
    </table>

    <h3 className="demo__table-header">Box</h3>
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
          <td><code>direction</code></td>
          <td>string</td>
          <td><code>row</code></td>
          <td>Sets <code>flex-direction</code> (<code>row</code> or <code>column</code>)</td>
        </tr>

        <tr className="table__row">
          <td><code>width</code></td>
          <td>One of array, number, or string</td>
          <td><code>100%</code></td>
          <td>
            Width of the Box (see <a href="#responsive-layouts">responsive layouts</a>).
          </td>
        </tr>
      </tbody>
    </table>
  </section>
);