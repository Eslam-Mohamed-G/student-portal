import { useState } from 'react'
import './App.css'
import './index.css'
import './i18n';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Components/layout/Layout'
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
