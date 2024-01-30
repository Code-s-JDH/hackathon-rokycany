import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PersistLogin from './utils/PersistLogin';
import RequireAuth from './utils/RequireAuth';

import SharedLayout from './pages/layouts/SharedLayout';

import LandingPage from './pages/LandingPage';
import JobOffers from './pages/JobOffers'
import Contact from './pages/Contact'
import Error404 from './pages/Error404';

import Login from './pages/Login'
import Register from './pages/Register'

import AdminDashboard from './pages/AdminDashboard';
import MyAccount from './pages/MyAccount';

const ROLES = {
  'user': 1,
  'admin': 2
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<SharedLayout />}>
      <Route index element={<LandingPage />} />
      <Route path='jobs' element={<JobOffers />} />
      <Route path='contact' element={<Contact />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />

      {/* proteced routes  */}
      <Route element={<PersistLogin />}>
        <Route element={<RequireAuth allowedRoles={[ROLES.user, ROLES.admin]} />}>
          <Route path="/account" element={<MyAccount />} />
        </Route>
      </Route>

      <Route element={<RequireAuth allowedRoles={[ROLES.admin]} />}>
        <Route path="admindashboard" element={<AdminDashboard />} />
      </Route>
      </Route>
    </Routes>
  );
};

export default App;
