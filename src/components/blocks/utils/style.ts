'use client';

import styled, { css } from 'styled-components';
import { utilsStyle } from './types';
import * as F from '@/components/functions';
import { getBreakPoints } from '@/components/functions';

//@ts-ignore
export const BlocksUtils = styled('div').attrs<utilsStyle>(({ variant }) => ({
  as: variant
}))<utilsStyle>`
  position: ${({ position }) => position};
  ${({ top }) => top && `top: ${top};`}
  ${({ left }) => left && `left: ${left};`}
  ${({ right }) => right && `right: ${right};`}
  ${({ bottom }) => bottom && `bottom: ${bottom};`}
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  height: ${({ height }) => height};
  max-height: ${({ maxheight }) => maxheight};
  min-height: ${({ minheight }) => minheight};
  width: ${({ width }) => width};
  max-width: ${({ maxwidth }) => maxwidth};
  min-width: ${({ minwidth }) => minwidth};
  border-radius: ${({ borderradius }) => borderradius};
  ${({ index }) => (index ? `z-index: ${index}` : '')}
  ${({ transform }) => transform && `transform:${transform};`}
  ${({ bgcolor, theme }) =>
    bgcolor != undefined
      ? theme.colors[bgcolor]
        ? `background-color:${theme.colors[bgcolor]};`
        : `background-color:${bgcolor};`
      : ''}
    ${({ color, theme }) =>
    color != undefined
      ? theme.typography.colors[color]
        ? `color:${theme.typography.colors[color]};`
        : `color:${color};`
      : ''}
    ${({ breakpoints }) => breakpoints && getBreakPoints(breakpoints)}
    ${({
    type,
    direction,
    autowrap,
    alignx,
    aligny,
    columns,
    minmaxcolumns,
    gap,
    rows
  }) => {
    switch (type) {
      case 'flex': {
        return css`
          display: flex;
          flex-direction: ${direction};
          ${aligny ? F.getAlignY(aligny) : ''}
          ${alignx ? F.getAlignX(alignx) : ''}
          ${autowrap ? 'flex-wrap: wrap;' : ''}
        `;
      }
      case 'grid': {
        return css`
          display: grid;
          ${columns ? F.getColumns(columns, minmaxcolumns) : ''}
          ${rows ? F.getRows(rows) : ''}
          ${gap ? `gap: ${gap}` : ''}
        `;
      }
    }
  }};

  figcaption {
    margin-top: 1rem;
    text-align: center;
  }
`;
