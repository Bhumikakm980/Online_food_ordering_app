
import './App.css';
import { lazy, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import Body from './components/Body';
import Headers from './components/Header';
// import Aboutus from './components/Aboutus';
// lazeloading/on-demand loading
const Aboutus=lazy(()=>import('./components/Aboutus'));
import Error from './components/Error';
import RestoMenu from './components/RestoMenu';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Contactus from './components/Contactus';
import userContext from './utils/userContext';
import { Provider } from 'react-redux';
import appstore from './utils/appstore';
import Cart from './components/Cart';



function App() {

  /*
  Header
    logo
    title
    nav bar
  body
    search
    cards
      name  
  
  
  
  
  * */
  // const Header=()=>{
  //   return(
  //     <div className='Header-div'>
  //       <img src='src\assets\logo.jpg'></img>
  //       <h1>Welcome Home,food is waiting for you❤️</h1>
  //       <ul>
  //         <li>Home</li>
  //         <li>Cart</li>
  //         <li>Contact Us</li>
  //         <li>About Us</li>
  //       </ul>
  //     </div>
  //   )
  // }

  // const Restocard=()=>{
  //   return(
  //     <div className='resto-card'>
  //       <img src="https://th.bing.com/th/id/OIP.I4QREA0ajgHs6wF7NnhC8QHaEK?w=333&h=187&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.3&pid=3.1&rm=2" alt="Burger king" />
  //       <h3>Burger King</h3>
  //       <h4>Burgers,soft drinks,fries</h4>
  //       <h4>Waiting period of 30mins</h4>
  //       <h4>Rating 4.9</h4>
  //     </div>
  //   )
  // }
  // const Body=()=>{
  //   return(
  //     <>
  //     <div className='search'>Search</div>
  //     <div className='resto-container'>
  //       <Restocard></Restocard>
  //       <Restocard></Restocard>
  //       <Restocard></Restocard>
  //       <Restocard></Restocard>
  //       <Restocard></Restocard>
  //       <Restocard></Restocard>
  //       <Restocard></Restocard>
  //       <Restocard></Restocard>
  //       <Restocard></Restocard>
  //       <Restocard></Restocard>
  //       <Restocard></Restocard>
  //       <Restocard></Restocard>
  //       <Restocard></Restocard>
  //       <Restocard></Restocard>
  //       <Restocard></Restocard>
  //       <Restocard></Restocard>
  //     </div>
  //     </>
  //   )
  // }

  const [usenameContext,setUsername]=useState();

  useEffect(()=>{
   const data={
      name:"jeh"
    }
    setUsername(data.name)
  },[])


  return (
    
    <>
    <Provider store={appstore}>
   <userContext.Provider value={{name:usenameContext,setUsername}} >
    <Headers></Headers>
    </userContext.Provider>
    {/* <Body></Body> */}
    <Outlet></Outlet>
    </Provider>
    </>
  
  )

  
}

// export default App;

const appRoute=createBrowserRouter([
  {
    path:"/",
    element:<App></App>,
    errorElement:<Error></Error>,
    children:[
      {
        path:"/",
        element:<Body></Body>
      },
      {
        path:"/about",
        element:<Aboutus userName={"anj"}></Aboutus>
      },
      {
        path:"/restomenu/:restoid",
        element:<RestoMenu></RestoMenu>
      },
      {
        path:"/contactus",
        element:<Contactus></Contactus>
      },
      {
        path:"/cart",
        element:<Cart></Cart>
      }
      
      
    ]


  },
  
  
]
)

createRoot(document.getElementById('root')).render(<RouterProvider router={appRoute}></RouterProvider>)


