// import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ElementWrapper from './ElementWrapper';

const Flex = styled(ElementWrapper)`
  display: flex;
  align-items: ${ props => props.alignItems };
  justify-content: ${ props => props.justifyContent };
  ${ props => `
    ${ props.gutter > 0 ? `
      margin-left: -${ props.gutter / 2 }em;
      margin-right: -${ props.gutter / 2 }em;
    ` : null }
  ` }
  wrap: ${ props => (props.wrap ? 'wrap' : 'nowrap') };
`;

Flex.displayName = 'Flex';

Flex.propTypes = {
  alignItems: PropTypes.string,
  cellWidth: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.string,
  ]),
  children: PropTypes.node,
  className: PropTypes.string,
  gutter: PropTypes.number,
  justifyContent: PropTypes.string,
  wrap: PropTypes.bool,
};

Flex.defaultProps = {
  alignItems: 'flex-start',
  cellWidth: null,
  children: null,
  className: null,
  gutter: 0,
  justifyContent: 'flex-start',
  wrap: false,
};

export default Flex;
