
import React from 'react'
import { NavLink, Outlet, Link } from 'react-router-dom'

const NavBar = () => {
    let activeStyle = {
        textDecoration: "underline",
    };
  
  return (
    <header >
        <div className='top-0 fixed  shadow-md  z-50 w-full bg-orange-500 text-white  border-cyan-600 dark:bg-gray-900 p-2 flex justify-between items-center'>
            <div className='flex justify-center items-center'>
                <Link to={'/'}>
                    <img 
                        src="../src/assets/dbz.png" 
                        alt="logo"
                        className='h-12 w-auto' 
                    />
                </Link>
                <img src="../src/assets/goku.png" alt="goku" className='h-24 w-auto' />
            </div>
            <nav className='flex gap-8 text-xl uppercase font-bold p-2'>
                <NavLink 
                    to={'/'}
                    style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }
                >
                    Inicio
                </NavLink>
                <NavLink 
                    to={'characters'}
                    style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }
                >
                    Personajes
                </NavLink>
            </nav>
        </div>

        <Outlet />
    </header>
  )
}

export default NavBar
