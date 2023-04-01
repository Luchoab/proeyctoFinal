import React from 'react'
import { Nav } from 'react-bootstrap'

export const LinksFooter = () => {
return (
    <>
    <div>
        <Nav.Link href="/carta" className='links-nav'>Carta</Nav.Link>
        <Nav.Link href="/legal" className='links-nav'>Legal</Nav.Link>
        <Nav.Link href="/privacidad" className='links-nav'>Politica de privacidad</Nav.Link>
        </div>
    <div className='contactoFooter'>
        <h5>Contacto</h5>
    </div>
    <div>
        <p>info@almaresto.com</p>
    </div>
    </>
    
)
}
