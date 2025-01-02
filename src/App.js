import { HashRouter as Router, Routes, Route } from 'react-router-dom';
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
        Basu, Shreya, Omkar, Nidhi_Malani } from './Characters';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} /> 

        <Route path="/0B850C21FDE6CF68250F6A7D94EE2E044D9B9E3FFCFC3C638167D4E044F43362" element={<Character characterDescription={Sanjeev} />} /> 
        <Route path="/05C620DFE4D7E638767479DA818EF780C6E65BEF060113DBF3613BA8B4661918" element={<Character characterDescription={Pravin} />} /> 
        <Route path="/ec3ae6550b9446364138461d6a682d09d101ac1a5ed8a9298e0a50869fd832f7" element={<Character characterDescription={Milan} />} /> 
        <Route path="/da333bd32ca7005f0ea4e0b6c4337e40a3c8a478690a5955f054d3bca3fdf470" element={<Character characterDescription={Ashu} />} /> 
        <Route path="/b1898374fadbc85b14574138af1f6180fa7dda972965e9379135009adef8bfc7" element={<Character characterDescription={Muskaan} />} /> 
        <Route path="/74762175bc43885a1bbd6796b5b7756cf011725d3f6e9cec042283e858d890d2" element={<Character characterDescription={Ashlita} />} /> 
        <Route path="/d07ec364e90ab540fd9c3917ffcc9ea1bbc254f67418d64e917b4bc07803963e" element={<Character characterDescription={Uma} />} /> 
        <Route path="/1ee46bc94d50b659d2739195134b3a4d6ac81442d72e3f8edf010420afb69e90" element={<Character characterDescription={Suchita} />} /> 
        <Route path="/68e2d1cab60bec8f178ca24b5f45eb4d7b17d64cf6f663ccfeb70988a907c57f" element={<Character characterDescription={Nidhi} />} /> 
        <Route path="/4ec8d79bfc50dfd2a4bc989790132d2f614d103cd869866aef4a5896e28331f1" element={<Character characterDescription={Nakul} />} /> 
        <Route path="/7aa429bef7cb1e9b35dee1c17f4e4fc80a30ec15d40b69fb04f0be038fa72870" element={<Character characterDescription={Jyoti} />} /> 
        <Route path="/33f2d660ec445dbc129bd9a912c50c215c1fdfe09076203ee6937ba7e9c57a6c" element={<Character characterDescription={Nirmal} />} /> 
        <Route path="/def12995bb4e9bc4c0ae80f58954529da05569f4fc29c21f43278b5f60d0f7bb" element={<Character characterDescription={Ashok} />} /> 
        <Route path="/710e855d99466d974d4f6fc440d09880ddd271492840cbbbbbf2751659ca2c14" element={<Character characterDescription={Reena} />} /> 
        <Route path="/80eefaac209cfba58d2c2d7277976b981fdf2f584ede4274edd15b4f21ea771b" element={<Character characterDescription={Shiven} />} /> 
        <Route path="/e0f3fc9ba96f38ba7dfe376ebfe77b5effab99de7a9180d2cd4b8a7dd505df6e" element={<Character characterDescription={Madhu} />} /> 
        <Route path="/eaa6899af61b91ed77d17c0d864af007e5fd01b8393fd7bebf088f86d1ccc6d6" element={<Character characterDescription={Ishita} />} /> 
        <Route path="/8cc4a0fe19f342680b716880c010960de2236f104b87569c17c8b5430d019009" element={<Character characterDescription={Suhani} />} /> 
        <Route path="/223e097d7e9e9a81171a3f50d3f34026648791f1b0b51823458f784510fd4754" element={<Character characterDescription={Saloni} />} /> 
        <Route path="/585ff845cacceece3493ce2958263081de51333391310c38e3007c1478bd452f" element={<Character characterDescription={Lalitha} />} /> 
        <Route path="/0459baab41d2b25205088796de9e27d6464e886811c266fa5beef4e2a22b8e39" element={<Character characterDescription={Nehal} />} /> 
        <Route path="/d2ac0bb9d9694fb646e5513625167dc07c92477d3eb8c22667ca4458e23c270c" element={<Character characterDescription={Tanish} />} /> 
        <Route path="/52837e36f66af2fd35acc108a79cd0a9ddc4c32a4db15f135d58e355eedba2d2" element={<Character characterDescription={Advait} />} /> 
        <Route path="/e328c65ed09c0fe7463ea10a9a2843dc2a36284ff597071a64ac114712f9ae94" element={<Character characterDescription={Deepali} />} /> 
        <Route path="/4328b9fa547d9ccc0db03441b45d3b2e7e88e5f9981e6f47172ec275d4f49385" element={<Character characterDescription={Amol} />} /> 
        <Route path="/fc1e3aefc574036c24d24d0e3b394e89ab04ffdc44d692b14578b11fdbbef7f2" element={<Character characterDescription={Ajit} />} /> 
        <Route path="/07f3d7f0602818e2275ce2c62edbbda6d9e39b5eb9571c4e9d510b6e6a1c02e4" element={<Character characterDescription={Neha} />} /> 
        <Route path="/afc4d79681166c9d7de6f4bc5558d617083aefb2921ae027d6ab133c1772767b" element={<Character characterDescription={Devna} />} /> 
        <Route path="/d18c277cdf0e71b644e59eec61def725c5f1cb913c7d68ba8336532b151ab220" element={<Character characterDescription={Basu} />} /> 
        <Route path="/d5d9dc386fe4dd2dae4cca1edf2d599782d035d6cdba4ab2ddf615acb3853e30" element={<Character characterDescription={Shreya} />} /> 
        <Route path="/e9df13e40857f0b79f0f1afb74dac6c16c824c0faf1868111f12bb7551209ed2" element={<Character characterDescription={Omkar} />} /> 
        <Route path="/70f7d884290cf0815efd3f9995211e4fbc73c88d75aa63e640d7808b45eb0e66" element={<Character characterDescription={Nidhi_Malani} />} /> 



        <Route path="*" element={<NotFoundPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;
