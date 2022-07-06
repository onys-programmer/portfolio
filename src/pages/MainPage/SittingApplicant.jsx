import applicantImg from "../../static/images/applicant-img.svg";
import './SittingApplicant.scss';

export default function SittingApplicant() {
  return (
    <div className="sitting-applicant">
      <img className="applicant-img" src={applicantImg} alt="" />
      <div className="job-objective">
        <div className="job-objective-text">
          Front-End Developer
        </div>
      </div>
    </div>
  );
}
