import React from 'react'
import { Nav } from 'react-bootstrap'

export const AboutSection = () => {
  return (
    <>

      <Nav.Link href="/about">
        <div className='about-main-container'>
          <div className='about-main'>
            <h4>Sobre nosotros</h4>
          </div>
          <div className='p-2'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque cumque saepe nostrum quae, explicabo hic illo natus nesciunt molestias aperiam quia facere porro veritatis maiores nisi inventore tempore sapiente. Modi.
            </p>
          </div>
        </div>
      </Nav.Link>


    </>
  )
}
