import React from 'react'
import './work.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
const Work = () => {
  const onChange =() =>{
   };

   const onClickItem =() =>{
  };
  
  
return (
    <Container id="work" fluid xs={12} className='bg_color'>
  <div class="container">
    <h4 style={{color:"white"}}>work</h4>
        <div className="d-flex justify-content-center"> 
            <span className="fw-bold fs-5 mb-3" style={{color:"white"}}> Project 1 Sample screen</span>
        </div>
        
        <Row>
        <Col className='mb-5' lg={6} xs={12}>
        <div className="d-flex" style={{height:"auto"}}>
            <Carousel onChange={onChange} onClickItem={onClickItem}  width={"40%"} height={"40%"} autoPlay interval="1000" showThumbs={false}>
                <div>
                    <img src="./asset/card.jpg" alt="File not found" width="400px" />
                </div>
                <div>
                    <img src="./asset/payment.jpg" alt="File not found" width="50%"/>
                </div>
                <div>
                    <img src="./asset/view.jpg" alt="File not found" width="50%" />
                </div>
                <div>
                    <img src="/asset/form.jpg"  alt="File not found" width="50%"/>
                </div>
                <div>
                    <img src="/asset/size.jpg"  alt="File not found" width="50%"/>
                </div>
          </Carousel>
        </div>
        </Col>
        <Col lg={6} xs={12}>
           <p className='mt-2' style={{color:'white'}}>These are the sample screen for an e-commerce application for the third party b2b company.</p>
           <p style={{color:'white'}}>My role - my role is to develop an ui for the product screen, Filter screen, profile account and small ui screen</p>
           <p style={{color:'white'}}>Team size - 12</p>
           <p style={{color:'white'}}>Front-end - React, Bootstrap, ES6 </p>
           <p style={{color:'white'}}>Back-end - Node, Express, GraphQL, </p>
        </Col>
        </Row>
         
        <div className="d-flex justify-content-center"> 
            <span className="fw-bold fs-5 mb-3 mt-4" style={{color:"white"}}> Project 2 Sample screen</span>
        </div>

        <Row>
        <Col>
             <div className="d-flex mt-3 mb-5" style={{height:"auto"}}>
                <Carousel onChange={onChange} onClickItem={onClickItem}  width={"40%"} height={"40%"} autoPlay interval="1000" showThumbs={false}>
                        <div>
                            <img src="./asset/prop1.jpg" alt="File not found" width="50%px" />
                        </div>
                        <div>
                            <img src="./asset/prop2.jpg" alt="File not found" width="50%"/>
                        </div>
                        <div>
                            <img src="./asset/prop3.jpg" alt="File not found" width="50%" />
                        </div>
                        <div>
                            <img src="/asset/prop4.jpg"  alt="File not found" width="50%"/>
                        </div>
                        <div>
                            <img src="/asset/prop2.jpg"  alt="File not found" width="50%"/>
                        </div>
                </Carousel>
            </div>
        </Col>
        <Col lg={6} xs={12}>
        <p className='mt-4' style={{color:'white'}}>These are the sample screen for an hotel application for our client</p>
           <p style={{color:'white'}}>My role - My role is to develop an ui for list hotels, List rooms, Footer</p>
           <p style={{color:'white'}}>Team size - 5</p>
           <p style={{color:'white'}}>Front-end - React, w3-css, ES6 </p>
           <p style={{color:'white'}}>Back-end - Node, Express, Mongodb </p>
        </Col>
        </Row>
  </div>   
  </Container>
  )
}

export default Work