'use client';

import Link from 'next/link';
import styled, { keyframes, css } from 'styled-components';
import type * as T from './types';
import * as f from '../../functions/index';

const itemanimation = (from: string, to: string) => {
  return keyframes`
    from{
      ${from}
    }
    to{
      ${to}
    }`;
};

const getMedia = (medias: T.medias) => {
  return medias.map(({ sizes, comands }) => {
    if (sizes.maxWidth && sizes.minWidth) {
      return css`
        @media screen and (max-width: ${sizes.maxWidth}) and (min-width: ${sizes.minWidth}) {
          ${comands}
        }
      `;
    } else if (sizes.maxWidth) {
      return css`
        @media screen and (max-width: ${sizes.maxWidth}) {
          ${comands}
        }
      `;
    } else if (sizes.minWidth) {
      return css`
        @media screen and (min-width: ${sizes.minWidth}) {
          ${comands}
        }
      `;
    }
  });
};

export const NavIcon = styled.div<T.IconStyle>`
  display: flex;
  width: fit-content;
  height: fit-content;
  ${({ hover }) => hover && f.getHover(hover)}
`;

export const IconToggle = styled.div`
  width: fit-content;
  height: fit-content;
`;

export const NavLink = styled(Link)<T.LinkStyle>`
  position: relative;
  display: flex;
  align-items: center;
  line-height: 0.7;
  text-decoration: none;
  font-weight: 300;
  font-size: ${({ fontSize, theme }) => theme.typography.sizes[fontSize]}rem;
  ${({height})=> height && `height: ${height};`}
  ${({width})=> width && `width: ${width};`}
  ${({align})=> align && f.getAlignX(align)}
  ${({ color, theme }) =>
    color ? theme.typography.colors[color]
      ? `color:${theme.typography.colors[color]};`
      : `color:${color};`:''}
  ${({selected})=> selected && selected.after && css` &&::after{${selected.after}}`}
  ${({ hover }) =>
    hover &&
    hover.after &&
    css`
      &&::after {
        content: ' ';
        height: 2px;
        width: 100%;
        background-color: black;
      }
    `}
`;

export const NavIten = styled.li<T.LiStyle>`
  position: relative;
  cursor: pointer;
  list-style: none;
  display: flex;
  ${({height})=>height && `height: ${height};`}
  ${({maxheight})=>maxheight && `max-height: ${maxheight};`}
  ${({minheight})=>minheight && `min-height: ${minheight};`}
  ${({width})=>width && `width: ${width};`}
  ${({maxwidth})=>maxwidth && `max-width: ${maxwidth};`}
  ${({minwidth})=>minwidth && `min-width: ${minwidth};`}
  ${({padding})=> padding && `padding: ${padding};`}
  ${({border})=>border && `border: ${border};`}
  ${({borderleft})=>borderleft && `border-left: ${borderleft};`}
  ${({bordertop})=>bordertop && `border-top: ${bordertop};`}
  ${({borderright})=>borderright && `border-right: ${borderright};`}
  ${({borderbottom})=>borderbottom && `border-bottom: ${borderbottom};`}
  ${({borderradius})=>borderradius && `border-radius: ${borderradius};`}
  ${({alignx})=>alignx && f.getAlignX(alignx)}
  ${({aligny})=>aligny && f.getAlignY(aligny)}
  ${({ color, theme }) =>
    color ? theme.typography.colors[color]
      ? `color:${theme.typography.colors[color]};`
      : `color:${color};`:''}
  ${({ theme, bgcolor }) =>
    bgcolor && `background-color: ${theme.colors[bgcolor]};`};
  ${({ hover }) => hover && f.getHover(hover)}
  ${({ hover, isselect }) =>
    hover?.after && isselect === 'true'
      ? css`
          &&::after {
            width: 100%;
          }
        `
      : ''}
  ${({before})=>before && `&&::before{ ${before} }`}
  ${({after})=>after && `&&::after{ ${after} }`}

`;

export const NavWrap = styled.ul<T.UlStyle>`
  display: flex;
  align-items: center;
  flex-direction: ${({ direction }) => direction};
  ${({border})=> border && `border: ${border};`}
  ${({border})=> border && `border: ${border};`}
  ${({borderradius})=>borderradius && `border-radius:${borderradius};`}
  ${({ width }) => width ? `width:${width};` : 'width: fit-content;'}
  ${({ height }) => height ? `height:${height};` : 'height: fit-content;'}
  ${({ padding }) => padding && `padding: ${padding};`}
  ${({gap})=> gap && `gap: ${gap} ;`}
  ${({ theme, bgcolor }) =>
    bgcolor && `background-color: ${theme.colors[bgcolor]};`};
  ${({ align }) => (align && f.getAlignX(align))}
  ${({ mediascreen }) => (mediascreen ? getMedia(mediascreen) : ``)}
`;

export const Nav = styled.nav<T.navStyle>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  min-width: ${({ minwidth }) => minwidth};
  ${({ aligny }) => aligny && f.getAlignY(aligny)}
  ${({ alignx }) => alignx && f.getAlignX(alignx)}
  ${({ bgcolor, theme }) =>
    bgcolor
      ? theme.colors[bgcolor]
        ? `background-color:${theme.colors[bgcolor]};`
        : `background-color:${bgcolor};`
      : ''}
  ${({ mediascreen }) => (mediascreen ? getMedia(mediascreen) : ``)}
`;
