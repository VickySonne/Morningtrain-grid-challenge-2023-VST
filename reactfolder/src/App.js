import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HeaderNav from './components/HeaderNav';
import FooterBar from './components/FooterBar';
import FrontPage from './pages/FrontPage';
import AnimalsGrid from './pages/AnimalsGrid';
import FlowersGrid from './pages/FlowersGrid';
import InteriorGrid from './pages/InteriorGrid';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
          <HeaderNav/>

          <Routes>
            <Route path="/" element={<FrontPage />} />
            <Route path="/Animals" element={<AnimalsGrid />} />
            <Route path="/Flowers" element={<FlowersGrid />} />
            <Route path="/Interior" element={<InteriorGrid />} />
          </Routes>
          
          <FooterBar/>
        </BrowserRouter>
    </div>
  );
};

export default App;
