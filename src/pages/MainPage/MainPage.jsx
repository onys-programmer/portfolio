import "./MainPage.scss";
import Name from './Name';
import SittingApplicant from "./SittingApplicant";

export default function MainPage() {
  return (
    <div className='MainPage'>
      <Name />
      <SittingApplicant />
    </div>
  );
}
