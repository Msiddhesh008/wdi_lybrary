import { Paper } from "@mui/material";
import "./Chats.css"
import React, { useEffect, useRef } from "react";

const ChatBox = ({ chatArray, proPic }) => {
  const chatContainerRef = useRef(null);
  useEffect(() => {
    // Scroll to the bottom of the chat container
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatArray]);

  return (
    <div
      ref={chatContainerRef}
      className="chat-screen p-3 h-100 w-100 d-flex flex-column overflow-auto"
    >
      {chatArray.map((chat, index) => (
        <Paper
          key={chat.id}
          className={
            chat.sender
              ? "sending-msg-bubble mb-3"
              : "chat-receiving-msg-bubble mb-3"
          }
        >
          <div
            className={chat.sender ? "d-none" : "d-block"}
            style={{ position: "absolute", top: "3px", left: "-49px" }}
          >
            {proPic && (
              <img
                style={{
                  width: "36px",
                  height: "36px",
                  objectFit: "cover",
                  borderRadius: "50px",
                }}
                src={proPic}
                alt="Message"
              />
            )}
          </div>
          <span className="msg">{chat.message}</span>
          <span className="msg-time">{chat.time}</span>
        </Paper>
      ))}
    </div>
  );
};

export default ChatBox;
