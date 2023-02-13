import React from 'react'
import './footer.css'
import { Row } from 'react-bootstrap'
import {Col} from 'react-bootstrap'
import Container from 'react-bootstrap/Container'


const Footer = () => {
  return ( 
    <Container id="contact" className='area'>
      <h5 className='mt-4'>Get In Touch</h5>
      <Row className='mt-5 mb-3'>
        <Col lg={6} md={6} xs={12}>
        <i class="bi bi-envelope"></i> <span className='fs-5'>saravanan.msec16@gmail.com </span> <br/> <br/>
        <i class="bi bi-phone"></i> <span className='fs-5'>+91 948-778-9913</span>
        </Col>
        
        <Col lg={6} md={6} xs={12}>
        <ul className='mt-2'>
          <li className='icon-list'><a href='https://www.linkedin.com/in/saravanan-r-945a77113/'><i class="bi bi-linkedin"/></a></li>
          <li className='icon-list'><a href='https://twitter.com/23_saravanan'><i class="bi bi-twitter"/></a></li>
          <li className='icon-list'><a href='https://www.facebook.com/sar.van.18'><i class="bi bi-facebook"/></a></li>
          <li className='icon-list'><a href='https://github.com/saravananakshay'><i class="bi bi-github"/></a></li>
        </ul>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
