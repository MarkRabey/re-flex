import PropTypes from 'prop-types';

const responsivePropType = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.array,
]);

const propTypes = {
  width: responsivePropType,
  fontSize: responsivePropType,
  space: responsivePropType,
  children: PropTypes.node,
  className: PropTypes.string,
};

export { propTypes };

export default { propTypes };
