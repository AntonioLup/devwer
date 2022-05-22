import css from "styled-jsx/css";
import { color, fonts, breakPoint } from "../styles/theme";
import { addOpacity } from "./utils";
const bacgroundColor = addOpacity(color.secondary, 0.7);

export const globalStyle = css.global`
  html {
    font-size: 62.5%;
  }
  html,
  body {
    padding: 0;
    margin: 0;
    background-image: radial-gradient(${bacgroundColor} 1px, transparent 1px),
      radial-gradient(${bacgroundColor} 1px, transparent 1px);
    background-position: 0 0, 25px 25px;
    background-size: 50px 50px;
    color: ${color.secondary};
    font-family: ${fonts.base};
  }
  body {
    font-size: 1.6rem;
  }
  h1 {
    font-weight: 600;
    font-size: 4rem;
    margin: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;
export default css`
div {
    display: grid;
    height: 100vh;
    place-items: center;
  }
  main {
    background-color: ${color.primary};
    border-radius:10px;
    height: 100%;
    box-shadow: 0 5px 15px; rgba(0,0,0,0.3);
    width:100%;
  }
  @media (min-width: ${breakPoint.mobile}){
    main{
      width: ${breakPoint.mobile};
      height: 90vh;
    }
  }
`;
