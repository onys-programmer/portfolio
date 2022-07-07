import "./MainPage.scss";
import Name from './Name';
import SittingApplicant from "./SittingApplicant";

export default function MainPage() {
  return (
    <main className='MainPage'>
      <Name />
      <SittingApplicant />
    </main>
  );
}
