import './App.scss';
import applicantImg from "./static/images/applicant-img.svg";

function App() {
  return (
    <div className="App">
      <div className='applicant-name'>
        <div>
          Taeho
        </div>
        <div>
          Kim
        </div>
      </div>
      <div>
        <img src={applicantImg} alt="" />
      </div>
      <div className='job-objective'>
        <div>
          Front-End Developer
        </div>
      </div>
    </div>
  );
}

export default App;
