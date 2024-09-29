import './App.css';
import React , {useState, useEffect} from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import AppHeader from './components/Header';
import AppFooter from './components/Footer';
import Home from './pages/Home';
import Aboutme from './pages/Aboutme';
import Overview from './pages/Overview';
import SkillPengalaman from './pages/SkillPengalaman';
import Navbar from "./Dashboard/Navbar";
import ContactMe from './pages/ContactMe';
import Login from './pages/Login';
import Register from './pages/Register';
import Akun from './pages/Akun';
import Profil from './pages/Profil';
import Tentangsaya from './Dashboard/Tentangsaya';
import Keahlian from './Dashboard/Keahlian';
import Masuk from './pages/Masuk';
import Ringkasan from './Dashboard/Ringkasan';
import Rumah from './Dashboard/Rumah';
function App() {
  // State untuk melacak apakah user login
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Cek status login dari localStorage
  useEffect(() => {
    const userLoggedIn = localStorage.getItem("isLoggedIn");
    if (userLoggedIn === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  // Fungsi untuk handle login
  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
  };

  // Fungsi untuk handle logout
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <AppHeader isLoggedIn={isLoggedIn} handleLogout={handleLogout}/>
        {/* <main className="flex-grow p-4 mt-16"> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Aboutme" element={<Aboutme />} />
            <Route path="/Overview" element={<Overview />} />
            <Route path="/SkillPengalaman" element={<SkillPengalaman />} />
            <Route path="/dashboard/*" element={isLoggedIn ? <DashboardLayout /> : <Navigate to="/login"/>} />
            <Route path="/contact" element={<ContactMe />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/Akun" element={<Akun />} />
            <Route path="/Profil" element={<Profil />} />
            <Route path="/Masuk" element={<Masuk onMasuk={handleLogin} />} />
          </Routes>
        {/* </main> */}
        <AppFooter />
      </div>
    </Router>
  );
}

function DashboardLayout() {
  return (
    <div className="flex h-screen">
      <Navbar /> {/* Sidebar Dashboard */}
      {/* <div className="flex-1 p-4"> */}
        <Routes>
          <Route path="Tentangsaya" element={<Tentangsaya />} />
          <Route path="Keahlian" element={<Keahlian />} />
          <Route path="ringkasan" element={<Ringkasan/>} />
          <Route path="Rumah" element={<Rumah/>} />
        </Routes>
      {/* </div> */}
    </div>
  );
}

export default App;
