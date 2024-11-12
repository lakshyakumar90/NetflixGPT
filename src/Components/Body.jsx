import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Before Logged In/Body/Home'
import Login from './Login/Login'
import Browse from './After Logged In/Browse'

const Body = () => {
    const appRouter = createBrowserRouter([
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/login",
          element:<Login />
        },
        {
          path:"/browse",
          element:<Browse />
        }
      ])
  return (
    <div >
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body