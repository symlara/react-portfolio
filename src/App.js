import React, { useState } from 'react';
import './index.css';

import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";




function App() {
const [currentPage, setCurrentPage] = useState('About');

const renderPage = () => {
  switch (currentPage) {
    // be sure to capitalize strings
      case "About":
        return <About />;
        case "Portfolio":
          return <Portfolio />;
          case "Contact":
            return <Contact />;
            case "Resume":
              return <Resume />;
        default:
          return null;
  }
};



return (
  <div>
    <div>
    <Header currentPage={currentPage} setCurrentPage={setCurrentPage}></Header>
    </div>
    
    <div>
    <main>
    {renderPage()}
      </main>
    </div>

    <div>
      { <Footer></Footer> }
    </div>
  </div>
  );
}

export default App;
