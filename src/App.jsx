import { Button, Container } from "react-bootstrap";
import "./App.css";
import Frase from "./components/Frase";
import logo from "./assets/logosimpson.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";

function App() {
  const [frasePersonaje, setFrasePersonaje] = useState({})

  useEffect(()=>{
    consultarApi();
  },[])

  const consultarApi = async() =>{
    console.log('hola mundo')
    //enviar una solicitud get
    const respuesta = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
    const datos = await respuesta.json();
    console.log(datos[0])
    //respuesta
    //almacenar la respuesta en el estado
    setFrasePersonaje(datos[0])
  }

  return (
    <Container className="text-center my-5">
      <img src={logo} alt="logo simpsons" className="w-50 mb-4" />
      <Frase></Frase>
      <Button variant="warning" className="mt-4">
        Enviar
      </Button>
    </Container>
  );
}

export default App;
