import React from 'react';
import AddNote from '../../svg/AddNote';
import Plus from '../../svg/plus';
import Trash from '../../svg/Trash';
import BtnCustom from '../btnCustom/BtnCustom';
import SearchBox from '../searchBox/SearchBox';
import './header.scss';
const Header = () => {
  return (
    <header className="page-header">
      <div className="page-header__buttons-block">
        <BtnCustom>
          <Plus />
        </BtnCustom>
        <BtnCustom>
          <Trash />
        </BtnCustom>
        <BtnCustom>
          <AddNote />
        </BtnCustom>
      </div>
      <SearchBox />
    </header>
  );
};

export default Header;
