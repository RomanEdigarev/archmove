import React, { FC, useState } from "react";
import style from "./Section4.module.css";
import SectionContainer from "../SectionContainer/SectionContainer";
import { ApostropheIcon } from "../../assets/Icons";
import ArrowButtons from "../ArrowButtons/ArrowButtons";
import { DataForSection4 } from "../../assets/Types";
import { motion } from "framer-motion";

const Section4: FC<DataForSection4> = ({ titleForSection, comments }) => {
  const [currentIndexComment, setCurrentIndexComment] = useState(0);

  const next = () => {
    if (currentIndexComment < comments.length - 1) {
      setCurrentIndexComment(currentIndexComment + 1);
    }
  };

  const prev = () => {
    if (currentIndexComment !== 0) {
      setCurrentIndexComment(currentIndexComment - 1);
    }
  };

  return (
    <SectionContainer>
      <>
        <h3
          className="sectionTitle"
          style={{ maxWidth: 400, marginBottom: 46 }}
        >
          {titleForSection}
        </h3>

        <div className={style.container}>
          <div className={style.apostrophe}>
            <ApostropheIcon size={57} />
          </div>
          <div className={style.wrapper}>
            <motion.div
              className={style.content}
              initial={{
                transform: `translateX(-${currentIndexComment * 100}%)`,
              }}
              transition={{
                type: "spring",
                bounce: 0.15,
                duration: 1.2,
              }}
              animate={{
                transform: `translateX(-${currentIndexComment * 100}%)`,
              }}
            >
              {comments.map((comment) => {
                return (
                  <div className={style.comment}>
                    <p className={style.comment__text}>{comment.commentText}</p>
                    <p className={style.comment__author}>
                      <span className={style.comment__author__name}>
                        {comment.author.name}
                      </span>{" "}
                      — <span>{comment.author.position}</span>
                    </p>
                  </div>
                );
              })}
            </motion.div>
          </div>

          <div className={style.slideButtons}>
            <ArrowButtons next={next} prev={prev} />
          </div>
        </div>
      </>
    </SectionContainer>
  );
};

export default Section4;
