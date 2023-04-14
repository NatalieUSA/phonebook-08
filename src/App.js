// import NavBar from 'components/NavBar/NavBar';
// import UserRoutes from 'Routes/UserRoutes';
// import { GlobalStyle } from 'components/GlobalStyle';

// import styles from './app.module.css';
import { Route, Routes } from 'react-router-dom';
import { LayoutPages } from 'Pages/LayoutPages';
import HomePage from 'Pages/HomePage';
import RegisterPage from 'Pages/RegisterPage';
import LoginPage from 'Pages/LoginPage';
import ContactsPage from 'Pages/ContactsPage';

import RestrictedRoute from 'Routes/RestrictedRoute';
import PrivateRoute from 'Routes/PrivateRoute';
// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { current } from '@reduxjs/toolkit';
const App = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(current());
  // }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<LayoutPages />}>
        <Route index element={<HomePage />} />

        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        {/* <Route path="/register" element={<RegisterPage />} /> */}
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        {/* <Route path="/login" element={<LoginPage />} /> */}

        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
        {/* <Route path="/contacts" element={<ContactsPage />} /> */}
      </Route>
    </Routes>
    //  <Routes>
    //     <Route path="/" element={<LayoutM />}>
    //       <Route path="/" element={<PublicRoute />}>
    //         <Route index element={<HomePage />} />
    //         <Route path="/login" element={<LogIn />} />
    //         <Route path="/register" element={<Register />} />
    //       </Route>
    //       <Route path="/" element={<PrivetaRoute />}>
    //         <Route path="/contacts" element={<Contacts />} />
    //       </Route>
    //     </Route>
    //   </Routes>
    // <>
    //   <GlobalStyle />
    //   <div className={styles.wrap}>
    //     <div>
    //       <NavBar />
    //     </div>
    //     <div style={{ margin: 'auto' }}>
    //       <UserRoutes />
    //     </div>
    //   </div>
    // </>
  );
};
export default App;

// // import { Routes, Route } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import NavBar from 'components/NavBar/NavBar';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { BrowserRouter } from 'react-router-dom';
// import { PersistGate } from 'redux-persist/integration/react';
// import { store, persistor } from 'redux/store';
// import AuthLayout from 'components/AuthLayout/AuthLayout';

// //import PhoneBook from 'components/Phonebook/PhoneBook';
// // import LogInPage from 'Pages/LoginPage';
// // import RegisterPage from 'Pages/RegisterPage';
// // import ContactsPage from 'Pages/ContactsPage';
// import UserRoutes from 'UserRoutes';
// import { GlobalStyle } from 'components/GlobalStyle';
// const App = () => {
//   return (
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         <AuthLayout>
//           <BrowserRouter>
//             <NavBar />
//             <UserRoutes />
//             <ToastContainer
//               position="top-center"
//               autoClose={3000}
//               hideProgressBar={false}
//               newestOnTop={false}
//               closeOnClick
//               rtl={false}
//               pauseOnFocusLoss
//               draggable
//               pauseOnHover
//               theme="colored"
//             />
//           </BrowserRouter>
//         </AuthLayout>
//       </PersistGate>
//     </Provider>

//     // <div>
//     //   <ContactsPage />
//     //   <NavBar />
//     //   <LogInPage />
//     //   <RegisterPage />
//     // </div>
//   );
// };
// export default App;
