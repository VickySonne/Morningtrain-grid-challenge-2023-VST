import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HeaderNav from './components/HeaderNav';
import FooterBar from './components/FooterBar';
import FrontPage from './pages/FrontPage';
import AnimalsGrid from './pages/AnimalsGrid';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
          <HeaderNav/>

          <Routes>
            <Route path="/" element={<FrontPage />} />
            <Route path="/Animals" element={<AnimalsGrid />} />
          </Routes>
          
          <FooterBar/>
        </BrowserRouter>
    </div>
  );
};

export default App;
