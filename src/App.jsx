import React from 'react';
import Header from './Header.jsx';
import Home from './pages/Home.jsx';

const App = () => {
  return (
    <div className='container'>
      <Header />
      <div className='container-view'>
        <Home />
      </div>
    </div>
  );
};

export default App;
