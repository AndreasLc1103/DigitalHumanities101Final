
import {
  Container,
  Col,
  ListGroup,
} from "reactstrap";
import { Link } from "react-router-dom";
import PoemCard from "./PoemCard";
/**
 * PoemPageView is a component that is used to create a instance of a page view
 * this will allow the user to pass in a list of poem data objects.
 * @param {object} list list of objects storing information about poems.
 * @returns a view that displays individual cards for the user to click on.
 */
const PoemPageView = ({ PoemData }) => {
  return (
    <div>
      <Container fluid>
        <Col>
          <ListGroup>
            {PoemData.map((poem) => (
              <li>
                <PoemCard id={poem.id} title={poem.title} date={poem.date} />
              </li>
            ))}
          </ListGroup>
        </Col>
      </Container>
    </div>
  );
};
export default PoemPageView;
