import React from "react";
import Link from "../Reuseable/Link";
import TextSplit from "../Reuseable/TextSplit";

const SingleFeatureOne = ({ feature = {} }) => {
  const { title, href, icon } = feature;

  return (
    <li className="welcome-one__feature-single animated fadeInUp" >
      <div className="welcome-one__feature-content">
        <h3 className="welcome-one__feature-title" style={{color:"white"}}>

            <TextSplit text={title} />
          
        </h3>
        <div className="welcome-one__feature-arrow">
          
            <span className="icon-right-arrow"></span>
          
        </div>
      </div>
      <div className="welcome-one__feature-icon">
        <span className={icon}></span>
      </div>
    </li>
  );
};

export default SingleFeatureOne;
