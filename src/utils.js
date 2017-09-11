const formatWidth = (width, gutter) => {
  if (/auto/.test(width)) {
    return 'flex: 1 1 auto; min-width: 0; min-height: 0;';
  }

  const formattedWidth = typeof width === 'number' ? `${ (width * 100) }%` : width;

  if (gutter) {
    return `width: calc(${ formattedWidth } - ${ gutter }em);`;
  }

  return `width: ${ formattedWidth };`;
};

export const boxSizing = props => `box-sizing: ${ props.gutter ? 'inherit' : 'border-box' };`;

export const flexWidth = (props) => {
  if (Array.isArray(props.width)) {
    return props.width.map(entry => `
      ${ Array.isArray(entry) ? `
        @media screen and (min-width: ${ entry[0] }px) {
          ${ formatWidth(entry[1], props.gutter) }
        }
      ` : formatWidth(entry, props.gutter) }
    `);
  }
  return formatWidth(props.width, props.gutter);
};

export default {
  flexWidth,
};
