
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';
import ProfilePage from './pages/profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/qoqopela-v2" element={<Home />} exact />
        <Route path="/signin" element={<SigninPage />} exact />
        <Route path="/profile" element={<ProfilePage />} exact />
      </Routes>
    </Router>
  );
}

export default App;
