import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//DnD
import { RecoilRoot } from 'recoil';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Title from './pages/title/Title';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DndProvider backend={HTML5Backend}>
    <React.StrictMode>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Title />} />
          </Routes>
          <App />
        </BrowserRouter>
      </RecoilRoot>
    </React.StrictMode>
  </DndProvider>,
);
