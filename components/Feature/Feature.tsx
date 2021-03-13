import React, { FC, ReactComponentElement } from "react";
import style from "./Feature.module.css";
import { DataForFeatureSection } from "../../assets/Types";

const Feature: FC<DataForFeatureSection> = ({
  iconAsComponent,
  titleForInformation,
  text,
}) => {
  return (
    <div className={style.container}>
      <div className={style.icon}>{iconAsComponent}</div>
      <div className={style.information}>
        <h3 className={style.title}>{titleForInformation}</h3>
        <p className={style.text}>{text}</p>
      </div>
    </div>
  );
};

export default Feature;
