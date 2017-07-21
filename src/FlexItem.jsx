import PropTypes from 'prop-types';
import styled from 'styled-components';
import flexBasis from './utils';

const FlexItem = styled.div`
  ${ props => `
    flex-basis: ${ flexBasis(props.width ? props.width : props.cellWidth, props.gutter) };
    display: flex;
    align-items: ${ props.verticalAlign };
    justify-content: ${ props.horizontalAlign };
    order: ${ props.order };
    box-sizing: border-box;
  ` }
`;

FlexItem.propTypes = {
  width: PropTypes.string,
  horizontalAlign: PropTypes.oneOf(['left', 'center', 'right']),
  verticalAlign: PropTypes.oneOf(['top', 'middle', 'bottom']),
};

FlexItem.defaultProps = {
  width: null,
  horizontalAlign: 'left',
  verticalAlign: 'middle',
  order: 'initial',
};

export default FlexItem;
