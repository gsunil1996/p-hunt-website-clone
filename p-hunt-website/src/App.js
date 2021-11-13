import logo from './logo.svg';
import './App.css';
import AboutPage from './Components/AboutPage/AboutPage';
import HowToPostAProduct from './Components/HowToPost/HowToPostAProduct';
import { Tools } from './Components/Tools/Tools';
import { Jobs } from './Components/Jobs/Jobs';
import { NavBar } from './Components/NavBar/navbar';
import { Route, Routes } from 'react-router';
import { Community } from './Components/communityPage/communityPage';
import CreateProduct from './Components/createProduct/CreateProduct';
import CreateProductForm from './Components/createProduct/CreateProductForm';
import HomeProduct from './Components/home/HomeProduct';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/tools" element={<Tools />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/howToPostAProduct" element={<HowToPostAProduct />} />
        <Route path="/community" element={<Community />} />
        <Route path="/createProd" element={<CreateProduct />} />
        <Route path="/createproductform" element={<CreateProductForm />} />
        <Route path="/" element={<HomeProduct /> } />
        
      </Routes>
    </div>
  );
}

export default App;
