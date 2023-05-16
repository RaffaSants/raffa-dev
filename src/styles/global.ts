'use client';

import { createGlobalStyle } from 'styled-components';
import { Responsiveness } from '@/app/style/responsiveness';
import { getBreakPoints } from '@/components/functions';

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html{
    font-size: 62.5%;
  }
  body{
    display: flex;
    flex-direction: column;
    transition: ${({ theme }) => theme.transitions};
    background-color: ${({ theme }) => theme.colors.tertiary};
  }
  body::-webkit-scrollbar {
    width: 5px;
  }

  body::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.secundary};
  }

  body::-webkit-scrollbar-thumb {
    background-color: #aa6938;
    border-radius: 20px;
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
  .jIAhHv.jIAhHv#onix-formaturas:target .cIfMMo#experience-ônix::after {
      content: ' ';
      position:absolute;
      top: 10%;
      width: 2px;
      height: 80%;
      background-color: rgb(170, 105, 56);
    }
  @media screen and (max-width: 768px) {
    html{
      font-size:50%;
    }
    .jIAhHv.jIAhHv#onix-formaturas:target::after {
    content: ' ';
    position: absolute;
    top: -34px;
    left: 123px;
    height: 30px;
    width: 2px;
    background-color: rgb(170, 105, 56);
    }
    .iypFnY.iypFnY#web-developer:target::after {
    content: ' ';
    position: absolute;
    top: -42px;
    height: 30px;
    width: 2px;
    background-color: rgb(170, 105, 56);
    left: 263px;
  }
}
  ${getBreakPoints(Responsiveness)}

`;

export default GlobalStyle;
