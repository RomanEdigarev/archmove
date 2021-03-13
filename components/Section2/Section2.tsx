import React, { FC } from "react";
import style from "./Section2.module.css";
import SectionContainer from "../SectionContainer/SectionContainer";
import Slider from "../Slider/Slider";
import { DataForSection2 } from "../../assets/Types";

const Section2: FC<DataForSection2> = ({ titleForSection, imagesPath }) => {
  return (
    <SectionContainer>
      <div className={style.content}>
        <div className="sectionTitle" style={{ maxWidth: 535 }}>
          {titleForSection}
        </div>
        <Slider imagesPath={imagesPath} />
      </div>
    </SectionContainer>
  );
};

export default Section2;
