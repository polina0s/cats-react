import clsx from 'clsx';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ProgressBar from 'react-bootstrap/ProgressBar';

import breedCard from './breedCard.module.scss';

export function BreedCard({
  url,
  name,
  wiki,
  adaptability,
  description,
  childFriendly,
  temperament,
  dogFriendly,
  health,
  strangerFriendly,
  intelligence,
  lifeSpan,
  origin,
  socialNeeds,
  onClick,
}) {
  return (
    <div className={breedCard.cont}>
      <Card className="mb-4">
        <Card.Header className="bg-info-subtle">
          <b>{name}</b>
        </Card.Header>
        <div className="row g-0">
          <div className="col-md-6">
            <Card.Img
              src={url}
              className={clsx(breedCard.img, 'img-fluid rounded-start p-2')}
            ></Card.Img>
          </div>
          <div className="col-md-6">
            <Card.Body>
              <Card.Title className="h6">{description}</Card.Title>
              <Card.Text>
                <b>Temperament:</b> {temperament}
              </Card.Text>
              <Card.Text>
                <b>Life span:</b> {lifeSpan} years
              </Card.Text>
              <Card.Text>
                <b>Origin:</b> {origin}
              </Card.Text>
              <Card.Link
                href={wiki}
                className="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              >
                <b>Wikipedia</b>
              </Card.Link>
              <ListGroup className="mb-3 mt-2">
                <ListGroup.Item>
                  <b>adaptability</b>
                  <ProgressBar variant="info" now={adaptability * 20} />
                </ListGroup.Item>
                <ListGroup.Item>
                  <b>social needs</b>
                  <ProgressBar variant="info" now={socialNeeds * 20} />
                </ListGroup.Item>
                <ListGroup.Item>
                  <b>child friendly</b>
                  <ProgressBar variant="info" now={childFriendly * 20} />
                </ListGroup.Item>
                <ListGroup.Item>
                  <b>dog friendly</b>
                  <ProgressBar variant="info" now={dogFriendly * 20} />
                </ListGroup.Item>
                <ListGroup.Item>
                  <b>stranger friendly</b>
                  <ProgressBar variant="info" now={strangerFriendly * 20} />
                </ListGroup.Item>
                <ListGroup.Item>
                  <b>health issues</b>
                  <ProgressBar variant="info" now={health * 20} />
                </ListGroup.Item>
                <ListGroup.Item>
                  <b>intelligence</b>
                  <ProgressBar variant="info" now={intelligence * 20} />
                </ListGroup.Item>
              </ListGroup>
              <Button variant="info" onClick={onClick}>
                back
              </Button>
            </Card.Body>
          </div>
        </div>
      </Card>
    </div>
  );
}
