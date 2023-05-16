'use client';

import { usePathname } from 'next/navigation';
import { useOffCanvas } from '@/hooks/offCanvas';

import * as S from './style';
import type { navProps, item } from './types';

const Item = ({ id, icon, path, target, title, style, linkstyle }: item) => {
  const router = usePathname();
  router != path ? (linkstyle.selected = undefined) : '';
  return (
    <S.NavIten id={id} isselect={router == path ? 'true' : 'false'} {...style}>
      {path ? (
        <S.NavLink
          id={`a.${id}`}
          href={path}
          target={target}
          color={
            linkstyle.selected?.color
              ? linkstyle.selected?.color
              : linkstyle.color
          }
          selected={linkstyle.selected}
          {...linkstyle}
        >
          {icon && (
            <S.NavIcon animation={icon.animation} hover={icon.hover}>
              {icon.icon}
            </S.NavIcon>
          )}
          {title}
        </S.NavLink>
      ) : (
        <>
          {icon && <S.NavIcon>{icon.icon}</S.NavIcon>}
          {title}
        </>
      )}
    </S.NavIten>
  );
};

export const Nav = ({
  direction,
  navgations,
  isOffCanvas,
  ...rest
}: navProps) => {
  const { toggleShow } = useOffCanvas();
  return (
    <S.Nav direction={direction} {...rest}>
      {navgations.map((navigation) => {
        return (
          <S.NavWrap
            key={navigation.id}
            direction={navigation.direction ? navigation.direction : direction}
            {...navigation}
          >
            {navigation.itens.map(({ id, linkstyle, ...rest }) => {
              isOffCanvas && (linkstyle.onClick = toggleShow);
              return <Item key={id} id={id} linkstyle={linkstyle} {...rest} />;
            })}
          </S.NavWrap>
        );
      })}
    </S.Nav>
  );
};
