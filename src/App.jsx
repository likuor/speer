import React from 'react';
import Header from './Header.jsx';
import Feed from './pages/Feed.jsx';
import Navbar from './components/Navbar/index.jsx';

const App = () => {
  return (
    <div className='container'>
      <Header />
      <div className='container-view'>
        <Feed />
      </div>
      <Navbar />
    </div>
  );
};

export default App;
