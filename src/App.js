import React from 'react';
import './App.scss';
import { Footer } from './component/Footer';
import Header from './component/Header';
import Home from './pages/Home';
import {createBrowserRouter,Outlet, RouterProvider,ScrollRestoration} from 'react-router-dom'
import Cart from './pages/Cart';
import { productsData } from '../src/api/Api'
import ProductOne from './component/ProductOne';
import Login from './pages/Login';


const Layout=()=>{
  return(
    <div>
      <Header/>
      <ScrollRestoration/>
      <Outlet/>
      <Footer/>
    </div>
  )
};

const router=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>,
        loader:productsData ,
      },
      {
        path:"/productOne/:id",
        element:<ProductOne/>
      },
     
      {
        path:"/cart",
        element:<Cart/>,
      },
      {
        path:"/login",
        element:<Login/>
      },

    ],
  },
]);
function App() {
  
  return(
  <div>
    <RouterProvider
    router={router}/>
  </div>
  );
}

export default App;
