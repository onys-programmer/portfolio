import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import MainPage from './pages/MainPage/MainPage';
import TaskBar from './components/TaskBar/TaskBar';
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
      <TaskBar />
    </div>
  );
}

export default App;
