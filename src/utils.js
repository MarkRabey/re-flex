const breakpoints = [40, 52, 64, 76];

const formatWidth = (width) => {
  let formatted = width;
  if (typeof formatted === 'number') {
    formatted = formatted > 0 && formatted <= 1 ? `${ formatted * 100 }%` : `${ formatted }px`;
  }
  return `
    flex-basis: ${ formatted };
  `;
};

export const direction = (props) => {
  if (props.row) {
    return 'flex-direction: row;';
  } else if (props.column) {
    return 'flex-direction: column;';
  }
  return null;
};

export const flexWidth = (props) => {
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
  // return 'flex-grow: 1; width: 100%;';
  return 'flex-basis: auto;';
};

export const flexHeight = (props) => {
  if (props.height) {
    return `
      flex-grow: 0;
      flex-shrink: 0;
      height: ${ props.height };
    `;
  }
  return null;
};

// export const breakpointStyles = (props) => {

// };

export default {
  breakpoints, direction, flexWidth, flexHeight,
};
