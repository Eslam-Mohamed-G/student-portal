import { useState } from 'react'
import './App.css'
import './index.css'
import './i18n';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Components/layout/Layout'
import Profile from './Components/2_home/Profile';
const routs = createBrowserRouter([
  {path: '', element: <Layout/>, children: [
    {index:true, element: <Profile/>}
  ]}
])

function App() {

  return (
    <RouterProvider router = {routs}>
      <Outlet/>
    </RouterProvider>
  )
}

export default App
