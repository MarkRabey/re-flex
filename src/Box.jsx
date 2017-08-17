import styled from 'styled-components';
import ElementWrapper from './ElementWrapper';
import { flexWidth } from './utils';

const Box = styled(ElementWrapper)`
  ${ flexWidth }
  ${ props => `
    flex-direction: ${ props.direction };
    ${ props.gutter > 0 ? `
      padding-left: ${ props.gutter / 2 }em;
      padding-right: ${ props.gutter / 2 }em;
    ` : '' }
  ` }
`;

Box.defaultProps = {
  direction: 'row',
  width: 1,
};

Box.displayName = 'Box';

export default Box;
