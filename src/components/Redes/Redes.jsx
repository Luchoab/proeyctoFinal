import React from 'react'
import { Nav } from 'react-bootstrap'
import { FiInstagram, FiTwitter } from 'react-icons/fi'
import { RiFacebookBoxLine } from 'react-icons/ri'

export const Redes = () => {
  return (
    <div>
        <p>¡Siguenos!</p> 
        <div className='footer-redes'>

        <div className='redes'>
        <Nav.Link href="https://twitter.com/?lang=es" className='links-nav'>
          <FiTwitter/>
        </Nav.Link>
            
        </div>
        <div className='redes'>
        <Nav.Link href="https://www.instagram.com/" className='links-nav'>
          <FiInstagram/>
        </Nav.Link>
        </div>
        <div className='redes'>
        <Nav.Link href="https://es-la.facebook.com/" className='links-nav'>
          <RiFacebookBoxLine/>
        </Nav.Link>
        </div>

        </div>
    </div>
  )
}
