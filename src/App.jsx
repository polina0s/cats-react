import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './main.scss';
import ErrorPage from './pages/errorPage.jsx';
import Catalog from './pages/catalog';
import CatPage from './pages/catPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Catalog />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'cat/:catId',
    element: <CatPage />,
    errorElement: <ErrorPage />,
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
