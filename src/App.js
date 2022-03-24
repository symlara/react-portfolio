import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import Header from "./components/Header";
import About from './components/About';
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";





class App extends Component {
  // const [currentTab, setCurrentTab] = useState("#");
  
  // const renderTab = () => {
  
  //   switch (currentTab) {
  //     // be sure to capitalize strings
  //       case "about":
  //         return <About />;
  //         case "portfolio":
  //           return <Portfolio />;
  //           case "contact":
  //             return <Contact />;
  //             case "resume":
  //               return <Resume />;
  //         default:
  //           return null;
  //   }
  // };
render () {
  return (
    <Router>
    <div>
      <div>
        <Header />
      {/* <Header currentTab={currentTab} setCurrentTab={setCurrentTab}></Header> */}
      </div>
     
      
      <div>
      <main>
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/resume" component={Resume} />

      {/* {renderTab()} */}
        </main>
      </div>
  
      <div>
        <Footer />
        {/* { <Footer></Footer> } */}
      </div>
  
  
    </div>
    </Router>
    )
  };
}
  

export default App;
