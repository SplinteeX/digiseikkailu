import "../components/css/chatbot.css";
import "../components/css/extendedChat.css";
import doge from "../assets/doge.png";
import waves from "../assets/waves.svg";
import arrow from "../assets/arrowsvg.svg";
import pen from "../assets/pen.svg";
import zoomout from "../assets/zoom-out.svg";
import { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import emojiAdd from "../assets/emoji-add.svg";
import { useOpenAi } from "./hooks/useOpenAi";
export const ChatBot = () => {
  const openAi = useOpenAi();
  const [toggle, setToggle] = useState(false);
  const [toggleEmoji, setToggleEmoji] = useState(false);
  const [toggleExtended, setToggleExtended] = useState(true);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const handleChatClick = () => {
    setToggle(!toggle);
  };
  const handleScaleClick = () => {
    setToggleExtended(!toggleExtended);
  };
  const HandleEmojiPicker = () => {
    setToggleEmoji(!toggleEmoji);
  };
  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    const sentMessage = { text: message, type: "sent" };
    setMessages([...messages, sentMessage]);
    const response = await openAi(message);
    const responseMessage = { text: response, type: "response" };
    setMessages([...messages, sentMessage, responseMessage]);
    setMessage("");
  };

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
          {toggleEmoji && <EmojiPicker onEmojiClick={HandleEmojiPicker} />}
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
          {!toggleExtended ||
            (messages.length > 1 && (
              <div className="Extended-chat">
                {messages.map((msg, index) => (
                  <div key={index} className={msg.type}>
                    {msg.text}
                  </div>
                ))}
              </div>
            ))}
          <div className="Chat">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="message"
                id="message"
                placeholder="Enter your message..."
                value={message}
                onChange={handleChange}
              />
              <button type="submit">send</button>
            </form>
            <img
              className="Image-add"
              src={emojiAdd}
              width={"25px"}
              height={"25px"}
              alt=""
              onClick={HandleEmojiPicker}
            />
          </div>
        </div>
      )}
    </div>
  );
};
