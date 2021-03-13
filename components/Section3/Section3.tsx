import React, { FC } from "react";
import style from "./Section3.module.css";
import Feature from "../Feature/Feature";
import SectionContainer from "../SectionContainer/SectionContainer";
import { DataForFeatureSection, DataForSection3 } from "../../assets/Types";
import Button from "../Button/Button";

const Section3: FC<DataForSection3> = ({
  titleForSection,
  imagePath,
  dataForFeaturesSection,
}) => {
  return (
    <SectionContainer>
      <div className={style.content}>
        <div
          className="sectionTitle"
          style={{ maxWidth: 459, marginBottom: 40 }}
        >
          {titleForSection}
        </div>
        <div className={style.information}>
          <div className={style.wrapper}>
            <img src={imagePath} alt="" />
          </div>
          <div className={style.features}>
            {dataForFeaturesSection.map((dataForOneFeature) => (
              <Feature {...dataForOneFeature} />
            ))}
            <Button width={204} height={56} buttonText={"FREE CONSULTATION"} />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Section3;
