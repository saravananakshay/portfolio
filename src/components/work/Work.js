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
           <p className='mt-2'>Change the underlying component CSS base class name and modifier class names prefix. This is an escape hatch for working with heavily customized bootstrap css.</p>
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
                            <img src="./asset/card.jpg" alt="File not found" width="50%px" />
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
            <p  className='mt-2'>Change the underlying component CSS base class name and modifier class names prefix. This is an escape hatch for working with heavily customized bootstrap css.</p>
        </Col>
        </Row>
  </div>   
  </Container>
  )
}

export default Work