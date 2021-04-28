import React, { useState } from 'react';
import './App.css';
import Header from "./components/Header";
import About from "./components/About";
// import Footer from "./components/Footer";




function App() {
  // const [contactSelected, setContactSelected] = useState(false);
const [currentCategory, setCurrentCategory] = useState(false);
const [contactSelected, setContactSelected] =  useState(false);

return (
  <div>

<div>
    <Header currentCategory={currentCategory} setCurrentCategory={setCurrentCategory}></Header>
    </div>
    
    <main>
      <About></About>
    </main>

    <div>
      {/* <Footer></Footer> */}
    </div>
  </div>
  );
}

export default App;
