// import './App.css';
// import './Bootstrap/Bootstrap.css'
// import Sidebar from './Components/SideBar';
// import Searchbar from './Components/Searchbar';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './Components/Home';
// import Shorts from './Components/Shorts';
// import { createContext } from 'react';
// import { useState } from 'react';
// export const store = createContext();
// function App() {
//   let studentdata = [
//     {
//       Name: 'Tester',
//       Roll: '1',
//       Branch: 'CSE',
//     },
//     {
//       Name: 'Tester1',
//       Roll: '2',
//       Branch: 'ECE',
//     }

//   ]
//   const [data, setData] = useState(studentdata)
//   return (
//     <>
//       <BrowserRouter>
//         <store.Provider value={[data, setData]}>
//           <div className='container-fluid bg-yellow'>
//             <div className='row'>
//               <Sidebar />
//               <div className='col-md-8 bg-success'>
//                 <Searchbar data={studentdata} />
//                 <Routes>
//                   <Route path='/Home' element={<Home />} />
//                   <Route path='/Shorts' element={<Shorts />} />

//                 </Routes>

//               </div>
//             </div>
//           </div>
//         </store.Provider>
//       </BrowserRouter>

//     </>
//   );
// }
// export default App;

import React from "react";
import Products from "./Components/Products";
function App(){
  return(
    <>
    <div className="container-fluid bg-info">
      
    </div>
    </>
  )
}