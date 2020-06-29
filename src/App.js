import React,{ useEffect,useState} from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";


function App() {
  const [results , setresults] = useState("");
  useEffect(() => {
    axios
    .get("https://api.themoviedb.org/3/movie/popular?api_key=77ec969f17b0896615bf3e0576136e1b")
    .then(res => {
      setresults(res.data);
    })
    .catch(err => {
      console.log(err);
    });
  
  },[]);
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
