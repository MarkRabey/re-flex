import styled from 'styled-components';

const breakpoints = [40, 52, 64];

const formatWidth = (width) => {
  if (typeof width === 'number') {
    return `flex-grow: ${ width };`;
  }
  return `
    flex-grow: 0;
    width: ${ width };
  `;
};

const direction = (props) => {
  if (props.row) {
    return 'flex-direction: row;';
  } else if (props.column) {
    return 'flex-direction: column;';
  }
  return null;
};

const flexWidth = (props) => {
  if (props.width) {
    const widths = Array.isArray(props.width) ? props.width : [props.width];
    return widths.map((width, index) => {
      const css = `
        ${ index === 0 ? formatWidth(width) : '' }
        ${ breakpoints[index] && `
          @media screen and (min-width: ${ breakpoints[index] }em) {
            ${ formatWidth(width) }
          }
        ` }
      `;
      return css;
    });
  }
  return 'flex-grow: 1;';
};

const flexHeight = (props) => {
  if (props.height) {
    return `
      flex-grow: 0;
      flex-shrink: 0;
      height: ${ props.height };
    `;
  }
  return null;
};


const Flex = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-shrink: 0;
  flex-basis: auto;
  flex-wrap: ${ props => props.wrap || 'nowrap' };
  justify-content: ${ props => props.justifyContent || 'inherit' };
  align-content: ${ props => props.alignContent || 'inherit' };
  align-items: ${ props => props.alignItems || 'inherit' };
  ${ flexWidth },
  ${ flexHeight },
  ${ direction },
`;

Flex.displayName = 'Flex';

export default Flex;
