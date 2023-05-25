'use client';

import styled, { css } from 'styled-components';
import type { containerStyle } from './types';
import * as F from '../../functions/index';
import { getBreakPoints } from '@/components/functions/getBreakPoints';

//@ts-ignore
export const Container = styled('div').attrs<containerStyle>(({ variant }) => ({
  as: variant
}))<containerStyle>`
  padding: ${({ padding }) => padding};
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  bottom: ${({ bottom }) => bottom};
  z-index: ${({ zindex }) => zindex};
  width: ${({ width }) => width};
  min-width: ${({ minwidth }) => minwidth};
  height: ${({ height }) => height};
  min-height: ${({ minheight }) => minheight};
  margin: ${({ margin }) => margin};
  ${({ position }) => (position ? `position: ${position};` : '')}
  ${({ top }) => (top ? `top: ${top};` : '')}
  ${({ left }) => (left ? `left: ${left};` : '')}
  ${({ right }) => (right ? `right: ${right};` : '')}
  ${({ bottom }) => (bottom ? `bottom: ${bottom};` : '')}
  ${({ alignx }) => (alignx ? F.getAlignX(alignx) : '')}
  ${({ aligny }) => (aligny ? F.getAlignY(aligny) : '')}
  ${({ bgcolor, theme }) =>
    bgcolor
      ? theme.colors[bgcolor]
        ? `background-color:${theme.colors[bgcolor]};`
        : `background-color:${bgcolor};`
      : ''}
  ${({ color, theme }) =>
    color
      ? theme.typography.colors[color]
        ? `color:${theme.typography.colors[color]};`
        : `color:${color};`
      : ''}
  ${({ breakpoints }) => breakpoints && getBreakPoints(breakpoints)}

  ${({
    type,
    direction,
    columns,
    columnsminmaxsize,
    rows,
    rowsminmaxsize,
    gap
  }) => {
    switch (type) {
      case 'flex': {
        return css`
          display: flex;
          flex-wrap: wrap;
          flex-direction: ${direction};
        `;
      }
      case 'grid': {
        return css`
          display: grid;
          ${gap ? `gap: ${gap};` : ''}
          ${columns ? F.getColumns(columns, columnsminmaxsize) : ''}
          ${rows ? F.getRows(rows, rowsminmaxsize) : ''}
        `;
      }
    }
  }}
`;
