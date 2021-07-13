import './NoMatch.scss';
import {Link} from 'react-router-dom';
import Header from './../Teams_UserInterface/Header';

const NoMatch= () => {
  return(
    <div className="nomatch">
    <Header/>
    <div className="no-match-content">
    <h2>Invalid Link!</h2>
    <div className="action-btn">
    <Link className="btn purple" to="/"> Try Again </Link>
    </div>
    </div>
    </div>
  )
}

export default NoMatch;
