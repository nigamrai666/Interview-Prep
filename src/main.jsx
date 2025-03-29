import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
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
import User from './components/User/User.jsx';
// import Github, { githubInfoLoader } from './components/Github/Github.jsx';
import Interview from './components/Interview/Interview.jsx';
import CardDetail from './components/Interview/CardDetail.jsx';
import Practice from './components/Practice/Practice.jsx'; // Import ClassSelection component
import Topic from './components/Practice/Topic.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="interview-prep" element={<Interview />} />
      <Route path="interview-prep/:cardId" element={<CardDetail />} />
      <Route path="about" element={<About />} />
      <Route path="contactUs" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
      <Route path="practice" element={<Practice />} /> {/* Add this route */}
      <Route path="practice/:cardId" element={<Topic />} />
      {/* <Route loader={githubInfoLoader} path='github' element={<Github />} /> */}
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
