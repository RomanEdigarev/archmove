import React, { FC } from "react";
import style from "./Section1.module.css";
import SectionContainer from "../SectionContainer/SectionContainer";
import Button from "../Button/Button";
import { DataForSection1 } from "../../assets/Types";

const Section1: FC<DataForSection1> = ({
  mainTitle,
  text,
  buttonText,
  imagePath,
}) => {
  const str = mainTitle.split(" ");
  const lastWord = " " + str[str.length - 1];
  mainTitle = str.slice(0, str.length - 1).join(" ");
  return (
    <SectionContainer>
      <div className={style.mainTitle}>
        {mainTitle}
        <span>{lastWord}</span>
      </div>
      <div className={style.content}>
        <div className={style.content__textBlock}>
          <p>{text}</p>
          <Button width={180} height={56} buttonText={buttonText} />
        </div>
        <div className={style.wrapperImage}>
          <img src={imagePath} alt="image" />
        </div>
      </div>
    </SectionContainer>
  );
};

export default Section1;
