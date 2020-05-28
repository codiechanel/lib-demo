import { createElement } from 'react';
import styled from 'styled-components';

const StyledButton = styled.div `
  background-color: red;
`;
const Hello = (props) => {
    return createElement(StyledButton, null, "nice");
};

export { Hello };
//# sourceMappingURL=index.js.map
