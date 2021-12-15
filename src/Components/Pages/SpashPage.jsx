import { Button , ButtonGroup,Container, Row, Col, Card, CardTitle} from "reactstrap";
import { Link } from "react-router-dom";
import "../Pages/splash.css";
const SplashPage = () => {
  return (
    <div>
      <Container className="splash-container" >
        <Row>
          <Col>
            <Card className="text-center" body color="light" outline>
              <CardTitle tag="h1" size="xl">Power of Audre Lord</CardTitle>
              <ButtonGroup size="xl">
              <Button href="/">Home</Button>
              <Button href="poems">Poems</Button>
              <Button href="about">About</Button>
              <Button href="biography">Biograpy</Button>
              </ButtonGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default SplashPage;
