import React from "react";
import "./Card.css";
import { LuCross, LuMinus } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";

const Card = () => {
  const [open, setOpen] = useState(false);
  function handleOpen() {
    setOpen(!open);
  }

  return (
    <div className="portfolio-content">
      <div className="hiddenText-container">
        <div className="card">
          <img
            className="card-img"
            src="/images/photo-1490481651871-ab68de25d43d.avif"
            alt=""
          />
          <div className="layer">
            <h5>E-COMERCE</h5>
            {!open && (
              <LuCross
                className="card-icon-cross"
                onClick={handleOpen}
              ></LuCross>
            )}
          </div>
        </div>

        <div className={open ? "active" : "card-info"}>
          <p className="card-info-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            veritatis magni maiores quos voluptas, numquam repudiandae amet
            consectetur explicabo sequi!
          </p>
          <div className="card-icons-wrapper">
            <FaGithub className="card-icon-github"></FaGithub>
            <img
              src="/images/live-broadcast.png"
              className="card-icon-live"
              alt=""
            />
          </div>
          <LuMinus className="card-icon-minus" onClick={handleOpen}></LuMinus>
        </div>
      </div>
    </div>
  );
};

export default Card;
