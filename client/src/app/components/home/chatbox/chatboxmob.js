import React from "react";
import UserIcon from "../../../assets/images/user2.png";
import DotsIcon from "../../../assets/images/dots-more-mob.png";
import ArrowLeftIcon from "../../../assets/images/arrow-left-mob.png";
import AttachmentIcon from "../../../assets/images/attachment.png";
import SendIcon from "../../../assets/images/send.png";
import Menu from "../../../assets/images/menu.png";
import { chatData as data } from "./data";

const ChatBoxMob = (props) => {
  const handleSendMessage = (e) => {
    e.preventDeffault();
  };

  return (
    <React.Fragment>
      {/* header */}
      <div className="row th-header-bg-2">
        <div className="col-2">
          <img src={Menu} alt="" />
        </div>
        <div className="col-8">
          <p className="th-header-heading">Messages</p>
        </div>
      </div>
      {/* card header */}
      <div className="th-chatbox-mob-usr-card">
        <div className="d-flex align-items-center">
          <img
            src={ArrowLeftIcon}
            alt=""
            style={{ cursor: "pointer", marginRight: 12 }}
            onClick={props.closeModal}
          />
          <div className="d-flex align-items-center">
            <img src={UserIcon} alt="" width={40} />
            <div>
              <p className="mb-0 mx-3 th-chatbox-mob-usr2-name">
                Esther Howard
              </p>
              <p className="mb-0 mx-3 th-chatbox-mob-usr2-status">online</p>
            </div>
          </div>
        </div>
        <img src={DotsIcon} alt="" style={{ cursor: "pointer" }} />
      </div>
      {/*  */}
      <div className="th-chat-mob-margin-top">
        {/* chat section */}
        <div className="card-body pb-0">
          {data &&
            data.map((item, index) => {
              let chatCardWraperClasses = item.own
                ? "d-flex align-items-start flex-row-reverse pb-4"
                : "d-flex align-items-start pb-4";

              let messageCardClass = item.own
                ? "card th-chatbox-msg-card own"
                : "card th-chatbox-msg-card";
              return (
                <div className={chatCardWraperClasses} key={index}>
                  <div className={messageCardClass}>
                    <p className="mb-1">{item.msg}</p>
                    <p className="mb-0 text-end mx-2">{item.time}</p>
                  </div>
                </div>
              );
            })}
        </div>
        {/* chat type section */}
        <div className="th-chat-msg-input-box-wraper">
          <div className="card th-chat-msg-input-box">
            <form>
              <div className="d-flex align-items-center justify-content-between">
                <textarea
                  rows={1}
                  className="form-control th-chatbox-form-control"
                  placeholder="Write a messgae"
                />
                <img src={AttachmentIcon} alt="" width={24} />
              </div>
            </form>
          </div>
          <div className="th-chatbox-send-icon" onClick={handleSendMessage}>
            <img src={SendIcon} alt="" width={24} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ChatBoxMob;
