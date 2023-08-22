import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function WithoutBreedCard({ src, onClick }) {
  return (
    <div className="withoutBreedCard-cont">
      <Card>
        <Card.Img
          className="p-2 withoutBreedCard-img"
          variant="top"
          src={src}
        />
        <Card.Body>
          <Button variant="info" onClick={onClick}>
            Back
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
