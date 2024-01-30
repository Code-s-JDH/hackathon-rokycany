import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import RequireAuth from './pages/RequireAuth';
// import PersistLogin from './pages/PersistLogin';
import LandingPage from './pages/LandingPage';
import Error404 from './pages/Error404';


const ROLES = {
  'user': 1,
  'admin': 2
}

const App = () => {
  return (
    <Routes>

      {/* public routes */}
      <Route index element={< LandingPage />} />

      {/* proteced routes */}
      {/* <Route element={<PersistLogin />}>
        <Route element={<RequireAuth allowedRoles={[ROLES.user, ROLES.admin]} />}>
          <Route path='/' element={<AccountLayout />}>
            <Route path="/account" element={<Account />} />
          </Route>
        </Route>
      </Route> */}

      {/* 
        <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
          <Route path="pages/dashboard/DashBoard" element={<AdminDashBoard />} />
        </Route> */}

      {/* not found */}
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default App;
