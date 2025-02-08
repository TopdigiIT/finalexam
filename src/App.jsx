import React from 'react';
import { Router, Route, Routes } from 'react-router-dom';
import Aboutus from './assets/Pages/Home/Aboutus';
import BlogPage from './assets/Pages/Home/Blogpage';
import Header from './assets/Components/Header';
import Home from './assets/Pages/Home/Home';
import Footer from './assets/Components/Footer';
import Newsletter from './assets/Pages/Home/Newsletter';
import ContactUs from './assets/Pages/Home/Contactus';
import CategoryPage from './assets/Pages/Home/Store';
import Phone from './assets/Pages/Products/Phones/Phone';
import Watch from './assets/Pages/Products/Watches/Watch';
import Laptop from './assets/Pages/Products/Laptops/Laptop';
import NotFoundPage from './assets/Pages/Notfound';
import Login from './assets/Pages/Login/Login';
import SellerDashboard from './assets/Pages/Dashboard/Sellerdashboard';
import BuyerDashboard from './assets/Pages/Dashboard/Buyerdashboard';
import ProductUpload from './assets/Pages/Products/ProductUpload';
import AdminPage from './AdminPage';
import WhatsAppButton from './WhatsAppButton';






const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<> <Home /> <CategoryPage /> <Newsletter /> </>} />
        <Route path='/aboutus' element= {<Aboutus />}/>
        <Route path='/contactus' element= {<ContactUs />}/>
        <Route path='/blogs' element= {<BlogPage />}/>
        <Route path='/store' element= {<CategoryPage />}/>
        <Route path="/store:phone" element={<> <CategoryPage /> <Phone /> </>} />
        <Route path="/store:watch" element={<> <CategoryPage /> <Watch /> </>} />
        <Route path="/store:laptop" element={<> <CategoryPage /> <Laptop /> </>} />
        <Route path="/seller-dashboard" element={<SellerDashboard />} />
        <Route path="/buyer-dashboard" element={<BuyerDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFoundPage />}/>


        <Route path="seller/product-upload" element={<ProductUpload />}/>

        <Route path="admin" element={<AdminPage />}/>
        
      </Routes>
      <WhatsAppButton />
      <Footer />
      
    </div>
  );
};

export default App;