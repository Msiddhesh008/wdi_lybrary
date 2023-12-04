import React, { useContext, useState } from "react";
import "./Chats.css";
// import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import ChatBox from "./ChatBox";
import { Paper, Typography } from "@mui/material";
import Badge from "@mui/material/Badge";
import { Avatar } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

function generateUID() {
  const timestamp = new Date().getTime().toString(36); // Convert current timestamp to base36
  const randomNumber = Math.random().toString(36).substring(2, 10); // Generate a random number and convert to base36
  return timestamp + randomNumber; // Combine timestamp and random number
}

const ChatsRight = ({individualArray, chatActiveIndex, setIndividualArray, selectedChatObject}) => {

  const [text, setText] = useState("");

  const handleSend = () => {
    const uid = generateUID();
    const currentTime = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    const sent = {
      id: uid,
      sender: true,
      message: text,
      time: currentTime,
    };

    const updatedIndividualArray = [...individualArray];

    if (chatActiveIndex !== -1) {
      const updatedChats = [...updatedIndividualArray[chatActiveIndex].chats];

      updatedChats.push(sent);

      updatedIndividualArray[chatActiveIndex].chats = updatedChats;

      setIndividualArray(updatedIndividualArray);
    }

    setText("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div style={{height:"100vh"}} className="d-flex w-100 m-0 overflow-hidden  flex-lg-nowrap">
      <div className="col-lg-12 h-100 col-12  p-0 ">
        <Paper
          elevation={0}
          className="profile  border-bottom p-2 ps-3 d-flex gap-2"
          square={true}
        >
          <div
            style={{ position: "relative" }}
            className="d-flex align-items-start flex-column justify-content-center"
          >
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar alt="Remy Sharp" src={selectedChatObject.image} />
            </StyledBadge>
          </div>

          <div className="  d-flex align-items-start flex-column justify-content-center">
            <Typography
              style={{
                fontSize: "16px",
                fontWeight: "bold",
              }}
              variant="h6"
            >
              {selectedChatObject.name}
            </Typography>
            <Typography
              variant="p"
              style={{ fontSize: "12px", color: "#4A5057" }}
            >
              {selectedChatObject.group
                ? selectedChatObject.user + " Typing..."
                : " Typing..."}
            </Typography>
          </div>
        </Paper>

        <ChatBox
          chatArray={individualArray[chatActiveIndex].chats}
          proPic={selectedChatObject.image}
        />
        
        {/* <div className="chat-input w-100 pt-2 ">
          <input
            type="text"
            className="w-100 p-2 ps-3 pe-5"
            placeholder="Message..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <h6 className="chat-sentBtn cad-fw-700">send</h6>
        </div> */}
      </div>
    </div>
  );
};

export default ChatsRight;
