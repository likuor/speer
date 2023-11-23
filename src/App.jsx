import React from 'react';
import Header from './Header.jsx';
import Feed from './pages/Feed.jsx';

const App = () => {
  return (
    <div className='container'>
      <Header />
      <div className='container-view'>
        <Feed />
      </div>
    </div>
  );
};

export default App;
