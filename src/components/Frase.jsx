import { Card } from "react-bootstrap";

const Frase = ({ frasePersonaje }) => {
  return (
    <section>
      <img
        src={frasePersonaje.image}
        alt={frasePersonaje.character}
        className="character mb-4"
      />
      <Card className="text-center">
        <Card.Body>
          <Card.Title>{frasePersonaje.character}</Card.Title>
          <Card.Text>{frasePersonaje.quote}</Card.Text>
        </Card.Body>
      </Card>
    </section>
  );
};

export default Frase;
