import React, { FC } from "react";
import style from "./ArrowButtons.module.css";

type PropsForArrow = {
  left?: boolean;
  right?: boolean;
  onClick: () => void;
};
const ArrowButton: FC<PropsForArrow> = ({ left, onClick }) => {
  return (
    <div className={style.container} onClick={onClick}>
      {left ? (
        <svg
          width="16"
          height="14"
          viewBox="0 0 16 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16 8V6H4L8 2L7 0L0 7L7 14L8 12L4 8H16Z" fill="#473534" />
        </svg>
      ) : (
        <svg
          width="16"
          height="14"
          viewBox="0 0 16 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.39876e-06 6L1.04907e-06 8L12 8L8 12L9 14L16 7L9 1.57361e-06L8 2L12 6L1.39876e-06 6Z"
            fill="#473534"
          />
        </svg>
      )}
    </div>
  );
};

type PropsForArrowButtons = {
  next: () => void;
  prev: () => void;
};
const ArrowButtons: FC<PropsForArrowButtons> = ({ next, prev }) => {
  return (
    <div className={style.buttons}>
      <ArrowButton left onClick={prev} />
      <ArrowButton right onClick={next} />
    </div>
  );
};

export default ArrowButtons;
