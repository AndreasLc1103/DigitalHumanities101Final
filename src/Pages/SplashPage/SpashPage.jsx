import { Button, ButtonGroup, Container, Row, Col, Card, CardTitle, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import "../SplashPage/splash.css";
const SplashPage = () => {
  return (
    <div>
      <Container className="splash-container" >
        <Row>
          <Col>
            <Card className="text-center" color="light" outline>
              <CardTitle tag="h1" size="xl" >Audre Lord</CardTitle>
              <CardBody>
                <p style={{}}> The Intersectionality of Race and Sexuality Through Audre Lorde </p>
              </CardBody>
              <ButtonGroup size="xl">
                <Button href="/">Home</Button>
                <Button href="about">About</Button>
                <Button href="biography">Biography</Button>
                <Button href="poems">Poems</Button>
                <Button href="quotes">Quotes</Button>
              </ButtonGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default SplashPage;
