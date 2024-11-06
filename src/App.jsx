import "./App.css";
import "./assets/css/tailwind.css";
import "./assets/css/materialdesignicons.min.css";
import "leaflet/dist/leaflet.css";
import React from "react";
import Index from "./components/IndexPage.jsx";
import Formation from "./components/formationPage.jsx";
import Jobs from "./components/recruitment/Jobs";
import IndexFive from "./components/index-fivePage.jsx";
import Gallery from "./components/Gallery/gallery";
import GalleryDetail from "./components/Gallery/detailgallery";
import TeamPage from "./components/TeamPage";
import TeamNurse from "./components/TeamNurse";
import ContractPage from "./components/ContractPage";
import LanguagesPage from "./components/LanguagesPage";
import { HelmetProvider } from "react-helmet-async";
import { AnimatePresence, motion } from "framer-motion";
import ReactGa from 'react-ga'
import { Analytics } from "@vercel/analytics/react"
const TRACKING_ID="9910864206"
ReactGa.initialize(TRACKING_ID)
import TeamGlass from "./components/TeamGlass";
const App=React.memo( function App() {
  const location = useLocation();
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    in: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
    out: {
      opacity: 0,
      y: -50,
      scale: 0.95,
    },
  };

  const pageTransition = {
    duration: 0.8,
    ease: [0.42, 0, 0.58, 1],
  };

  const pageStyle = {
    position: "absolute",
    width: "100%",
  };

  return (
    
    <HelmetProvider>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
    
          <Route
            path="/"
            element={
              <motion.div
                style={pageStyle}
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Index />
              </motion.div>
            }
          />
          <Route
            path="/formation-professionnelle-agadir"
            element={
              <motion.div
                style={pageStyle}
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={{
                  ...pageTransition,
                  duration: 1,
                }}
              >
                <Formation />
              </motion.div>
            }
          />
          <Route
            path="/formation-professionnelle-agadir/:name"
            element={
              <motion.div
                style={pageStyle}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <IndexFive/>
              </motion.div>
            }
          />
          <Route
            path="/jobs/:type"
            element={
              <motion.div
                style={pageStyle}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  duration: 0.8,
                  ease: [0.42, 0, 0.58, 1],
                }}
              >
                <Jobs/>
              </motion.div>
            }
          />
          <Route
            path="/jobs"
            element={
              <motion.div
                style={pageStyle}
                initial={{ opacity: 0, x: -200 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 200 }}
                transition={{
                  duration: 0.5,
                  ease: [0.42, 0, 0.58, 1],
                }}
              >
                <Jobs />
              </motion.div>
            }
          />
          <Route
            path="/gallery"
            element={
              <motion.div
                style={pageStyle}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <Gallery />
              </motion.div>
            }
          />
          <Route
            path="/gallery/:id"
            element={
              <motion.div
                style={pageStyle}
                initial={{ opacity: 0, x: -150 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 150 }}
                transition={{
                  duration: 0.8,
                  ease: [0.42, 0, 0.58, 1],
                }}
              >
                <GalleryDetail />
              </motion.div>
            }
          />
          <Route path="/developpement-services-agadir" element={<TeamPage />} />
          <Route path="/soins-infirmiers-agadir" element={<TeamNurse />} />
          <Route path="/recrutement-international-agadir" element={<ContractPage />} />
          <Route path="/nettoyage-facades-agadir" element={<TeamGlass />} />
          <Route
            path="/languages"
            element={
              <motion.div
                style={pageStyle}
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={{
                  duration: 0.6,
                  ease: [0.43, 0.13, 0.23, 0.96],
                }}
              >
                <LanguagesPage />
              </motion.div>
            }
          />
        </Routes>
        <Analytics/> 
      
      </AnimatePresence>
     
    </HelmetProvider>
  );
})

export default App;
