import { Link } from "react-router-dom";
import SignUp from "../SignUpPage/SignUpPage";
import "./MainPage.scss";

const StartPage = () => {
  return (
    <div className="App">
      <div className="appAside">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRNC_hEsfze2agtcoNIK5jjxtsfyKp1F1wQA&usqp=CAU" className="img"></img>
        <img src="https://s3.us-east-1.amazonaws.com/files.tvisha.aws/posts/crm/panel/attachments/1592670168/webp-net-resizeimage-min.png" className="img2"></img>
        <img src="https://www.techrepublic.com/a/hub/i/r/2020/04/30/310d3603-2b5d-4a64-8bbb-f44c56854209/resize/1200x/5197d44becbfc19d0cdf719004fd4a02/microsoft-teams.jpg" className="img3"></img>

      </div>
      <div className="appForm">
        <div className="pageSwitcher">
          <Link to="/login" className="pageSwitcherItem leftItem">
            Sign In
          </Link>
          <Link exact to="/" className="pageSwitcherItem-active rightItem">
            Sign Up
          </Link>
        </div>
        <div className="formTitle">
          <Link to="/login" className="formTitleLink2">
            Sign In
          </Link>{" "}
          |{" "}
          <Link exact to="/" className="formTitleLink">
            Sign Up
          </Link>
        </div>
        <SignUp />
      </div>
    </div>
  );
};

export default StartPage;