import { Routes, Route } from 'react-router-dom';
import { FinderLayout } from './components/FinderLayout';
import { SectionProvider } from './context/SectionContext';
import { Home } from './pages/Home';
import { Product } from './pages/Product';
import { Visual } from './pages/Visual';
import { About } from './pages/About';

function App() {
  return (
    <SectionProvider>
      <Routes>
        <Route path="/" element={<FinderLayout />}>
          <Route index element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="visual" element={<Visual />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </SectionProvider>
  );
}

export default App;