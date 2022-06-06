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
    </div>
  );
}

export default App;
