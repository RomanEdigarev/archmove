import React, { CSSProperties, FC } from "react";
import style from "./Button.module.css";

type Props = {
  buttonText: string;
  width: string | number;
  height: string | number;
  styles?: CSSProperties;
};
const Button: FC<Props> = ({ buttonText, width, height, styles }) => {
  return (
    <div className={style.container} style={{ width, height, ...styles }}>
      <span>{buttonText}</span>
    </div>
  );
};

export default Button;
