import React, { FC } from "react";
import style from "./SectionContainer.module.css";

const SectionContainer: FC = ({ children }) => {
  return <div className={style.container}>{children}</div>;
};

export default SectionContainer;
