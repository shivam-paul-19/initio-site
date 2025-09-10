import './App.css';
import Home from './home';
import NavBar from './navbar';
import SponserPage from './sponser';

import { useState } from 'react';

function App() {
  let [page, setPage] = useState([true, false, false, false]);

  return (
    <>
      <NavBar setPage={setPage} />
      {page[0] && <Home />}
      {page[1] && <SponserPage />}
    </>
  )
}

export default App
