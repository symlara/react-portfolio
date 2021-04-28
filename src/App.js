import React, { useState } from 'react';
import './App.css';
import Header from "./components/Header";
import About from "./components/About";




function App() {
  const [currentCategory, setCurrentCategory] = useState("about");

  //	// This function checks to see which tab is selected and then generates the appropriate tab.
 const renderCategory = () => {
  switch (currentCategory) {
    case "about":
      return <About />;
      default:
        return null;
  }
 }
  return (
    <div>
      <div className="header">
        <Header currentCategory={currentCategory} setCurrentCategory={setCurrentCategory}></Header>
        </div>
        <div>
          <main>{renderCategory()}</main>
        </div>
        <div>
          {/* <Footer></Footer> */}
        </div>
      </div>

  );
}

export default App;
