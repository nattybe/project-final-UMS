import React, { useState } from "react";
import { Button, Container, Modal } from "react-bootstrap";

function ChatMessage() {
  return (
    <Container className="border comp-body-container">
      <h3>Message</h3>
      <div className="d-flex flex-column">
        <div className="sent-from d-flex">
          <img src="./logouu.png" alt="" />
          <section>Natty</section>
        </div>
        <div className="message-holder">
          <div className="sent-message">
            hello my name is natty and i am the sender
          </div>
          <div className="received-message">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
            voluptatum dolorum modi deleniti quo aspernatur dignissimos
            doloribus, dolorem vero non facilis quas commodi dicta cumque
            necessitatibus blanditiis totam architecto sint!
          </div>

          <div className="sent-message">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            tenetur est culpa cum quam quisquam ipsam explicabo fugiat ipsa.
            Veritatis inventore possimus error quis mollitia consequuntur fugiat
            vel voluptas nulla!
          </div>
          <div className="received-message">
            hello i also am natty and i am the receiver
          </div>
          
          <div className="sent-message">
            hello my name is natty and i am the sender
          </div>
          <div className="sent-message">
            hello my name is natty and i am the sender
          </div>
          <div className="sent-message">
            hello my name is natty and i am the sender
          </div>
          <div className="sent-message">
            hello my name is natty and i am the sender
          </div>
          <div className="sent-message">
            hello my name is natty and i am the sender
          </div>
          <div className="sent-message">
            hello my name is natty and i am the sender
          </div>
        </div>
        <div className="d-flex">
          <input
            type="text"
            name="chatter"
            id=""
            placeholder="Write Message"
            className="form-control m-1"
          />
          <Button className="message-send-btn">Send</Button>
        </div>
      </div>
    </Container>
  );
}

export default ChatMessage;
