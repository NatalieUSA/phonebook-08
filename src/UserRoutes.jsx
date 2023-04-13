import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('./Pages/HomePage'));
const LogInPage = lazy(() => import('./Pages/LoginPage'));
const RegisterPage = lazy(() => import('./Pages/RegisterPage'));
const ContactsPage = lazy(() => import('./Pages/ContactsPage'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>...loading</p>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route index element={<HomePage />} /> */}
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LogInPage />} />

        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
