import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RequireAuth from './pages/RequireAuth';
import PersistLogin from './pages/PersistLogin';
import LandingPage from './pages/LandingPage';


const ROLES = {
  'user': 1,
  'admin': 2
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<SharedLayout />}>

        {/* public routes */}
        <Route index element={< LandingPage/>} />

        {/* Store routes */}
        <Route path="/order1" element={<Order1 />} />

        <Route path='/' element={<StoreLayout />}>
          <Route path="/store" element={<Store />} />
          <Route path="/category/:category" component={Category} />
        </Route>
        <Route path="/item/:no" element={<ProductDetail />} />

        {/* proteced routes */}
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth allowedRoles={[ROLES.user, ROLES.admin]} />}>
            <Route path='/' element={<AccountLayout />}>
              <Route path="/account" element={<Account />} />
              <Route path="/myAccount" element={<MyAccount />} />
              <Route path="/myFavorites" element={<MyFavorites />} />
              <Route path="/myOrders" element={<MyOrders />} />
            </Route>
          </Route>
        </Route>

      {/* 
        <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
          <Route path="pages/dashboard/DashBoard" element={<DashBoard />} />
        </Route> */}

      {/* not found */}
      <Route path="*" element={<Error404 />} />

    </Route>
    </Routes >
  );
};

export default App;
