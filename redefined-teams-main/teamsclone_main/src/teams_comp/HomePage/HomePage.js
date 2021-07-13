import './HomePage.scss';
import TopBar from './../Teams_UserInterface/Header';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo, faKeyboard } from "@fortawesome/free-solid-svg-icons";
import shortid from "shortid";
import {useHistory} from "react-router-dom";

const HomePage = () => {
    const history = useHistory();

  const startCall = () => {
    const uid = shortid.generate();
    history.push(`/${uid}#init`);
  };
  const goToMeet = () => {
      const link = document.getElementById("join").value;
      history.push(`${link}`);
  }
  
    return (
        <div className="home-page">
            <TopBar />
            <div className="body">
                <div className="left-side">
                    <div className="content">
                        <h2>Microsoft Teams </h2>
                        <p>Connect through meet,chat,call and collaborate..all in just one place!</p>
                        <div className="action-btn">
                            <button className="btn purple" onClick={startCall}>
                                <FontAwesomeIcon icon={faVideo} className="icon-block"/>
                                New Meeting
                            </button>
                            <div className="input-block">
                                <div className="input-section">
                                    <FontAwesomeIcon icon={faKeyboard} className="icon-block"/>
                                    <input placeholder="Enter the unique meet id" id="join"/>
                                </div>
                                <button className="btn no-bg" onClick={goToMeet}>Join</button>
                            </div>
                        </div>
                    </div>
                    <div className="help-text">
                    <p>Life's better when we get together🤩...
                        Now use Teams with family and friends ot call, chat and make plans!<br/>
                        <a href="https://www.microsoft.com/en-in/microsoft-teams/teams-for-home?utm_campaign=Collab&utm_source=WebBanner&utm_term=TFL&ocid=OO_TEAMS_CONS_MLGTM_FM_TeamsWebBanners_teams-banners">Learn More</a></p>
    
                    </div>
                </div>

                <div className="right-side">
                    <div className="content">
                        <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4H4kk?ver=fb18&q=90&m=2&h=768&w=1024&b=%23FFFFFFFF&aim=true" alt="Teams_Conferencing" />
                    </div>
                </div>
            </div>
            <p className="copyright">©️ Sameeksha Singh</p>
        </div>
    )
}

export default HomePage;