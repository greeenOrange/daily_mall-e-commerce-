import 'react'
import Navbar from '../Partials/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

function Main() {
  return (
    <div className='main_content'>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default Main