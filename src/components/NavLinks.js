import React from 'react'

const NavLinks = () => {
  return (
    <div className='nav-links'>
      {
        links.map((link) => {
          const {text,path,id,icon} = link
          return( 
          <NavLink to={path} key={id} onClick={toggleSidebar} 
            className={({isActive}) => isActive ?'nav-link active':'nav-link'}>
            <span className='icon'>{icon}</span>
          </NavLink>)
        })
      }
    </div>
  )
}

export default NavLinks

