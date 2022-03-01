import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Profile from './Components/Profile';
import Missions from './Components/Missions';
import Rockets from './Components/Rockets';

function App() {
  return (
    <div className="App">
      <Header />
      <hr />
      <Routes>
        <Route exact path="/" element={<Rockets />} />
        <Route path="/Missions" element={<Missions />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
