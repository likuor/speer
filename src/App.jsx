import React from 'react';
import Header from './Header.jsx';
import Feed from './pages/Feed.jsx';
import Detail from './pages/Detail.jsx';
import Archived from './pages/Archived.jsx';
import Navbar from './components/Navbar/index.jsx';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className='container'>
      <Header />
      <div className='container-view'>
        <Routes>
          <Route path='/' element={<Feed />}>
            <Route path=':id' element={<Detail />} />
          </Route>
          <Route path='/archived' element={<Archived />} />
        </Routes>
      </div>
      <Navbar />
    </div>
  );
};

export default App;
