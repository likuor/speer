import React from 'react';
import { Outlet } from 'react-router-dom';

const Feed = () => {
  return (
    <div>
      <div>Feed</div>
      <Outlet />
    </div>
  );
};

export default Feed;
