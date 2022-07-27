
import styled from "styled-components";

const Button = styled.button`

border-radius: 5px;
cursor: pointer;
font-weight: 600;
border: none;
display: flex;
align-items: center;
justify-content: center;
font-size: 12px;
width: max-content;
text-transform: ${props => (props.textNormal ? "initial" : "uppercase")};
letter-spacing: 1px;

&:focus {
  outline: none;
}
`;

export default Button;