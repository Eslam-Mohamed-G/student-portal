import { useState } from 'react'
import './App.css'
import './index.css'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './layout/Layout'
const routs = createBrowserRouter([
  {path: '', element: <Layout/>, children: []}
])

function App() {

  return (
    <RouterProvider router = {routs}>
      <Outlet/>
    </RouterProvider>
  )
}

export default App
