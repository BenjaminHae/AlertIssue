import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function App() {
  const [show, setShow] = React.useState(true);
  return (
	<Container>
		<Button onClick={()=>setShow(!show)}>Toggle Alert</Button>
		<Alert show={show} variant="info" transition={Collapse} >Foo</Alert>
	</Container>
  );
}

export default App;
