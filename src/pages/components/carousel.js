import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import { Link } from "gatsby"
import bienvenido from '../images/bienvenido.png';


export default function Carusel() {
    return <div>
<Carousel>
  <Carousel.Item>
            <img src={bienvenido} width='100' height='600' className="d-block w-100" alt='' />
         
    <Carousel.Caption> 
    </Carousel.Caption>
  </Carousel.Item>


</Carousel>
</div>
}