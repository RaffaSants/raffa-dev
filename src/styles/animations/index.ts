import { css } from 'styled-components';

export const Rotate = () => {
  return css`
    @keyframes rotate {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  `;
};
