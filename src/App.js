
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Cart from './Pages/Cart.jsx';
import LoginSignUp from './Pages/LoginSignUp.jsx';
import Product from './Pages/Product.jsx';
import Shop from './Pages/Shop.jsx';
import ShopCategory from './Pages/ShopCategory';
import Footer from './Components/Footer/Footer.jsx'
import banner_mens from './Components/Assets/banner_mens.png'
import banner_kids from './Components/Assets/banner_kids.png'
import banner_women from './Components/Assets/banner_women.png'

function App() {
  return (
   <div>
    <BrowserRouter>
    <Navbar/>
     
    <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/mens' element={<ShopCategory banner={banner_mens}category="men"/>}/>
      <Route path='/Womens' element={<ShopCategory banner={banner_women} category="women"/>}/>
      <Route path='/kids' element={<ShopCategory banner={banner_kids}category="kid"/>}/>
      <Route path='/product' element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
      </Route>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<LoginSignUp/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
