import React from "react";

const ChatlistCard = ({ data, index }) => {
  return (
    <div
      className="th-chartlist-usr-card"
      key={index}
      style={{ cursor: "pointer" }}
    >
      <div className="d-flex align-items-center">
        <img src={data.src} alt="" className="th-chatlist-usr-img" />
        <div className="mx-3">
          <p className="m-0 th-chatlist-usr-name">{data.name}</p>
          <p className="m-0 th-chatlist-usr-desc">{data.desc}</p>
        </div>
      </div>
      <div>
        <div>
          {!data.isOnline && data.lastSeen ? (
            <p className="m-0 th-chatlist-usr-time">{data.lastSeen}</p>
          ) : (
            <div style={{ visibility: "hidden" }}>0</div>
          )}
        </div>
        <div className="d-flex justify-content-end">
          {data.msgUnread > 0 ? (
            <p className="m-0 text-center th-chatlist-usr-msg-cnt">
              {data.msgUnread}
            </p>
          ) : (
            <div style={{ visibility: "hidden" }}>0</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatlistCard;
