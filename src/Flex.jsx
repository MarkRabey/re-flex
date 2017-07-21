import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Flex = props => (
  <div className={ props.className }>
    { React.Children.map(props.children, child => (
      React.cloneElement(child, {
        cellWidth: props.cellWidth,
        gutter: props.gutter,
        ...child.props,
      })
    ))}
  </div>
);

Flex.propTypes = {
  children: PropTypes.node,
  gutter: PropTypes.string,
  className: PropTypes.string,
};

Flex.defaultProps = {
  cellWidth: '1/3',
  children: '<div />',
  gutter: '16px',
  className: '',
};


const StyledFlex = styled(Flex)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  min-width: 100%;
`;


export default StyledFlex;
