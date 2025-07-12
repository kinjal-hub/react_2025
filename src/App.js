import React from 'react';
import { createRoot } from 'react-dom/client';
import  Header  from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';



const  AppLayout = () => {

    
    console.log(<Body />);
return(
    <div className="app">
       <Header />
       <Body />
       <Outlet />
       
    </div>
);
};

const appRouter = createBrowserRouter([
    {
      path: "/",
      Component: AppLayout,
      children: [
        {
           path: "/",
           Component: Body,
        },
        {
           path: "/about",
           Component: About,
        },
        {
          path: "/contact",
          Component: Contact,
        },
      ],
      errorElement: Error,
    },
  ]);


const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

export default AppLayout;


    
