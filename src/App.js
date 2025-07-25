import React, { lazy, Suspense, useEffect, useState} from 'react';
import { createRoot } from 'react-dom/client';
import  Header  from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import ResturantMenu from './components/RestuarantMenu';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Cart from './components/Cart';



// import Grocery from './components/Grocery';

// chunking
// code spilting
// code  dynamically
// lazy  loading
// on  demand  Loading
// dynamic  import
const Grocery = lazy(() => import('./components/Grocery'));





const  AppLayout = () => {

  const [ userInfo, setUserInfo ] = useState();
// authentication

useEffect(() => {
// Make  an  Api  call send Username & password
  const data = {
    name: "Elon Musk",
  };
  setUserInfo(data.name);
}, []);

   return(
    <Provider store={appStore}>
    <UserContext.Provider value={{ loggedInUser: userInfo, setUserInfo }}>
    <div className="app">
      <Header />
      <Outlet />
    </div>
    </UserContext.Provider>
    </Provider>
    );
};


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body/>
      },
      {
         path: "/about",
         element: <About />,
     },
     {
         path: "/contact",
         element: <Contact />,
     },
     {
         path: "/grocery",
         element: <Suspense fallback={<h1>Loading...</h1>}>
          <Grocery /></Suspense>,
     },
      {
         path: "/restaurants/:resId",
         element: <ResturantMenu />,
     },
     {
         path: "/cart",
         element: <Cart />,
     },
     
    ],
    errorElement: <Error />,
  },
  
]);



const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

export default appRouter;


    
