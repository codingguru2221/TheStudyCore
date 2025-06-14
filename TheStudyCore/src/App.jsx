import React, { Suspense, lazy, useEffect, useState } from 'react';
import { Box } from '@mui/material';
import './App.css';
import Footer from './components/Footer/Footer';
import MenuAppBar from './components/Navbar/Navbar';
import { Routes, Route, useLocation, useNavigate } from 'react-router';
import RouteChangeHandler from './RouteChangeHandler';
import Loader from './components/Loding/loding';
import Register from './components/Register/Register';
import Login from './components/LoginPage/Login';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './components/PrivateRoute';
import AiModal from './modals/AiModal';

// Lazy load pages
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const Dashboard = lazy(() => import('./components/Dashboard/Dashboard'));
const Material = lazy(() => import('./components/Material/Material'));
const ProfilePage = lazy(() => import('./components/Profile/ProfilePage'));
const ProgressTracker = lazy(() => import('./components/ProgrssTracker/ProgressTracker'));
const HomeFirstSection = lazy(() => import('./components/HomeFirstSection/HomeFirstSection'));
const ArkDoubtit = lazy(() => import('./pages/ArkDoubtit'));
const Resources = lazy(() => import('./pages/Resources'));
const Notes = lazy(() => import('./pages/Notes'));
const AiAssistant = lazy(() => import('./pages/AiAssistant'));
const Subject = lazy(() => import('./pages/Subject'));
const Course = lazy(() => import('./pages/Course'));
const DownloadPage = lazy(() => import('./pages/Download'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

function App({ toggleMode, mode }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false)
  const handleModal = () => {
    setOpenModal(!openModal)
  }
  const handleClose = () => {  // Function to handle closing the modal
    setOpenModal(false);
  }
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isHome = location.pathname === '/' || location.pathname === '/home';
  const isLoginPage = location.pathname === '/login' || location.pathname === '/register';

  useEffect(() => {
    const loggedInFlag = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedInFlag);
  }, [location]);



  const handleLogin = (email, password) => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.email === email && user.password === password) {
      localStorage.setItem('isLoggedIn', 'true');
      setIsLoggedIn(true);
      toast.success('Login successful!');
      toast.info(`Welcome back, ${user.userName}!`);
      navigate('/');
    } else {
      toast.error('Invalid credentials!');
    }
  };

  const handleRegister = (email, password, userName) => {
    localStorage.setItem('user', JSON.stringify({ email, password, userName }));
    localStorage.removeItem('isLoggedIn');
    toast.success('Registration successful! Please log in.');
    navigate('/login');
  };


  return (
    <RouteChangeHandler>
      <Box>
        <Suspense fallback={<Loader />}>
          {/* Show Navbar only if NOT on login/register */}
          {!isLoginPage && (
            isHome ? (
              <Box
                className="app-container"
                sx={{
                  bgcolor: '#3241B8',
                  height: { md: '32rem', sm: 'auto', xs: 'auto' },
                  minWidth: '40vh',
                  width: 'auto',
                  display: 'flex',
                  flexDirection: 'column',
                  padding: { md: '2rem 6rem', xs: 0, sm: 0 },
                }}
              >
                <MenuAppBar toggleMode={toggleMode} mode={mode} isHome={true} />
                <HomeFirstSection />
              </Box>
            ) : (
              <Box sx={{ padding: { md: '2rem 6rem', xs: 0, sm: 0 } }}>
                <MenuAppBar toggleMode={toggleMode} mode={mode} isHome={false} />
              </Box>
            )
          )}

          <Routes>
            <Route path="/register" element={<Register onRegister={handleRegister} />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />

            {/* App main routes */}
            <Route path="/"
              element={
                <PrivateRoute isLoggedIn={isLoggedIn}>
                  <HomePage />
                </PrivateRoute>} />
            <Route path="/home" element={
              <PrivateRoute isLoggedIn={isLoggedIn}>
                <HomePage />
              </PrivateRoute>
            } />
            <Route path="/about" element={
              <PrivateRoute isLoggedIn={isLoggedIn}>
                <AboutPage />
              </PrivateRoute>
            } />
            <Route path="/course" element={
              <PrivateRoute isLoggedIn={isLoggedIn}>
                <Course />
              </PrivateRoute>
            } />
            <Route path="/dashboard" element={
              <PrivateRoute isLoggedIn={isLoggedIn}>
                <Dashboard />
              </PrivateRoute>
            } />
            <Route path="/notes" element={
              <PrivateRoute isLoggedIn={isLoggedIn}>
                <Notes />
              </PrivateRoute>
            } />
            <Route path="/material" element={
              <PrivateRoute isLoggedIn={isLoggedIn}>
                <Material />
              </PrivateRoute>
            } />
            <Route path="/resources" element={
              <PrivateRoute isLoggedIn={isLoggedIn}>
                <Resources />
              </PrivateRoute>
            } />
            <Route path="/download" element={
              <PrivateRoute isLoggedIn={isLoggedIn}>
                <DownloadPage />
              </PrivateRoute>
            } />
            <Route path="/progress" element={
              <PrivateRoute isLoggedIn={isLoggedIn}>
                <ProgressTracker />
              </PrivateRoute>
            } />
            <Route path="/profile" element={
              <PrivateRoute isLoggedIn={isLoggedIn}>
                <ProfilePage />
              </PrivateRoute>
            } />
            <Route path="/contact" element={
              <PrivateRoute isLoggedIn={isLoggedIn}>
                <ContactPage />
              </PrivateRoute>}
            />
          </Routes>

          {/* Footer only if not on login/register */}
          {!isLoginPage &&
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <Footer />
            </PrivateRoute>
          }
        </Suspense>
      </Box>
      <Box sx={{ position: "fixed", right: '10px', bottom: '10px' }}>
        <Box onClick={handleModal} sx={{ cursor: 'pointer', position: 'relative', width: '40px', height: '40px', borderRadius: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'red', color: 'imgBtn.primary' }}>
          Ai
        </Box>
      </Box>

      {openModal ? <AiModal open={openModal} onClose={handleClose} /> : ""}
    </RouteChangeHandler>
  );
}

export default App;
