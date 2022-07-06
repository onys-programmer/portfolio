import applicantImg from "../../static/images/applicant-img.svg";
import "./MainPage.scss";
import Name from './Name';

export default function MainPage() {
  return (
    <div className='MainPage'>
      <Name />
      <div className="sitting-applicant">
        <img className="applicant-img" src={applicantImg} alt="" />
        <div className="job-objective">
          <div className="job-objective-text">
            Front-End Developer
          </div>
        </div>
      </div>
    </div>
  );
}
