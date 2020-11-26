import { Link } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react"
import { Row, Col, } from 'react-bootstrap';
import a from '../images/a.png'

const Header = () => (

  <div  style={{ background: '#FC4B0A', marginTop: '' }} >
    <Link to="/" style={{ color: `white`, textDecoration: `none` }}>
      <Row>
        <Col align='center' md={2}>
        <img src={a} width='90' height='90' alt='logo' />{' '}
          
        </Col>
        <Col align='center' md={10}><h1>Ale blog</h1></Col>
      </Row>
    </Link>

  </div>

)

export default Header;