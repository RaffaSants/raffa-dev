'use client';

import { createGlobalStyle } from 'styled-components';

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
  @media screen and (max-width: 768px) {
    html{
      font-size:50%;
    }
  }
`;

export default GlobalStyle;
