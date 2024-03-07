import logo from './logo.svg';
import './App.css';
import React from "react" ;
import Name from "./Name" ;
import Price from "./Price" ;
import Description from "./Description" ;
import Image from "./Image";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import produit from './product';
function App  () {
  return (<>
     <Name name ={produit.nom} />
     <Price />
      <Description />
       <Image image = {produit.srcImage}  /> 
     <Card style={{ width: '18rem' }}>
       <Card.Img variant="top" src="holder.js/100px180" />
       <Card.Body>
         <Card.Title>Card Title</Card.Title>
         <Card.Text>
         Hello, there !.
         </Card.Text>
         <Button variant="primary">Go somewhere</Button>
       </Card.Body>
     </Card>
  </>)
 }
 ;

export default App ;
