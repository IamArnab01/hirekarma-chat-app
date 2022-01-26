import React from "react";
import FilterIcon from "../assets/images/sort.png";
import NotificationIcon from "../assets/images/notification.png";
import UserIcon from "../assets/images/user.png";
import ArrowDown from "../assets/images/arrow-down.png";
import Menu from "../assets/images/menu.png";

const Header = (props) => {
  return (
    <React.Fragment>
      {props.width > 768 ? (
        <div className="py-5">
          <div className="row py-1 d-flex align-items-center">
            <div className="col-4 d-flex align-items-center justify-content-between">
              <h2 className="mb-0 th-header-heading">Chat</h2>
              <div className="d-flex align-items-center">
                <div className="th-header-filter-box">
                  <img src={FilterIcon} alt="" />
                </div>
                <p className="th-header-sort mb-0"> Sort</p>
              </div>
            </div>
            <div className="col-8 d-flex align-items-center justify-content-end">
              <div className="mx-4">
                <img
                  src={NotificationIcon}
                  alt=""
                  style={{ cursor: "pointer" }}
                />
              </div>
              <div className="mx-3 d-flex align-items-center">
                <img
                  src={UserIcon}
                  alt=""
                  className="mx-2"
                  width={40}
                  height={40}
                />
                <p className="mx-2 mb-0 th-header-username">Arnab</p>{" "}
                <img
                  src={ArrowDown}
                  alt=""
                  className="mx-2"
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="row th-header-bg">
          <div className="col-2 p-0">
            <img src={Menu} alt="" />
          </div>
          <div className="col-8 p-0">
            <p className="th-header-heading">Messages</p>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Header;
