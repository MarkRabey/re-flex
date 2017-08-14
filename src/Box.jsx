import styled from 'styled-components';
import ElementWrapper from './ElementWrapper';

const Box = styled(ElementWrapper)`
  ${ props => `
    ${ /auto/.test(props.width) ?
      'flex: 1 1 auto; min-width: 0; min-height: 0;' :
      `width: ${ typeof props.width === 'number' ? `${ (props.width * 100) }%` : props.width };
    ` }

    ${ props.gutter > 0 ? `
      padding-left: ${ props.gutter / 2 }em;
      padding-right: ${ props.gutter / 2 }em;
    ` : '' }
  ` }
`;

Box.defaultProps = {
  width: 1,
};

Box.displayName = 'Box';

export default Box;
