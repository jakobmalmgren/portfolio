import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import "./ExpandingProjectCard.css";
import { CiMedicalCross } from "react-icons/ci";
import { TiMinusOutline } from "react-icons/ti";
import { CiWifiOn } from "react-icons/ci";
import { VscGithubAlt } from "react-icons/vsc";

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
        style={{ borderRadius: "35px" }}
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
              <div className="expandingProjectCard-icon">
                <CiWifiOn></CiWifiOn>
              </div>
              <div className="expandingProjectCard-icon">
                <VscGithubAlt></VscGithubAlt>
              </div>
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
