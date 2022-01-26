import React from "react";
import UserIcon from "../../../assets/images/user2.png";
import DotsIcon from "../../../assets/images/dots-more.png";
import CancelIcon from "../../../assets/images/cross.png";
import AttachmentIcon from "../../../assets/images/attachment.png";
import SendIcon from "../../../assets/images/send.png";
import { chatData as data } from "./data";

const ChatBox = () => {
  const handleSendMessage = (e) => {
    e.preventDeffault();
  };

  return (
    <div className="pt-1">
      <div className="card th-chatbox-card border-0">
        {/* card header */}
        <div className="card-header th-chatbox-card-header">
          <div className="d-flex align-items-center">
            <img src={UserIcon} alt="" />
            <p className="mb-0 mx-3 th-chatbox-usr2-name">Esther Howard</p>
          </div>
          <div className="d-flex align-items-center">
            <img
              src={DotsIcon}
              alt=""
              className="mx-3"
              style={{ cursor: "pointer" }}
            />
            <img src={CancelIcon} alt="" style={{ cursor: "pointer" }} />
          </div>
        </div>
        {/* chat section */}
        <div className="card-body th-chatbox-card-body px-4 pb-0">
          {data &&
            data.map((item, index) => {
              let chatCardWraperClasses = item.own
                ? "d-flex align-items-start flex-row-reverse pb-3"
                : "d-flex align-items-start pb-3";

              let messageCardClass = item.own
                ? "card th-chatbox-msg-card own"
                : "card th-chatbox-msg-card";
              return (
                <div className={chatCardWraperClasses} key={index}>
                  <img src={item.src} alt="" width={40} />
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
                <input
                  type="text"
                  className="form-control th-chatbox-form-control"
                  placeholder="Write a messgae"
                />
                <img src={AttachmentIcon} alt="" />
              </div>
            </form>
          </div>
          <div className="th-chatbox-send-icon" onClick={handleSendMessage}>
            <img src={SendIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
