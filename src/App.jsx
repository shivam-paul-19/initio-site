import AboutUs from './about';
import './App.css';
import Contectus from './contact';
import Events from './events';
import Footer from './footer';
import Home from './home';
import NavBar from './navbar';
import SponserPage from './sponser';

import { useEffect, useState } from 'react';

function App() {
  let [page, setPage] = useState([true, false, false, false]);

  useEffect(() => {
    window.scroll(0, 0);
  }, [page]);

  return (
    <>
      <NavBar setPage={setPage} />
      {page[0] && <><Home /><Events/></>}
      {page[1] && <SponserPage />}
      {page[2] && <AboutUs />}
      {page[3] && <Contectus />}
      <Footer />
    </>
  )
}

export default App;
