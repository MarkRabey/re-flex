import React from 'react';
import PropTypes from 'prop-types';

const ElementWrapper = ({ element, children, ...props }) => {
  const Element = element;
  return (
    <Element { ...props }>
      {
        React.Children.map(children, child => (
          typeof child === 'object' ?
            React.cloneElement(child, {
              gutter: props.gutter,
            }) : child
        ))
      }
    </Element>
  );
};

ElementWrapper.propTypes = {
  children: PropTypes.node,
  element: PropTypes.oneOf([
    'article',
    'aside',
    'div',
    'figure',
    'footer',
    'header',
    'main',
    'nav',
    'section',
  ]),
  gutter: PropTypes.func,
};

ElementWrapper.defaultProps = {
  children: null,
  element: 'div',
  gutter: 0,
};

ElementWrapper.contextTypes = { gutter: PropTypes.func };

export default ElementWrapper;
