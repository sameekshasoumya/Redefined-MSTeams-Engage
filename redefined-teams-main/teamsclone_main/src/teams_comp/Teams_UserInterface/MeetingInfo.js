import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCopy,
    faTimes,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import './MeetingInfo.scss'

const MeetingInfo = ({ setMeetInfoPopup, url, uniqueid }) => {
    return (
        <div className="meet-info-block">
            <div className="meeting-header">
                <h3>Your meeting is ready</h3>
                <FontAwesomeIcon className="icon" icon={faTimes} onClick={() => {
            setMeetInfoPopup(false);
          }}/>
            </div>
            <button className="add-btn">
                <FontAwesomeIcon className="icon" icon={faUser} />
                Add People
            </button>
            <p className="info-text">Copy the link to share with others</p>
            <div className="meet-link">
                <span>{url}</span>
                <FontAwesomeIcon className="icon" icon={faCopy} onClick={() => navigator.clipboard.writeText(url)}
                />
                <FontAwesomeIcon className="icon-dup" icon={faCopy} onClick={() => navigator.clipboard.writeText(uniqueid)}
                />
            </div>
        </div>
    )
}


export default MeetingInfo;
