import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function WithoutBreedCard({ src }) {
  const style = { maxWidth: '1120px', margin: '0px auto', textAlign: 'center' };
  const imgStyle = { maxHeight: '750px', objectFit: 'contain' };

  return (
    <div style={style}>
      <Card>
        <Card.Img style={imgStyle} className="p-2" variant="top" src={src} />
        <Card.Body>
          <Button variant="info" onClick={() => history.back()}>
            Back
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default WithoutBreedCard;
