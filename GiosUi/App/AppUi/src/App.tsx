import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Map from "./views/Map";
import Items from "./views/Items";

function App() {

  return (
      <BrowserRouter>

          <Routes>
              <Route element={<Layout />}>
                  <Route path="/" element={<Items />} />
                  <Route path="/users" element={<Map />} />
              </Route>
          </Routes>

      </BrowserRouter>
  )
}

export default App
