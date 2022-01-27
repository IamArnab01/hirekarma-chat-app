import React from "react";
import ChatlistCard from "./card";
import { data } from "./data";

const ChatListMob = (props) => {
  return (
    <React.Fragment>
      <div
        className="py-2 card th-chatlist-card border-0"
        onClick={() => props.showModal(true)}
      >
        {data &&
          data.map((item, index) => {
            return <ChatlistCard data={item} index={index} />;
          })}
      </div>
    </React.Fragment>
  );
};

export default ChatListMob;
