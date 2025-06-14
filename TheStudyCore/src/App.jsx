import { Box } from '@mui/material'
import './App.css'
import Footer from './components/Footer/Footer'
import ImgSlider from './components/ImgSlider/ImgSlider'
import MenuAppBar from './components/Navbar/Navbar'
import HomePage from './pages/HomePage'
import { Route, Router, Routes, useLocation } from 'react-router'
import AboutPage from './pages/AboutPage'
import Course from './pages/Course'
import Subject from './pages/Subject'
import AiAssistant from './pages/AiAssistant'
import Notes from './pages/Notes'
import Resources from './pages/Resources'
import ArkDoubtit from './pages/ArkDoubtit'
import HomeFirstSection from './components/HomeFirstSection/HomeFirstSection'
import Dashboard from './components/Dashboard/Dashboard'
import Material from './components/Material/Material'
import ProgressTracker from './components/ProgrssTracker/ProgressTracker'
import ProfilePage from './components/Profile/ProfilePage'
import DownloadPage from './pages/Download'
import ContactPage from './pages/ContactPage'

function App({ toggleMode, mode }) {
  const location = useLocation();
  const isHome = location.pathname === '/' || location.pathname === '/home';
  return (
    <>
      <Box
      // className="app-container"
      >
        {isHome && (
          <Box className="app-container" sx={{
            bgcolor: '#3241B8', height: { md: '32rem', sm: 'auto', xs: 'auto' }, minWidth: '40vh', width: 'auto', display: 'flex',
            flexDirection: 'column',
            // min-height: 40vh;
            padding: { md: "2rem 6rem 2rem 6rem", xs: 0, sm: 0 }
          }}>
            <MenuAppBar toggleMode={toggleMode} mode={mode} isHome={true} />
            <HomeFirstSection />
          </Box>
        )}

        {!isHome && (
          <Box sx={{
            padding: { md: "2rem 6rem 2rem 6rem", xs: 0, sm: 0 }
          }}>
            <MenuAppBar toggleMode={toggleMode} mode={mode} isHome={false} />
          </Box>
        )}
        {/* <HomePage /> */}
        <Box 
        sx={{ }}
        >

          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/home' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/course' element={<Course />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/notes' element={<Notes />} />
            <Route path='/material' element={<Material />} />
            <Route path='/resources' element={<Resources />} />
            <Route path='/download' element={<DownloadPage />} />
            <Route path='/progress' element={<ProgressTracker />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='/contact' element={<ContactPage />} />
          </Routes>
        </Box>

      </Box>
      <Footer />
    </>
  )
}

export default App
