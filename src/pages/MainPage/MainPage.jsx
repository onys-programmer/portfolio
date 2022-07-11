import Name from './Name';
import Instruction from "./Instruction";
import SittingApplicant from "./SittingApplicant";

import "./MainPage.scss";

export default function MainPage() {
  return (
    <main className='MainPage'>
      <Name />
      <Instruction />
      <SittingApplicant />
    </main>
  );
}
