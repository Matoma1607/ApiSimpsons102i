import { Button, Container, Spinner } from "react-bootstrap";
import "./App.css";
import Frase from "./components/Frase";
import logo from "./assets/logosimpson.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";

function App() {
  const [frasePersonaje, setFrasePersonaje] = useState({});
  const [mostrarSpinner, setMostrarSpinner] = useState(true);
  useEffect(() => {
    consultarApi();
  }, []);

  const consultarApi = async () => {
    try {
      setMostrarSpinner(true)
      console.log("hola mundo");
      //enviar una solicitud get
      const respuesta = await fetch(
        "https://thesimpsonsquoteapi.glitch.me/quotes"
      );
      const datos = await respuesta.json();
      console.log(respuesta);
      if (respuesta.status === 200) {
        setFrasePersonaje(datos[0]);
        setMostrarSpinner(false)
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="text-center my-5">
      <img src={logo} alt="logo simpsons" className="w-50 mb-4" />
      {mostrarSpinner ? (
        <div>
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <Frase frasePersonaje={frasePersonaje}></Frase>
      )}

      <Button variant="warning" className="mt-4" onClick={consultarApi}>
        Enviar
      </Button>
    </Container>
  );
}

export default App;
