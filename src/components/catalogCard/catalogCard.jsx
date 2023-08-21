import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function CatalogCard({ url, id, link }) {
  return (
    <div className="col-xxl-3 col-md-4 col-sm-4 mb-4 text-center" id={id}>
      <Card className="text-center">
        <Card.Img className="card-img-size" variant="top" src={url} />
        <Card.Body>
          <Button href={link} variant="info">
            See cat
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
