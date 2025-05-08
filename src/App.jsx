import { useState } from 'react'
import './App.css'
import './index.css'
import './i18n';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Components/layout/Layout'
import Profile from './Components/2_home/Profile';
import TimeTable from './Components/3_timeTable/TimeTable';
import Result from './Components/4_result/Result';
const routs = createBrowserRouter([
  {path: 'process.env.PUBLIC_URL', element: <Layout/>, children: [
    {index:true, element: <Profile/>},
    {path:'timeTable', element: <TimeTable/>},
    {path:'result', element: <Result/>}
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
