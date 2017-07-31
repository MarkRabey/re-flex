import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { direction, flexWidth, flexHeight } from './utils';

const Base = ({ children, className, cellWidth, ...rest }) => (
  <div className={ className } { ...rest }>
    {
      React.Children.map(children, (child) => {
        if (child.type === undefined) {
          return child;
        }
        const childProps = { ...child.props };
        if (cellWidth && !childProps.width) {
          childProps.width = cellWidth;
        }
        return React.cloneElement(child, childProps);
      })
    }
  </div>
);

Base.propTypes = {
  children: PropTypes.node,
  row: PropTypes.bool,
  column: PropTypes.bool,
  className: PropTypes.string,
  height: PropTypes.string,
  style: PropTypes.object,
  width: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.string,
  ]),
  cellWidth: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.string,
  ]),
};

Base.defaultProps = {
  children: null,
  row: false,
  column: false,
  className: '',
  style: {},
  width: null,
  height: null,
  cellWidth: null,
};

const Flex = styled(Base)`
  box-sizing: border-box;
  display: flex;
  flex-shrink: 0;
  flex-basis: auto;
  flex-wrap: ${ props => props.wrap || 'wrap' };
  justify-content: ${ props => props.justifyContent || 'inherit' };
  align-content: ${ props => props.alignContent || 'inherit' };
  align-items: ${ props => props.alignItems || 'inherit' };
  ${ flexWidth },
  ${ flexHeight },
  ${ direction },
`;

Flex.displayName = 'Flex';

export default Flex;
