import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Desktop from './Pages/Desktop';

const Rotas = () => {
     return (
          <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/desktop" element={<Desktop />} />
          </Routes>
     );
};

export default Rotas;
