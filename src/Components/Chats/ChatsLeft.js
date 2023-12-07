import React, { useContext, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import "./Chats.css";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import PeopleTwoToneIcon from '@mui/icons-material/PeopleTwoTone';



const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));




const ChatsLeft = ({individualArray, groupArray, setSelectedChatObject, chatActiveIndex, setChatActiveIndex}) => {

    const [searchTerm, setSearchTerm] = useState("");

    const filteredIndividualArray = individualArray.filter(message => {
      return message.name.toLowerCase().includes(searchTerm.toLowerCase());
    });


    const filteredGroupArray = groupArray.filter(message => {
      return message.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
  


  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleUserClick = (chatObject, index) => {
    setSelectedChatObject(chatObject);
    setChatActiveIndex(index); 
  };
  return (
    <div className="h-100  overflow-hidden pb-5">
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        style={{
          height: "40px",
          borderBottom: "1px solid 1px solid #0000002b",

        }}
      >
        <Tab
          icon={<PermIdentityOutlinedIcon />}
          label="Individual"
          style={{
            width: "50%",
            textTransform: "none",
            fontSize: "14px",
            display: "block",
            fontWeight: "700",
            fontFamily: "inherit",
            padding: "12px 5px",
          }}
        />
        <Tab
          icon={<PeopleAltOutlinedIcon />}
          label="Group"
          style={{
            width: "50%",
            textTransform: "none",
            fontSize: "14px",
            display: "block",
            fontWeight: "700",
            fontFamily: "inherit",
            padding: "12px 5px",
          }}
        />
      </Tabs>

      <div className="p-2">
        <div
          style={{
            height: "4%",
          }}
          className="searchbox"
        >
          <SearchIcon />
          <input 
          className="cad-text-medium search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search..." 
          type="search" />
        </div>
        <p style={{ fontSize: "14px", fontWeight: "600" }}>Frequent Contact</p>
        <div
          style={{
            height: "6%",
          }}
          className="active-profile ps-2 pointer"
        >
          {individualArray.map((message, i) => (
            <div
              key={i}
              className=""
              style={{
                display: "flex",
                position: "relative",
                marginRight: "15px",
              }}
            >
              <div className="contact-profile" style={{ position: "relative" }}>
                
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  variant="dot"
                >
                  <Avatar alt="Remy Sharp" src={message.image} />
                </StyledBadge>
              </div>
            </div>
          ))}
        </div>
      </div>

      {value === 0 && (
        <div className="mess pointer p-3  h-100 overflow-auto">
          {filteredIndividualArray.map((message, i) => (
            
            <div
              key={i}
              onClick={() => handleUserClick(message, i)}
              className={
                chatActiveIndex === i
                  ? "chat-active message position-relative mb-3 mt-1 pt-3 pb-3 gap-2 p-2 rounded-2 d-flex  align-items-center"
                  : "message position-relative mb-3 mt-1 gap-2 pt-3 pb-3 p-2 rounded-2 d-flex  align-items-center"
              }
            >
              <div className="contact-profile" >
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  variant="dot"
                >
                  <Avatar alt="Remy Sharp" src={message.image} />
                </StyledBadge>
              </div>
              
              <div className="d-flex flex-column pe-2">
                <span 
                style={{ fontSize: "14px", fontWeight: "700" }}>
                  {message.name}
                </span>
                <span className="text-nowrap" style={{ fontSize: "12px", width:"240px", overflow:"hidden" }}>{individualArray[i].chats[individualArray[i].chats.length - 1].message}</span>
              </div>
              <div 
              
              className="d-flex pe-1 h-100 position-absolute end-0 flex-column justify-content-around align-items-end">

                <p
                className="m-1"
                  style={{
                    fontSize: "10px",
                    fontWeight: "700",
                    position: "relative",
                  }}
                >
                  {message.day}
                </p>

                <span
                className="m-2"
                  style={{
                    position: "relative",
                    fontSize: "8px",
                    background: "#548CFF",
                    width:"18px",
                    height:"18px",
                    padding: "3px",
                    borderRadius: "10px",
                    color: "#fff",
                    textAlign:"center",
                  }}
                >
                  {individualArray[i].chats.length}
                </span>

              </div>
            </div>
          ))}
        </div>
      )}
      {value === 1 && (
        <div className="mess pointer ps-2  h-100 overflow-auto">
          {filteredGroupArray.map((message, i) => (
            
            <div
              key={i}
              onClick={() => handleUserClick(message, i)}
              className={
                chatActiveIndex === i
                  ? "chat-active message position-relative mb-3 mt-1 gap-2 p-2 pt-3 pb-3 rounded-2 d-flex  align-items-center"
                  : "message position-relative mb-3 mt-1 gap-2 p-2 rounded-2 pt-3 pb-3 d-flex  align-items-center"
              }
            >
              <div className="contact-profile" >
                <Badge
                  overlap="circular"
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  badgeContent={
                    <PeopleTwoToneIcon style={{
                      padding:"3px",
                      width:"20px",
                      height:"20px",
                      color:"#7E7E7E",
                      backgroundColor:"#fff",
                      borderRadius:"18px",
                      boxShadow: `rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px`,
                    }} />
                  }
                >
                  <Avatar alt="Travis Howard" src={message.image} />
                  
                </Badge>
              </div>
              
              <div className="d-flex flex-column pe-2">
                <span 
                style={{ fontSize: "14px", fontWeight: "700" }}>
                  {message.name}
                </span>
                <span className="text-nowrap" style={{ fontSize: "12px", width:"240px", overflow:"hidden" }}>{individualArray[i].chats[individualArray[i].chats.length - 1].message}</span>
              </div>
              <div 
              
              className="d-flex pe-1 h-100 position-absolute end-0 flex-column justify-content-around align-items-end">

                <p
                className="m-1"
                  style={{
                    fontSize: "10px",
                    fontWeight: "700",
                    position: "relative",
                  }}
                >
                  {message.day}
                </p>

                <span
                className="m-2"
                  style={{
                    position: "relative",
                    fontSize: "8px",
                    background: "#548CFF",
                    width:"18px",
                    height:"18px",
                    padding: "3px",
                    borderRadius: "10px",
                    color: "#fff",
                    textAlign:"center",
                  }}
                >
                  {individualArray[i].chats.length}
                </span>

              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChatsLeft;
