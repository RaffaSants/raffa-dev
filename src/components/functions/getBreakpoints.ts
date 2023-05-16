import { css } from 'styled-components';
import { breakPoint } from '@/types/layouts';

export const getBreakPoints = (breakpoints: Array<breakPoint>) => {
  breakpoints.map(({ sizes, comands }) => {
    switch (sizes) {
      case sizes.maxWidth && sizes.minWidth: {
        return css`
          @media screen and (max-width: ${sizes.maxWidth}) and (min-width: ${sizes.minWidth}) {
            ${comands}
          }
        `;
      }
      case sizes.maxWidth: {
        return css`
          @media screen and (max-width: ${sizes.maxWidth}) {
            ${comands}
          }
        `;
      }
      case sizes.minWidth: {
        return css`
          @media screen and (min-width: ${sizes.minWidth}) {
            ${comands}
          }
        `;
      }
    }
  });
};
