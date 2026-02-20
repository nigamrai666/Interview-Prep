import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import Layout from './components/Layout/Layout.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';

import Interview from './components/Interview/Interview.jsx';
import CardDetail from './components/Interview/CardDetail.jsx';

import Practice from './components/Practice/Practice.jsx';
import Topic from './components/Practice/Topic.jsx';

import Login from './components/User/Login.jsx';
import Register from './components/User/Register.jsx';
import PrivateRoute from './components/User/PrivateRoute.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      
      {/* Public Routes */}
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contactUs" element={<Contact />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />

      {/* Protected Routes */}
      <Route
        path="interview-prep"
        element={
          <PrivateRoute>
            <Interview />
          </PrivateRoute>
        }
      />
      <Route
        path="interview-prep/:cardId"
        element={
          <PrivateRoute>
            <CardDetail />
          </PrivateRoute>
        }
      />

      <Route
        path="practice"
        element={
          <PrivateRoute>
            <Practice />
          </PrivateRoute>
        }
      />
      <Route
        path="practice/:cardId"
        element={
          <PrivateRoute>
            <Topic />
          </PrivateRoute>
        }
      />

    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);