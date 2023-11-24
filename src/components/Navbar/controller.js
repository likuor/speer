import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NavbarController = () => {
  const [page, setPage] = useState('');
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setPage(newValue);
    navigate('/' + newValue);
  };

  return { page, handleChange };
};

export default NavbarController;
