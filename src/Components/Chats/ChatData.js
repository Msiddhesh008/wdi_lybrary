import React from 'react'

const ChatData = () => {

    
const [ individualArray, setIndividualArray] = useState([
    {
      id: "0",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      groupicon: "",
      name: "Dipti Mhabadi",
      message: "We're heading to the mountains 🏔️.",
      time: "8.45 Am",
      mess: "14",
      day: "Yesterday",
      unseenMsg: 0,
      chats: [
        {
          id: 10,
          sender: true,
          message: "Hello! 😄 How's your day going?",
          time: "8:05 am",
        },
        {
          id: 11,
          sender: false,
          message: "Hi there! 🙌 My day is going well, thanks for asking!",
          time: "8:07 am",
        },
        {
          id: 12,
          sender: true,
          message: "That's great to hear! 😊 Anything exciting happening?",
          time: "8:10 am",
        },
        {
          id: 13,
          sender: false,
          message:
            "Well, I'm planning a weekend trip 🏞️ with friends! Can't wait!",
          time: "8:15 am",
        },
        {
          id: 14,
          sender: true,
          message: "Wow, sounds fun! 🌄 Where are you all going?",
          time: "8:18 am",
        },
        {
          id: 15,
          sender: false,
          message:
            "We're heading to the mountains 🏔️. It's going to be an adventure! 🌟",
          time: "8:20 am",
        },
      ],
    },
    {
      id: "2",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      name: "Emma Smith",
      message: "It's a website for a local charity organization 🤝.",
      time: "8.45 Am",
      mess: "7",
      day: "Yesterday",
      unseenMsg: 0,
      chats: [
        {
          id: 16,
          sender: true,
          message: "Hey! 😃 How's your day treating you?",
          time: "9:00 am",
        },
        {
          id: 17,
          sender: false,
          message: "Hello! 🌞 My day is off to a good start, thank you!",
          time: "9:05 am",
        },
        {
          id: 18,
          sender: true,
          message: "That's awesome to hear! 😊 Any plans for the day?",
          time: "9:10 am",
        },
        {
          id: 19,
          sender: false,
          message:
            "Yes, I'm meeting a friend for coffee ☕️ and then working on a new project 🖥️.",
          time: "9:15 am",
        },
        {
          id: 20,
          sender: true,
          message:
            "Sounds like a productive day ahead! 🚀 What's your new project about?",
          time: "9:20 am",
        },
        {
          id: 21,
          sender: false,
          message:
            "It's a website for a local charity organization 🤝. I'm excited to help out!",
          time: "9:25 am",
        },
        {
          id: 1,
          sender: true,
          message: "Hey! 😃 How's your day treating you?",
          time: "9:00 am",
        },
        {
          id: 2,
          sender: false,
          message: "Hello! 🌞 My day is off to a good start, thank you!",
          time: "9:05 am",
        },
        {
          id: 3,
          sender: true,
          message: "That's awesome to hear! 😊 Any plans for the day?",
          time: "9:10 am",
        },
        {
          id: 4,
          sender: false,
          message:
            "Yes, I'm meeting a friend for coffee ☕️ and then working on a new project 🖥️.",
          time: "9:15 am",
        },
        {
          id: 5,
          sender: true,
          message:
            "Sounds like a productive day ahead! 🚀 What's your new project about?",
          time: "9:20 am",
        },
        {
          id: 6,
          sender: false,
          message:
            "It's a website for a local charity organization 🤝. I'm excited to help out!",
          time: "9:25 am",
        },
      ],
    },
    {
      id: "3",
      image:
        "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      name: "Francis Mitcham",
      message: "Lorem ipsum dolor sit amet 5",
      time: "8.45 Am",
      mess: "10",
      day: "Yesterday",
      unseenMsg: 0,
      chats: [
        {
          id: 1,
          sender: false,
          message: "Francis ipsum dolor sit amet Lorem ipsum dolor sit amet",
          time: "8:00 am",
        },
        {
          id: 2,
          sender: false,
          image:
            "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
          message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
          time: "8:00 am",
        },
        {
          id: 3,
          sender: true,
          message:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.",
          time: "8:00 am",
        },
        {
          id: 4,
          sender: false,
          image:
            "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
          message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
          time: "8:00 am",
        },
        {
          id: 5,
          sender: true,
          message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
          time: "8:00 am",
        },
        {
          id: 6,
          sender: true,
          message:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.",
          time: "8:00 am",
        },
        {
          id: 7,
          sender: false,
          image:
            "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
          message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
          time: "8:00 am",
        },
        {
          id: 8,
          sender: false,
          image:
            "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
          message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
          time: "8:00 am",
        },
        {
          id: 9,
          sender: true,
          message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
          time: "8:00 am",
        },
      ],
    },
    {
      id: "4",
      image:
        "https://media.istockphoto.com/id/1318858332/photo/headshot-portrait-of-smiling-female-employee-posing-in-office.jpg?s=1024x1024&w=is&k=20&c=HThNP7cTwpPjRgylneAIW2VnkHDInJ27qnpjzcC4f-Y=",
      name: "Neil Owen",
      message: "Lorem ipsum dolor sit amet 6",
      time: "8.45 Am",
      mess: "18",
      day: "Yesterday",
      chats: [
        {
          id: 1,
          sender: false,
          message: "Neil ipsum dolor sit amet Lorem ipsum dolor sit amet",
          time: "8:00 am",
        },
        {
          id: 2,
          sender: false,
          image:
            "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
          message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
          time: "8:00 am",
        },
        {
          id: 3,
          sender: true,
          message:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.",
          time: "8:00 am",
        },
        {
          id: 4,
          sender: false,
          image:
            "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
          message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
          time: "8:00 am",
        },
        {
          id: 5,
          sender: true,
          message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
          time: "8:00 am",
        },
        {
          id: 6,
          sender: true,
          message:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.",
          time: "8:00 am",
        },
        {
          id: 7,
          sender: false,
          image:
            "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
          message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
          time: "8:00 am",
        },
        {
          id: 8,
          sender: false,
          image:
            "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
          message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
          time: "8:00 am",
        },
        {
          id: 9,
          sender: true,
          message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
          time: "8:00 am",
        },
      ],
    },
  ]);







  return (
    <div>ChatData</div>
  )
}

export {individualArray, }
export default ChatData