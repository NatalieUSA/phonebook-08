import NavBar from 'components/NavBar/NavBar';
import UserRoutes from 'Routes/UserRoutes';

const App = () => {
  return (
    <>
      <NavBar />
      <UserRoutes />
    </>

    // <div>
    //   <ContactsPage />
    //   <NavBar />
    //   <LogInPage />
    //   <RegisterPage />
    // </div>
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
