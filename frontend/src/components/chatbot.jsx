import "../components/css/chatbot.css";
import doge from "../assets/doge.png";
import waves from "../assets/waves.svg";
import arrow from "../assets/arrowsvg.svg";
import pen from "../assets/pen.svg";
import zoomout from "../assets/zoom-out.svg";
import { useState } from "react";
import EmojiPicker from "emoji-picker-react";
export const ChatBot = () => {
  const [toggle, setToggle] = useState(false);
  const handleChatClick = () => {
    setToggle(!toggle);
  };
  const handleScaleClick = () => {};
  return (
    <div className="Chatbot-wrapper">
      {!toggle && (
        <div className="Open-chat" onClick={handleChatClick}>
          <div className="Vertical-text">
            <p>Open chat</p>
          </div>
          <div className="Open-ball">
            <img src={pen} alt="" />
            <div className="Open-square"></div>
          </div>
        </div>
      )}
      {toggle && (
        <div className={`Chatbot`}>
          <header>
            <div className="left-side">
              <h1>Hi there!</h1>
              <p>Welcome to our website!</p>
              <p>Ask us anything 🎉</p>
            </div>
            <div className="Arrow">
              <img
                className="ScaleImg"
                src={zoomout}
                width={"20px"}
                height={"20px"}
                onClick={handleScaleClick}
                alt=""
              />
              <img
                className="ArrowImg"
                src={arrow}
                width={"20px"}
                height={"20px"}
                onClick={handleChatClick}
                alt=""
              />
            </div>
            <div className="circle">
              <img src={doge} height={"25px"} width={"25px"} alt="" />
            </div>
          </header>
          <div className="Text">
            <div className="ball"></div>
            <p>We reply immediately!</p>
          </div>
          <img className="waves" src={waves} alt="" />
          <div className="Extended-chat"></div>
          <div className="Chat">
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter your message..."
            />
          </div>
        </div>
      )}
    </div>
  );
};
