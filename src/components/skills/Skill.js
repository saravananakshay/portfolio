import React from 'react'
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './skill.css'

const Skill = () => {
  return (
     <Container id="skill" fluid className='sk_pos'>
      <div className='container'>
     <h5>Skills</h5>
     <Row xs={1} md={2} className="g-4 p-2">
          <Col>
            <Card className='adj'>
                <Card.Body>
                <Card.Title>React JS</Card.Title>
                <Card.Text>
                   JSX, Es6, redux, API, Router, Axios, thunk
                </Card.Text>
                </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className='adj'>
                <Card.Body>
                <Card.Title>CSS</Card.Title>
                <Card.Text>
                    Bootstrap, React-bootstrap, w3-css, materail ui, ui kit
                </Card.Text>
                </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row xs={1} md={2} className="g-4 p-2">
          <Col>
            <Card className='adj'>
                <Card.Body>
                <Card.Title>Wordpress</Card.Title>
                <Card.Text>
                 Plugins, Javascript, css, sql, Mysql, 
                </Card.Text>
                </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className='adj'>
                <Card.Body>
                <Card.Title>Adobe XD</Card.Title>
                <Card.Text>
                   Wireframe, colors, design system, prototype, illustrator.
                </Card.Text>
                </Card.Body>
            </Card>
          </Col>
        </Row>
        </div>
        </Container>
        
  );
}
export default Skill;