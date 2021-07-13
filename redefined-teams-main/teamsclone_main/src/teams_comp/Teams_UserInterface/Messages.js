import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTimes,
    faUserFriends,
    faCommentAlt,
    faHandPointUp,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import './Messages.scss';
import { formatDate } from "../../api_manager/apiHelper";


const Messages = ({ setIsMessenger, sendMsg, messageList }) => {

    const [msg, setMsg] = useState("");

    const handleChangeMsg = (e) => {
        setMsg(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            sendMsg(msg);
            setMsg("");
        }
    };

    const handleSendMsg = () => {
        sendMsg(msg);
        setMsg("");
    };

    return (
        <div className="container">
            <div className="header">
                <h3>Chat box</h3>
                <FontAwesomeIcon className="icon" icon={faTimes} onClick={() => {
            setIsMessenger(false);
          }}/>
            </div>
            <div className="header-tabs">
                <div className="tab">
                    <FontAwesomeIcon className="icon" icon={faUserFriends} />
                    <p>People(1)</p>
                </div>
                <div className="tab active">
                    <FontAwesomeIcon className="icon" icon={faCommentAlt} />
                    <p>Chat</p>
                </div>
            </div>

            <div className="chat-section">
                {messageList.map((item) => (
                    <div key={item.time} className="chat-block">
                        <div className="sender">
                            {item.user} <small>{formatDate(item.time)}</small>
                        </div>
                        <p className="msg">{item.msg}</p>
                    </div>
                ))}
            </div>

            <div className="send-msg-section">
                <input placeholder="Type your message here.." 
                value={msg}
                onChange={(e) => handleChangeMsg(e)}
                onKeyDown={(e) => handleKeyDown(e)}
                />
                <FontAwesomeIcon className="icon" icon={faHandPointUp} onClick={handleSendMsg}/>
            </div>
            
        </div>
    )
}

export default Messages;


