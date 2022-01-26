import React from "react";
import Sidebar from "./sidebar";
import Header from "./header";
import { useWidthAndHeight } from "../../hooks/useWidthAndHeight";

const Layout = (props) => {
  const [width] = useWidthAndHeight();
  return (
    <div className="container-fluid">
      <div className="row">
        {width > 768 && (
          <div className="col-lg-1 col-md-2 col-12 px-0">
            <Sidebar />
          </div>
        )}
        <div className="col-lg-11 col-md-10 col-12 px-md-36">
          <Header width={width} />
          <div className="col-12">{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
