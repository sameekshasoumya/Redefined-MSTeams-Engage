import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{
  faQuestionCircle,
  faExclamationCircle,
  faCog,
} from "@fortawesome/free-solid-svg-icons"
import "./Header.scss";

const Header= () =>{
  return (
    // <div className="heading">
    //   <div class="staticbox">
    //     <div class="logo">
    //           <img src="https://heliocentrix.co.uk/wp-content/uploads/2020/04/microsoft-teams-logo-png_480-480.png" alt="company_logo" height="40px" width="40px"/>
    //           <a href="https://www.microsoft.com/en-in"> Microsoft</a> | Teams
    //       </div>
    //     </div>
    <div className="header">
    <div className="logo">
    <img src="https://heliocentrix.co.uk/wp-content/uploads/2020/04/microsoft-teams-logo-png_480-480.png" alt="Microsoft_Teams"/>
    <div className="help-text"> <a href="https://www.microsoft.com/en-in/" className="linkbtn">Microsoft</a>  |  Teams</div>
    </div>
    <div className="action-btn">
    <FontAwesomeIcon className="icon-block" icon={faQuestionCircle}/>
    <FontAwesomeIcon className="icon-block" icon={faExclamationCircle}/>
    <FontAwesomeIcon className="icon-block" icon={faCog}/>
    </div>
    </div>
  )
}
export default Header;