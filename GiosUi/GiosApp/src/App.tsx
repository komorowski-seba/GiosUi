// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import 'antd/dist/reset.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MapViewA from 'app/views/MapView.tsx';
import ListViewA from 'app/views/ListView.tsx';
import './App.css'

export default function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<UsersView />} />
            </Route>
        </Routes>
      </BrowserRouter>
  );
}