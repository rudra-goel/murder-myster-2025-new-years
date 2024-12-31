import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import Character from './Pages/Character';
import NotFoundPage from './Pages/NotFoundPage'

import './Pages/Styles.css'
import {Sanjeev, Pravin, Milan, Ashu, 
        Muskaan, Ashlita, Uma, Suchita, 
        Nidhi, Nakul, Jyoti, Nirmal, 
        Ashok, Reena, Shiven, Madhu, 
        Ishita, Suhani, Saloni, Lalitha, 
        Nehal, Tanish, Advait, Deepali,
        Amol, Ajit, Neha, Devna, 
        Basu } from './Characters';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} /> 

        <Route path="/0B850C21FDE6CF68250F6A7D94EE2E044D9B9E3FFCFC3C638167D4E044F43362" element={<Character characterDescription={Sanjeev} />} /> 
        <Route path="/05C620DFE4D7E638767479DA818EF780C6E65BEF060113DBF3613BA8B4661918" element={<Character characterDescription={Pravin} />} /> 


        <Route path="*" element={<NotFoundPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;
