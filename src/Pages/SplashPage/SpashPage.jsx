import { Button, ButtonGroup, Container, Row, Col, Card, CardTitle, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import "../SplashPage/splash.css";
const SplashPage = () => {
  return (
    <div style={{

    }}>

      <Container className="splash-container" fluid block>
        <Row fluid>
          <Col fluid>
            <Card className="text-center" color="light" outline>
              <CardTitle tag="h1" size="xl" >Power of Audre Lorde</CardTitle>
              <CardBody>
                <p>The Intersectionality of Race and Sexuality Through Audre Lorde </p>
              </CardBody>
              <ButtonGroup size="xl">
                <Button href="/DigitalHumanities101Final/home">Home</Button>
                <Button href="/DigitalHumanities101Final/about">About</Button>
                <Button href="/DigitalHumanities101Final/biography">Biography</Button>
                <Button href="/DigitalHumanities101Final/poems">Poems</Button>
                <Button href="/DigitalHumanities101Final/quotes">Quotes</Button>
              </ButtonGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </div >
  );
};
export default SplashPage;
