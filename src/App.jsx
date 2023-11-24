import React from 'react';
import Header from './Header.jsx';
import FeedParent from './pages/Feed.jsx';
import FeedIndex from './pages/FeedIndex.jsx';
import DetailIndex from './pages/Detail.jsx';
import ArchivedIndex from './pages/Archived.jsx';
import Navbar from './components/Navbar/index.jsx';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className='container'>
      <Header />
      <div className='container-view'>
        <Routes>
          <Route path='/' element={<FeedParent />}>
            <Route index element={<FeedIndex />} />
            <Route path=':id' element={<DetailIndex />} />
          </Route>
          <Route path='/archived' element={<ArchivedIndex />} />
        </Routes>
      </div>
      <Navbar />
    </div>
  );
};

export default App;
