'use client';
import './styles.scss';

import { useState } from 'react';
import { RiCloseFill, RiMenu5Fill } from 'react-icons/ri';
import { Nav } from '../../nav/componente';

export const BtMenu = () => {
  const [menuIsShow, setShowMenu] = useState<boolean | undefined>(undefined);

  return (
    <>
      <button
        className="buttonShowMenu"
        aria-label="show menu"
        onClick={() => setShowMenu(!menuIsShow)}
      >
        {menuIsShow ? (
          <RiCloseFill aria-label="fechar menu" />
        ) : (
          <RiMenu5Fill aria-label="abrir menu" />
        )}
      </button>
      <article
        //@ts-expect-error show
        show={menuIsShow !== undefined ? menuIsShow.toString() : undefined}
        className="Menu"
      >
        <Nav />
      </article>
    </>
  );
};
