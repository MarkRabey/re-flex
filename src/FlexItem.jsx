import styled from 'styled-components';
import { space, width, responsiveStyle } from 'styled-system';

export const flex = responsiveStyle('flex');
export const wrap = responsiveStyle('flex-wrap', 'wrap', 'wrap');
export const order = responsiveStyle('order');

const FlexItem = styled.div`
  box-sizing: border-box;
  ${ width },
  ${ space },
  ${ flex },
  ${ wrap },
  ${ order },
  ${ props => `
    ${ console.log(props) }
  ` }
`;

FlexItem.displayName = 'FlexItem';

export default FlexItem;
