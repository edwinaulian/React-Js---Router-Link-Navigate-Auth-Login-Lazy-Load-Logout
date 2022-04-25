import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './app/home/home';
import { Navbar } from './app/navbar/navbar';
import { OrderSummary } from './app/orderSummary/orderSummary';
import { NoMatch } from './app/noMacthPage/noMatch';
import { Products } from './app/products/products';
import { NewProducts } from './app/products/newProducts';
import { FeaturedProducts } from './app/products/featuredProducts';
import { User } from './app/user/user';
import { UserDetails } from './app/user/userDetail';
import { Admin } from './app/admin/admin';
import { Profile } from './app/profile/profile';
import { AuthProvider } from './app/common/global-service/auth';
import { Login } from './app/login/login';
import { RequiredAuth } from './app/common/global-service/requiredAuth';
const LazyAbout = React.lazy(() => import('./app/about/about'));

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path='*' element={<NoMatch />}></Route>
        <Route path='/' exact element={<Home />}  ></Route>
        <Route path='login' element={<Login />}></Route>
        <Route path='profile' element={<RequiredAuth> <Profile /></RequiredAuth>}></Route>
        <Route path='about' exact element={<React.Suspense fallback='Loading...'> <LazyAbout /> </React.Suspense>}  ></Route>
        <Route path='order-summary' element={<OrderSummary />}></Route>
        <Route path='products' element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path='new' element={<NewProducts />}></Route>
          <Route path='featured' element={<FeaturedProducts />}></Route>
        </Route>
        <Route path='users' element={<User />}>
          <Route path=':userId' element={<UserDetails />}></Route>
          <Route path='admin' element={<Admin />}></Route>
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;