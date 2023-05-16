'use client';

import styled, { css } from 'styled-components';
import type { ContentStyle } from './types/types';
import * as f from '../../functions/index';
import { Opacity } from '@/components/animations';

//@ts-ignore
export const Content = styled('div').attrs<ContentStyle>(({ variant }) => ({
  as: variant
}))<ContentStyle>`
    display: flex;
    flex-direction: ${({direction})=>direction};
    ${({flexwrap})=> flexwrap && `flex-wrap: ${flexwrap};`}
    ${({gap})=> gap && `gap: ${gap};`}
    ${({position})=> position && `position:${position};`}
    ${({top})=> top && `top:${top};`}
    ${({bottom})=> bottom && `bottom: ${bottom};`}
    ${({right})=> right && `rigth: ${right};`}
    ${({left})=> left && `left:${left};`}
    ${({border})=> border && `border: ${border};`}
    ${({borderradius})=> borderradius && `border-radius: ${borderradius};`}
    ${({shadow})=> shadow && `box-shadow: ${shadow};`}
    ${({index})=> index && `z-index:${index};`}
    ${({alignx})=> alignx && f.getAlignX(alignx)}
    ${({aligny})=> aligny && f.getAlignY(aligny)}
    ${({height})=> height && `height: ${height};`}
    ${({maxheight})=> maxheight && `max-height: ${maxheight};`}
    ${({minheight})=> minheight && `min-height: ${minheight};`}
    ${({width})=> width && `width: ${width};`}
    ${({maxwidth})=> maxwidth && `max-width: ${maxwidth};`}
    ${({minwidth})=> minwidth && `min-width: ${minwidth};`}
    ${({padding})=> padding && `padding: ${padding};`}
    ${({opacity})=>opacity && `opacity: ${opacity};`}
    ${({margin})=> margin && `margin: ${margin};`}
    ${({bgcolor, theme})=> bgcolor && theme.colors[bgcolor]
      ? `background-color:${theme.colors[bgcolor]};`
      : `background-color:${bgcolor};`}
    ${({color, theme})=> color && theme.typography.colors[color]
      ? `color: ${theme.typography.colors[color]};`
      : `color: ${color};`}
    ${({target})=> target && f.getTarget(target)}
    ${({notarget})=> notarget && f.getNotTarget(notarget)}
    ${({animation})=> animation && css`animation: ${Opacity} 0.5s ease`}
`;
