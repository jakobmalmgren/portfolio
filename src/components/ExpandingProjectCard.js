import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import "./ExpandingProjectCard.css";
import { CiMedicalCross } from "react-icons/ci";
import { TiMinusOutline } from "react-icons/ti";
import { VscGithubAlt } from "react-icons/vsc";
import { PiPlayThin } from "react-icons/pi";

const ExpandingProjectCard = (props) => {
  const [selected, setSelected] = useState(false);

  const handleExpandingCard = () => {
    setSelected(!selected);
  };
  return (
    <div>
      <motion.div
        className="expandingProjectCard-cardContainer"
        layout
        style={{ borderRadius: "5px" }}
        transition={{ layout: { duration: 1, type: "spring" } }}
      >
        <motion.div
          layout="position"
          className="expandingProjectCard-btn"
          onClick={() => {
            handleExpandingCard();
          }}
        >
          {selected === true ? (
            <TiMinusOutline className="minusIcon"></TiMinusOutline>
          ) : (
            <CiMedicalCross className="plusIcon"></CiMedicalCross>
          )}
        </motion.div>
        {selected === true ? (
          <motion.div
            className="expandingProjectCard-expand"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <p className="expandingProjectCard-paragraph">{props.info}</p>
            <div className="expandingProjectCard-iconWrapper">
              <a href={props.url} target="blank">
                <div className="expandingProjectCard-icon">
                  <VscGithubAlt></VscGithubAlt>
                </div>
              </a>
              <a href={props.live} target="blank">
                <div className="expandingProjectCard-icon">
                  <PiPlayThin></PiPlayThin>
                </div>
              </a>
            </div>
          </motion.div>
        ) : (
          ""
        )}
      </motion.div>
    </div>
  );
};

export default ExpandingProjectCard;
