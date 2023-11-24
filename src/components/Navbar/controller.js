import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const NavbarController = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // workable when the page is reloaded
  const isRootPath =
    location.pathname === '/' || /^[\/][a-f0-9]{24}$/i.test(location.pathname);
  const [page, setPage] = useState(
    isRootPath ? '' : location.pathname.replace('/', '')
  );

  const handleChange = (event, newValue) => {
    setPage(newValue);
    navigate('/' + newValue);
  };

  return { page, handleChange };
};

export default NavbarController;
