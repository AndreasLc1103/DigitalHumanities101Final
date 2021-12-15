
import { useState } from "react";
import {
  Container, Row,
  Col,
  ListGroup,
} from "reactstrap";
import PoemCard from "../Components/PoemViewer/PoemCard";
import AudreNav from "../Components/NavComponenet/AudreNav";
import Poems from "../Components/data/Poems.json"
/**
 * PoemPageView is a component that is used to create a instance of a page view
 * this will allow the user to pass in a list of poem data objects.
 * @param {object} list list of objects storing information about poems.
 * @returns a view that displays individual cards for the user to click on.
 */
const PoemPageView = () => {

  const [poems] = useState([...Poems.library])
  return (
    <div>
      <Container style={{ paddingLeft: "5rem" }} fluid={"md"}>
        <Row>
          <AudreNav></AudreNav>
        </Row>

        <Row>
          <Col>
            <h2> Poems from the Author</h2>
          </Col>
        </Row>
        <Row>

          {poems.map((poem) => (

            <PoemCard title={poem.title} text={[...poem.poemText]} />

          ))}

        </Row>
      </Container>
    </div>
  );
};
export default PoemPageView;
