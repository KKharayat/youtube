import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  getVideosByCategory,
  getPopularVideos,
} from "../../redux/actions/videosAction";

import "./_categoriesBar.scss";

const keywords = [
  "All",
  "React js",
  "Angular js",
  "React Native",
  "use of API",
  "Redux",
  "Music",
  "Algorithm Art ",
  "Guitar",
  "Bengali Songs",
  "Coding",
  "Cricket",
  "Football",
  "Real Madrid",
  "Gatsby",
  "Poor Coder",
  "Shwetabh",
];

const CategoriesBar = ({ getVideosByCategory, getPopularVideos }) => {
  const [activeElement, setActiveElement] = useState("All");

  const handleClick = (value) => {
    setActiveElement(value);
    if (value == "All") {
      getPopularVideos();
    } else {
      getVideosByCategory(value);
    }
  };
  return (
    <div className="categoriesBar">
      {keywords.map((value, i) => {
        return (
          <span
            className={activeElement === value ? "active" : ""}
            onClick={() => handleClick(value)}
            key={i}
          >
            {value}
          </span>
        );
      })}
    </div>
  );
};

export default connect(null, { getVideosByCategory, getPopularVideos })(
  CategoriesBar
);
