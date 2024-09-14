import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes,HashRouter } from "react-router-dom";
import Home from './components/Home.js'
import Footer from './components/Footer.js';
import PumpingSolution from './components/Pumping.js';
import About from './components/About.js';
import ContactUs from './components/ContactUs.js';
import CADservices from './components/services/CADservices.js';
import FEA from './components/services/FEA.js'
import MachineDesign from './components/services/MachineDesign.js';
import SPM from './components/services/SPM.js'
import ReverseEngineering from './components/services/ReverseEng.js';
import SheetMetalDesign from './components/services/SheetMetal.js';
import MotionAnalysis from './components/services/MotionAny.js';
import MoldDesign from './components/Mould.js';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/mechwebsite/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/pumping' element={<PumpingSolution/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path='/CADservices' element={<CADservices/>}/>
        <Route path='/design/FEA' element={<FEA/>}/>
        <Route path='design/machinedesign'element={<MachineDesign/>}/>
        <Route path='design/spm' element={<SPM/>}/>
        <Route path='design/reeng' element={<ReverseEngineering/>}/>
        <Route path='design/sheetmetal' element={<SheetMetalDesign/>}/>
        <Route path='design/motionanlysis' element={<MotionAnalysis/>}/>
        <Route path='design/mould' element={<MoldDesign/>}/>
      </Routes>
      <Footer/>
    </Router>
    
    </>
  );
}

export default App;
