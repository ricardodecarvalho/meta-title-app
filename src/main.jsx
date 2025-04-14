import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.jsx'
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  Outlet
} from 'react-router-dom'

export const Menu = () => {
  return <Outlet />
}

export const About = () => (
  <div>
    <h1>About Us</h1>
    <p>This is the about page of MyApp.</p>
  </div>
);

export const Contact = () => (
  <div>
    <h1>Contact Us</h1>
    <p>This is the contact page of MyApp.</p>
  </div>
);

export const Admin = () => (
  <div>
    <h1>Admin Panel</h1>
    <p>This is the admin panel of MyApp.</p>
  </div>
);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Menu />} path='/'>
          <Route index element={<App />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="admin" element={<Admin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)