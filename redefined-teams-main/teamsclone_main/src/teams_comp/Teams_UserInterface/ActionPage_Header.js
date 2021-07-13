import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{
    faCommentAlt,
  } from "@fortawesome/free-solid-svg-icons";
import './ActionPage_Header.scss';
import { formatDate } from "../../api_manager/apiHelper";
import { useState, useEffect } from "react";


const ActionPageHeader= ({
    isMessenger,
    setIsMessenger,
    messageAlert,
    setMessageAlert,
  }) =>{

    let interval = null;
  const [currentTime, setCurrentTime] = useState(() => {
    return formatDate();
  });

  useEffect(() => {
    interval = setInterval(() => setCurrentTime(formatDate()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

return (
    <div className="top-bar">

        <div className="head-items icon-block" onClick={() => {
          setIsMessenger(true);
          setMessageAlert({});
        }}
        >
            <FontAwesomeIcon className="icon" icon={faCommentAlt} />
            { !isMessenger && messageAlert.alert && (
                <span className="on-message-alert"></span>
              )}
           
        </div>
        <div className="head-items time-block">{currentTime}</div>
    </div>
)
}
export default ActionPageHeader;