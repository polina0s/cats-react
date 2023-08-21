import './main.scss';

import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Catalog, CatPage, ErrorPage } from './pages';

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

export function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
