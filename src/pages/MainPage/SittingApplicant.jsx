import applicantImg from "../../static/images/applicant-img.svg";
import './SittingApplicant.scss';

export default function SittingApplicant() {
  return (
    <section className="sitting-applicant">
      <img className="applicant-img" src={applicantImg} alt="" />
      <div className="chair">
        <div className="chair-box">
          <div className="chair-text">
            Front-End Developer
          </div>
        </div>
      </div>
    </section>
  );
}
