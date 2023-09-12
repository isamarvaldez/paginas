import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Principal from './pages/Principal/index'
import Possplash from './pages/Possplash/index'
import Recuperacao from './pages/Recuperacao/index'
import { Route, Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <Routes>
      <Route path='recuperacao' element={<Recuperacao/>} />
      <Route path='principal' element={<Principal />} />
      <Route path='possplash' element={<Possplash />} />
    </Routes> */}
          <Recuperacao/>

  </React.StrictMode>,
)
