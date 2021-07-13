import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faVideo,
    faMicrophone,
    faPhoneAlt,
    faAngleDoubleRight,
    faMicrophoneSlash,
    faVideoSlash,
    faDesktop,
} from "@fortawesome/free-solid-svg-icons";
import './ActionPage_Footer.scss';

const ActionPageFooter = ({
    isVideo,
    toggleVideo,
    isPresenting,
    stopScreenShare,
    screenShare,
    isAudio,
    toggleAudio,
    disconnectCall,
}
) => {
    return (
        <div className="footer-item">
            <div className="left-item">
                <div className="icon-block">
                    User Actions
                    <div className="tooltiptext">Enables user to end the meet, toggle audio, toggle video and share screen</div>
                    <FontAwesomeIcon className="icon" icon={faAngleDoubleRight} />
                </div>
            </div>
            <div className="center-item">
                <div className={`icon-block ${!isAudio ? "red-bg" : null}`}
                    onClick={() => toggleAudio(!isAudio)}>
                    <FontAwesomeIcon className="icon" icon={isAudio ? faMicrophone : faMicrophoneSlash}
                    />
                </div>
                
                <div className={`icon-block ${isPresenting ? "red-bg" : null}`} onClick={!isPresenting? screenShare : stopScreenShare}>
                    <FontAwesomeIcon className="icon" icon={faDesktop} />
                </div>

                <div className={`icon-block ${!isVideo ? "red-bg" : null}`}
                    onClick={() => toggleVideo(!isVideo)}>
                    <FontAwesomeIcon className="icon" icon={isVideo ? faVideo : faVideoSlash}
                    />
                </div>
                 
                <div className="icon-block" onClick={disconnectCall}>
                    <FontAwesomeIcon className="icon red" icon={faPhoneAlt} />
                </div>
            </div>
        </div>
    )
}

export default ActionPageFooter;