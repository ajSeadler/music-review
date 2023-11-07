import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import MusicList from './components/MusicList';
import NavBar from './components/NavBar';
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     <Router>
      <NavBar />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/music" element={<MusicList />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
    </>
  );
};

export default App;
