import render from 'dom-serializer';
import { Container, Col, Row, Nav, ListGroup, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import PoemCard from './PoemCard';
const PoemPageView = ({ PoemData }) => {


    return (<div>
        <Navbar
            color="dark"
            expand="lg"
            dark
        >
            <NavbarBrand href="/">
                Home
            </NavbarBrand>

            <NavItem>
                <NavLink>
                    Hi
                </NavLink>
            </NavItem>

        </Navbar>
        <Container fluid>
            <Col>
                <ListGroup>

                    {PoemData.map((poem) =>
                        <li>
                            <PoemCard id={poem.id} title={poem.title} date={poem.date} />
                        </li>)
                    }

                </ListGroup>
            </Col>


        </Container>
    </div >)
}
export default PoemPageView;