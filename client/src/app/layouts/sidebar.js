import React from "react";
import DashboardIcon from "../assets/images/dashboard.png";
import HomeIcon from "../assets/images/home.png";
import SettingsIcon from "../assets/images/settings.png";
import ChatIcon from "../assets/images/chat.png";
import LogoutIcon from "../assets/images/logout.png";

const Sidebar = () => {
  return (
    <div className="th-sidebar-bg py-5">
      <div
        className="d-flex justify-content-center pb-5"
        style={{ marginLeft: "-8px", cursor: "pointer" }}
      >
        <img src={DashboardIcon} alt="" />
      </div>
      <div
        className="d-flex justify-content-center pt-3 pb-5"
        style={{ marginLeft: "-8px", cursor: "pointer" }}
      >
        <img src={HomeIcon} alt="" />
      </div>
      <div
        className="d-flex justify-content-center pb-5"
        style={{ marginLeft: "-8px", cursor: "pointer" }}
      >
        <img src={ChatIcon} alt="" />
      </div>
      <div
        className="d-flex justify-content-center"
        style={{ marginLeft: "-8px", cursor: "pointer" }}
      >
        <img src={SettingsIcon} alt="" />
      </div>
      <div
        className="d-flex justify-content-center"
        style={{
          marginLeft: "-8px",
          cursor: "pointer",
        }}
      >
        <img
          src={LogoutIcon}
          style={{ position: "absolute", bottom: 40 }}
          alt=""
        />
      </div>
    </div>
  );
};

export default Sidebar;
