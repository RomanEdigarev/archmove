import React, { FC } from "react";
import { FooterData } from "../../assets/Types";
import style from "./Footer.module.css";

const Footer: FC<FooterData> = ({ logoAsComponent, footerLinksText }) => {
  return (
    <div className={style.container}>
      <div className={style.linksContainer}>
        {footerLinksText.map((link) => (
          <a className={style.link} href="#">
            {link}
          </a>
        ))}
      </div>
      <div className={style.logo}>{logoAsComponent}</div>
    </div>
  );
};

export default Footer;
