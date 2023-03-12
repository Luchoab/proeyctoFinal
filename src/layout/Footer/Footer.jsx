import React from 'react'
import { Logo } from '../../components/Logo/Logo'
import { HorariosFooter } from '../../components/HorariosFooter/HorariosFooter';
import { Redes } from '../../components/Redes/Redes';
import { LinksFooter } from '../../components/LinksFooter/LinksFooter';
import { Col, Container, Row } from 'react-bootstrap';

export const Footer = () => {
  return (
    <>

    <div className='footer-container'>
    <Container fluid>
    <Row>
      <Col lg={4} sx={12}>
        <div className='footer-links'>
          <ul>
            <LinksFooter/>
          </ul>
        </div>
      </Col>
      <Col lg={4} sx={12}>
      <div className='footer-logo'>
          <Logo/>
          <div className='copyRight'>
          <small>Copyright © 2023 Alma Resto - Todos los derechos reservados</small>
          </div>
        </div>
      </Col>
      <Col lg={4} sx={12}>
      <div className='footer-redes-container'>
          <HorariosFooter/>
          <Redes/>
        </div>
      </Col>
    </Row>
    </Container>
      </div>

 
    </>
  )
}
