import './App.css';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import HomePage from './pages/homepage';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="pageNav">
          <ul>
            <li><NavLink to="/">Homepage</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/register">Register</NavLink></li>
          </ul>
        </div>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;