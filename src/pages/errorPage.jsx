import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { useRouteError } from 'react-router-dom';

import errorPage from './errorPage.module.scss';

export function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Container className={errorPage.cont}>
      <h1 className="mb-4">Sorry, an unexpected error has occurred</h1>
      <div className="mb-4">
        <img src="../../public/pics/logo.png"></img>
      </div>
      <Button variant="info" href="/">
        Go to home page
      </Button>
    </Container>
  );
}
