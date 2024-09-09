// CustomButton.js
import { green } from '@mui/material/colors';
import styled from 'styled-components';

// Define the custom styled button
const Button = styled.button`
  background-color: ${props => (props.color === 'gray' ? " #008000" : "#808080")}; /* Green */
  border: none;
  color: white;
  padding: 15px 52px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 8px;

  /* Custom hover effect */
  &:hover {
    background-color: #45a049;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  }

  /* Custom button size */
  ${props => props.large && `
    padding: 20px 40px;
    font-size: 20px;
  `}
`;

export default Button;
