import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './main.scss';
import ErrorPage from './pages/errorPage.jsx';
import Catalog from './pages/catalog';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Catalog />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'cat/:catId',
    element: <div />,
  },
]);

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
