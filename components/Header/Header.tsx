import React, { FC, ReactComponentElement } from "react";
import style from "./Header.module.css";
import { SearchIcon } from "../../assets/Icons";
import Button from "../Button/Button";

type Props = {
  menuItemsText: string[];
  logoAsComponent: ReactComponentElement<any>;
};
const Header: FC<Props> = ({ menuItemsText, logoAsComponent }) => {
  return (
    <div className={style.container}>
      <div className={style.left}>
        <div className={style.logo}>{logoAsComponent}</div>
        <div className={style.menu}>
          {menuItemsText.map((menuItemText) => (
            <div className={style.menu__item}>{menuItemText}</div>
          ))}
        </div>
      </div>

      <div className={style.right}>
        <div className={style.right__icon}>
          <SearchIcon size={18} />
        </div>
        <span>Sign In</span>
        <Button width={100} height={48} buttonText={"Sign Up"} />
      </div>
    </div>
  );
};

export default Header;
