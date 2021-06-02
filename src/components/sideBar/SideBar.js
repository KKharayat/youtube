import React from "react";
import "./_sideBar.scss";

import {
  MdSubscriptions,
  MdExitToApp,
  MdThumbUp,
  MdHistory,
  MdLibraryBooks,
  MdHome,
  MdSentimentDissatisfied,
} from "react-icons/md";
import { connect } from "react-redux";
import { log_out } from "../../redux/actions/authAction";
import { Link } from "react-router-dom";

const SideBar = ({ sidebar, handleToggleSidebar, log_out }) => {
  const handleLogout = () => {
    log_out();
  };
  return (
    <div
      className={sidebar ? "sidebar open" : "sidebar"}
      onClick={() => handleToggleSidebar(false)}
    >
      <Link to="/">
        <li>
          <MdHome size={23} />
          <span>Home</span>
        </li>
      </Link>
      <Link to="/feed/subscriptions">
        <li>
          <MdSubscriptions size={23} />
          <span>Subscriptions</span>
        </li>
      </Link>

      <li>
        <MdThumbUp size={23} />
        <span>Liked Video</span>
      </li>
      <li>
        <MdHistory size={23} />
        <span>History</span>
      </li>
      <li>
        <MdLibraryBooks size={23} />
        <span>Library</span>
      </li>
      <li>
        <MdSentimentDissatisfied size={23} />
        <span>I don't Know</span>
      </li>
      <hr />
      <li onClick={handleLogout}>
        <MdExitToApp size={23} />
        <span>Log Out</span>
      </li>

      <hr />
    </div>
  );
};

export default connect(null, { log_out })(SideBar);
