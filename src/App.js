import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Main from './components/Main';
import About from './components/About'
import Contact from './components/Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import React from 'react';
// import { Link } from 'react-router-dom';

// const Header = () => {
//   return (
//     <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
//       <div className="container flex-row justify-space-between-lg justify-center align-center">
//         <Link className="text-light" to="/">
//           <h1 className="m-0">Tech Thoughts</h1>
//         </Link>
//         <p className="m-0">Get into the mind of a programmer.</p>
//       </div>
//     </header>
//   );
// };




function App() {
  return (
  <BrowserRouter>
  <Header/>
  <Hero/>
  <Routes>
  
    
    <Route path="/" element={<About />} />
    
    <Route path="/portfolio" element={<Main />} />
    <Route path="/contact" element={<Contact />} />
      
      
      
      
    
  </Routes>
  <Footer/>
   </BrowserRouter>
  );
  
}

export default App;
