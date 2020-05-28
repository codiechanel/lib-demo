import { createElement } from 'react';
import styled from 'styled-components';

const StyledButton = styled.div `
  background-color: red;
`;
const Cool = (props) => {
    return createElement(StyledButton, null, "nice");
};

export { Cool };
//# sourceMappingURL=index.js.map
