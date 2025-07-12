import React from 'react';
import { createRoot } from 'react-dom/client';
import  Header  from './components/Header';
import Body from './components/Body';
import About from './components/About';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const  AppLayout = () => {
   return(
    <div className="app">
       <Header />
       <Body />
    </div>
);
};


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);



const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

export default AppLayout;


    
