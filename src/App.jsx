import React from 'react';
import Header from './Header.jsx';
import Feed from './pages/Feed.jsx';
import Archived from './pages/Archived.jsx';
import Navbar from './components/Navbar/index.jsx';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className='container'>
      <Header />
      <div className='container-view'>
        {/* <Feed /> */}
        <Routes>
          <Route index element={<Feed />} />
          <Route path='/archived' element={<Archived />} />
        </Routes>
      </div>
      <Navbar />
    </div>
  );
};

export default App;
