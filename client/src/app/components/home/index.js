import React, { useState } from "react";
import Layout from "../../layouts";
import ChatListWeb from "./chatlist/chatlistweb";
import ChatListMob from "./chatlist/chatlistmob";
import ChatBoxWeb from "./chatbox/chatboxweb";
import ChatBoxMob from "./chatbox/chatboxmob";
import Modal from "react-bootstrap/Modal";
import { useWidthAndHeight } from "../../../hooks/useWidthAndHeight";

const Home = () => {
  const [width] = useWidthAndHeight();
  const [showPopup, setShowPopup] = useState(false);

  return (
    <Layout>
      {width > 768 ? (
        <div className="row">
          <div className="col-4">
            <ChatListWeb />
          </div>
          <div className="col-8" style={{ paddingRight: 20, paddingLeft: 20 }}>
            <ChatBoxWeb />
          </div>
        </div>
      ) : (
        <div>
          <div className="row">
            <div className="col-12 p-0">
              <ChatListMob showModal={(show) => setShowPopup(show)} />
            </div>
          </div>
          <Modal
            show={showPopup}
            onHide={() => setShowPopup(false)}
            size={width < 992 ? "md" : "xl"}
            centered
            contentClassName="th-home-modal-content"
            dialogClassName="th-home-modal-dialog"
          >
            <Modal.Body className="p-0">
              <ChatBoxMob closeModal={() => setShowPopup(false)} />
            </Modal.Body>
          </Modal>
        </div>
      )}
    </Layout>
  );
};

export default Home;
