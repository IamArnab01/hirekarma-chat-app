import React from "react";
import SearchIcon from "../../../assets/images/search.png";
import ChatlistCard from "./card";
import { data } from "./data";

const ChatListWeb = () => {
  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <React.Fragment>
      <div className="py-1 px-3 card th-chatlist-searchbox border-0">
        <form onSubmit={handleSearch}>
          <div className="d-flex align-items-center justify-content-between">
            <img src={SearchIcon} alt="" />
            <input
              type="text"
              className="form-control th-chatlist-form-control"
              placeholder="Search"
            />
          </div>
        </form>
      </div>
      <div className="py-2 card th-chatlist-card border-0">
        {data &&
          data.map((item, index) => {
            return <ChatlistCard data={item} index={index} />;
          })}
      </div>
    </React.Fragment>
  );
};

export default ChatListWeb;
