import React, { useEffect, useState } from "react";
import { Button, Container, Modal } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { baseUrl } from "../globalConst";

function ChatMessage() {
  
  const [loggerInfo, setLoggerInfo] = useState();
  const [cont, setCont] = useState();
  const { state } = useLocation();
  const [messages, setMessages] = useState({ status: "not yet" });
  const [writtenMessages, setWrittenMessages] = useState({ status: "not yet" });
  const [res, setRes] = useState({ status: "not yet" });
  const getLogger = () => {
    let logger = JSON.parse(window.sessionStorage.getItem("logger"));
    console.log("logger => GetLogger " + logger);
    setLoggerInfo(logger);
  };

  const getMessages = async () => {
    if (typeof state === "object" && typeof loggerInfo === "object" ) {
      // console.log("getDep started");
      const formdata = new FormData();
      formdata.append("getMessages", loggerInfo.id);
      formdata.append("SeTab", loggerInfo.loginas);
      formdata.append("ReTab", cont.auth);
      formdata.append("ReId", cont.id);
      let dep = await fetch(baseUrl + "messages.php", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formdata,
      });
      dep = await dep.json();
      setMessages(dep);
      console.error(
        "getMessages :",
        loggerInfo.id,
        " SeTab :",
        loggerInfo.loginas,
        " ReTab: ",
        cont.auth,
        " ReId:   ",
        cont.id
      );
      if (messages.status === "success") {
        // console.warn(messages);
        // console.log("from deps " + deps);
      } else {
        // console.warn('undefiend: '+deps);
        // console.log("undefiend: " + deps);
      }
    } else {
    }
  };
  const avatorFiller = () => {
    if (typeof cont !== "undefined") {
      return (
        <div className="sent-from d-flex">
          <img src="./logouu.png" alt="" />
          <section>{cont.fname}</section>
        </div>
      );
    }
  };
  getMessages();
  const sendMessageHandler = async (e) => {
    e.preventDefault();
    if (typeof cont !== "undefined" && typeof writtenMessages !== "undefined") {
      // console.log("getDep started");
      const formdata = new FormData();
      formdata.append("sendMessage", loggerInfo.id);
      formdata.append("SeTab", loggerInfo.loginas);
      formdata.append("ReTab", cont.auth);
      formdata.append("ReId", cont.id);
      formdata.append("content", writtenMessages);
      let dep = await fetch(baseUrl + "messages.php", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formdata,
      });
      dep = await dep.json();
      setRes(dep);
      if (res.status === "success") {
        getMessages();
      } else {
        // console.warn('undefiend: '+deps);
        // console.log("undefiend: " + deps);
      }
    } else if (typeof writtenMessages === "undefined") {
      alert("Can't send to no one");
    } else if (typeof cont === "undefined") {
      alert("can't send Empty Message");
    }
  };
  const messageFiller = () => {
    const tempMessageBox = [];
    if (messages.status === "success") {
      messages.data.map((mes) => {
        if (mes.sender_id === loggerInfo.id) {
          tempMessageBox.push(
            <div className="sent-message">{mes.content}</div>
          );
        } else {
          tempMessageBox.push(
            <div className="received-message">{mes.content}</div>
          );
        }
      });
      return tempMessageBox;
    } else if (messages.status === "failed") {
      // console.error(messages);
      return (
        <h1 className="text-muted text-center mt-5">
          Send something to start a conversation
        </h1>
      );
    }
  };
  useEffect(() => {
    if (loggerInfo) {
      console.log(loggerInfo);
    } else {
      getLogger();
    }
  }, [loggerInfo]);
  useEffect(() => {
    setCont(state);
    console.warn(cont);
  }, []);
  useEffect(() => {
    // console.log(state);
    getMessages();
  }, [cont, loggerInfo]);
  useEffect(() => {
    console.warn(messages);
  }, [messages]);

  return (
    <Container className="border comp-body-container">
      <h3>Message</h3>
      <div className="d-flex flex-column">
      {avatorFiller()}
        <div className="message-holder">{messageFiller()}</div>
        <form
          onSubmit={(e) => {
            sendMessageHandler(e);
          }}
        >
          <div className="d-flex">
            <input
              type="text"
              // name="chatter"
              id=""
              placeholder="Write Message"
              className="form-control m-1"
              onChange={(e) => setWrittenMessages(e.target.value)}
            />
            <Button className="message-send-btn" type="submit">
              Send
            </Button>
          </div>
        </form>
      </div>
    </Container>
  );
}

export default ChatMessage;
