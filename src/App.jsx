import AboutUs from './about';
import './App.css';
import Contectus from './contact';
import EventPage from './eventPage';
import Events from './events';
import Footer from './footer';
import Home from './home';
import NavBar from './navbar';
import SponserPage from './sponser';

import { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  let [page, setPage] = useState([true, false, false, false]);
  let router = createBrowserRouter([
    {
      path: '/',
      element: <><Home /><Events/></>
    },
    {
      path: '/events',
      element: <EventPage />
    }, 
    {
      path: "/sponsors",
      element: <SponserPage />
    },
    {
      path: "/about",
      element: <AboutUs />
    },
    {
      path: "/contact",
      element: <Contectus />
    }
  ])

  useEffect(() => {
    window.scroll(0, 0);
  }, [page]);

  return (
    <>
      <RouterProvider router={router}/>
      {/* {page[0] && <><Home /><Events/></>}
      {page[1] && <SponserPage />}
      {page[2] && <AboutUs />}
      {page[3] && <Contectus />} */}
      <Footer />
    </>
  )
}

export default App;
