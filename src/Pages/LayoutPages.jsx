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
          maxWidth: 1240,
        }}
      >
        <div
          style={{
            height: '100vh',
          }}
        >
          <Navbar />
        </div>
        <div
          style={{
            margin: 'auto',
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
