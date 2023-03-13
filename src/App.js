import React from 'react';
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './app/router';
import Layout from './components/Layout';

function App() {
  return (
    <>
    <Layout>
      <RouterProvider router={router} />
    </Layout>
    </>
  );
}

export default App;
