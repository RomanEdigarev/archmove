import React, { FC } from "react";
import SectionContainer from "../SectionContainer/SectionContainer";
import style from "./Section5.module.css";
import { DataForSection5 } from "../../assets/Types";
import { motion, Transition, Variants } from "framer-motion";
import Button from "../Button/Button";

const Section5: FC<DataForSection5> = ({
  titleForSection,
  buttonText,
  imagePath,
}) => {
  const variants: Variants = {
    hiddenCloud: {
      opacity: 0,
    },
    showCloud: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  const transitionForCloud: Transition = {
    duration: 10,
    repeat: Infinity,
    repeatType: "reverse",
  };

  return (
    <SectionContainer>
      <div className={style.container}>
        <div className={style.imageWrapper}>
          <img src={imagePath} alt="" />
          <motion.div
            variants={variants}
            initial={"hiddenCloud"}
            animate={"showCloud"}
          >
            <motion.img
              className={style.cloud1}
              src={"/images/cloud1.png"}
              alt=""
              animate={{
                transform: "translateX(-50%)",
              }}
              transition={transitionForCloud}
            />
            <motion.img
              className={style.cloud2}
              src={"/images/cloud2.png"}
              alt=""
              animate={{
                transform: "translateX(50%)",
              }}
              transition={{ ...transitionForCloud, delay: 1 }}
            />
          </motion.div>
        </div>
        <div className={style.contentWrapper}>
          <h3 className={"sectionTitle"} style={{ marginBottom: 65 }}>
            {titleForSection}
          </h3>
          <Button
            buttonText={buttonText}
            width={204}
            height={56}
            styles={{ textTransform: "uppercase" }}
          />
        </div>
      </div>
    </SectionContainer>
  );
};

export default Section5;
