import React from "react";
import Layout from "../../layouts";
import ChatList from "./chatlist";
import ChatBox from "./chatbox/chatboxweb";

const Home = () => {
  return (
    <Layout>
      <div className="row">
        <div className="col-md-4">
          <ChatList />
        </div>
        <div className="col-md-8" style={{ paddingRight: 20, paddingLeft: 20 }}>
          <ChatBox />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
