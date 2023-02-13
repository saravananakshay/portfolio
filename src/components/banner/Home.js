import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './home.css';
const Home = () => {
  return (
    <div id="home" className='bg'>
      <Container fluid >
       <Row className='align'>
          <Col lg={4} md={4} xs={10} className='p-4'>
              <img src='./asset/avatar2.png' alt="avatar" width={"350px"} height={"350px"}/>
          </Col>
          
          <Col lg={8} md={8} xs={10} className='p-4 justify-content-center mt-3'>
                <span className='title'> Web Developer</span> <br/>
                <a href="/asset/Cv-Saravanan.pdf" download={"myCV"}><input className='check ms-3' type="button" value="Hire me"/></a><br/>
                <div className='mt-3 ms-3'>
                    <span className='exp'>3</span> 
                    <span className='desc'>  years of experience in web development </span>
                </div>
                <div className='ms-3'>
                  <span className='exp'>13</span>
                  <span className='desc'> Plus projects, hands on experience  </span>
                </div>
          </Col>
      
       </Row>
       </Container>
    </div>
   
  )
}

export default Home