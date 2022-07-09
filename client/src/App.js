import { Routes, Route } from 'react-router-dom';
import { Shops } from './pages/Shops/Shops';
import { ShoppingCart } from './pages/ShoppingCart/ShoppingCart';
import { Navigation } from './components/Navigation/Navigation';
import { ProductCard } from './components/ProductCard/ProductCard';
import './App.css';

function App() {
  return (
    <div className="App">
     <Navigation />
      <Routes>
        <Route exact path="/" element={<Shops />} />
        {/* <Route path="/products/:productId" element={<ProductCard />} /> */}
        <Route path="/cart" element={<ShoppingCart />} />
    </Routes>
    </div>
  );
}

export default App;
