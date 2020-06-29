import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
<CardDeck style ={{margin:"30px"}}>
    <Card border="success" >
      <Card.Img variant="top" src="holder.js/100px160" />
      <Card.Body>
        <Card.Title  className="text-center" >Card title</Card.Title>
        <Button variant="outline-info" >More ...</Button>
      </Card.Body>
    </Card>
    <Card border="danger"  >
      <Card.Img variant="top" src="holder.js/100px160" />
      <Card.Body>
        <Card.Title className="text-center" >Card title</Card.Title>
        <Button variant="outline-info" >More ...</Button>
      </Card.Body>
    </Card>
    <Card border="warning" >
      <Card.Img variant="top" src="holder.js/100px160" />
      <Card.Body>
        <Card.Title  className="text-center" >Card title</Card.Title>
        <Button variant="outline-info" >More ...</Button>
      </Card.Body>
    </Card>
</CardDeck>

    </div>
  );
}

export default App;
