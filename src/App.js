import React from 'react';
import Components from './components/Components';
import ScrolToTop from './components/Elements/ScrolToTop';
import Loader from "./components/Elements/Loader";
import { ToastContainer } from 'react-toastify';

const App = () => {
  
  return (
    <div className="App">
      <Components />
      <ScrolToTop/>
      <ToastContainer />
      {/* <Loader/>   */}
    </div>
  );
}

export default App;