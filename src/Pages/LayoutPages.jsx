import { Outlet } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
import Navbar from 'components/NavBar/NavBar';
import { Suspense } from 'react';
import { GlobalStyle } from 'components/GlobalStyle';

export const LayoutPages = () => {
  return (
    <>
      <GlobalStyle />
      <div
        style={{
          display: 'flex',
          height: '100vh',
        }}
      >
        <div>
          <Navbar />
        </div>
        <div
          style={{
            margin: 'auto',
            //   padding: '0 16px',
            // display: 'flex',
            // height: '100vh',
          }}
        >
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
          {/* <Toaster position="top-right" reverseOrder={false} /> */}
        </div>
      </div>
    </>
  );
};
