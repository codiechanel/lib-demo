'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var styled = _interopDefault(require('styled-components'));

const StyledButton = styled.div `
  background-color: red;
`;
const Cool = (props) => {
    return React.createElement(StyledButton, null, "nice");
};

exports.Cool = Cool;
//# sourceMappingURL=index.js.map
