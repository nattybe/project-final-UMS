import React, { useState } from "react";
import { Button, Container, Modal } from "react-bootstrap";

function ChatMessage() {
  return (
    <Container className="border">
      <div className="message-holder">
        <div className="sent-message">hello</div>
        <div className="received-message">no u hello</div>
      </div>
      <input type="text" name="chatter" id="" />
    </Container>
  );
}

export default ChatMessage;
