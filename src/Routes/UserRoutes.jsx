// import { lazy, Suspense } from 'react';
// import { Routes, Route } from 'react-router-dom';
// // import PrivateRoute from './PrivateRoute';
// // import PublicRoute from './PublicRoute';

// const HomePage = lazy(() => import('../Pages/HomePage'));
// const LogInPage = lazy(() => import('../Pages/LoginPage'));
// const RegisterPage = lazy(() => import('../Pages/RegisterPage'));
// const ContactsPage = lazy(() => import('../Pages/ContactsPage'));

// const UserRoutes = () => {
//   return (
//     <Suspense fallback={<p>...loading</p>}>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         {/* <Route index element={<HomePage />} /> */}
//         {/* <Route element={<PublicRoute />}> */}
//         <Route path="/register" element={<RegisterPage />} />
//         <Route path="/login" element={<LogInPage />} />
//         {/* </Route> */}

//         {/* <Route element={<PrivateRoute />}> */}
//         <Route path="/contacts" element={<ContactsPage />} />
//         {/* </Route> */}
//       </Routes>
//     </Suspense>
//   );
// };

// export default UserRoutes;
