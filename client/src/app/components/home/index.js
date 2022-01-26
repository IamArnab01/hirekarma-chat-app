import React from "react";
import Layout from "../../layouts";
import ChatList from "./chatlist";

const Home = () => {
  return (
    <Layout>
      <div className="row">
        <div className="col-4">
          <ChatList />
        </div>
        <div className="col-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          quos, cupiditate reprehenderit, odit delectus voluptate esse quisquam
          voluptates quas totam dolores perferendis dolorem quia soluta illum
          enim, alias dolor modi.
        </div>
      </div>
    </Layout>
  );
};

export default Home;
