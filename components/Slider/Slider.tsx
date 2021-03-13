import React, { FC, useState } from "react";
import style from "./Slider.module.css";
import { motion } from "framer-motion";
import ArrowButtons from "../ArrowButtons/ArrowButtons";

type Props = {
  imagesPath: string[];
};
const Slider: FC<Props> = ({ imagesPath }) => {
  const [offsetXForImagesSlide, setOffsetXForImagesSlide] = useState(0);
  const [currentImagesSlide, setCurrentImagesSlide] = useState(1);

  const arrayImagesPathsForOneSlide = [];
  for (let i = 0; i < imagesPath.length; i += 3) {
    arrayImagesPathsForOneSlide.push(imagesPath.slice(i, i + 3));
  }

  const next = () => {
    if (currentImagesSlide < arrayImagesPathsForOneSlide.length) {
      setOffsetXForImagesSlide(offsetXForImagesSlide - 100);
      setCurrentImagesSlide(currentImagesSlide + 1);
    }
  };

  const prev = () => {
    if (currentImagesSlide !== 1) {
      setOffsetXForImagesSlide(offsetXForImagesSlide + 100);
      setCurrentImagesSlide(currentImagesSlide - 1);
    }
  };

  return (
    <div className={style.container}>
      <div className={style.buttons}>
        <ArrowButtons next={next} prev={prev} />
      </div>
      <motion.div
        className={style.images}
        initial={{ transform: `translateX(${offsetXForImagesSlide}%)` }}
        animate={{ transform: `translateX(${offsetXForImagesSlide}%)` }}
        transition={{ duration: 1.2, type: "spring", bounce: 0.2 }}
      >
        {arrayImagesPathsForOneSlide.map((imagesPath) => (
          <div className={style.images__slide}>
            {imagesPath.map((image) => (
              <img src={image} alt="" />
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Slider;
