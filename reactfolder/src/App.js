import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HeaderNav from './components/HeaderNav';
import FooterBar from './components/FooterBar';
import FrontPage from './pages/FrontPage';
import GridPage from './pages/GridPage';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
          <HeaderNav/>

          <Routes>
            <Route path="/" element={<FrontPage />} />
            <Route path="/GridPage" element={<GridPage />} />
          </Routes>
          
          <FooterBar/>
        </BrowserRouter>
    </div>
  );
};

export default App;
