import applicantImg from "./static/images/applicant-img.svg";
import "./MainPage.scss";

export default function MainPage() {
  return (
    <div className='MainPage'>
      <div className='applicant-name'>
        <div>
          Taeho
        </div>
        <div>
          Kim
        </div>
      </div>
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
