'use client';
import './styles.scss';

import { useState } from 'react';
import { RiCloseFill, RiMenu5Fill } from 'react-icons/ri';
import { Nav } from '../../nav/componente';

export const BtMenu = () => {
  const [menuIsShow, setShowMenu] = useState<boolean>(false);

  return (
    <>
      <button
        className="buttonShowMenu"
        aria-label="show menu"
        onClick={() => setShowMenu(!menuIsShow)}
      >
        {menuIsShow ? <RiCloseFill /> : <RiMenu5Fill />}
      </button>
      <article
        //@ts-expect-error show
        show={menuIsShow.toString()}
        className="Menu"
      >
        <Nav />
      </article>
    </>
  );
};
