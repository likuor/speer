import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

import './css/body.css';
import './css/app.css';
import './css/header.css';

const container = document.getElementById('app');
const root = createRoot(container); // createRootを直接呼び出す
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
