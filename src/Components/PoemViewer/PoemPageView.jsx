import render from 'dom-serializer';
import {Container, Col, Row, Nav } from 'reactstrap';
import { Link } from 'react-router-dom';
import PoemCard from './PoemCard';
const PoemPageView = ({PoemData}) => {

    
    return (<div>
        <Container>
            <Nav tabs> <Link to="/">Home </Link></Nav>

            <Row>
                <Col></Col>
                <Col>
                <ul>
                    {PoemData.map((poem) => 
                    <li>
                        <PoemCard id={poem.id} title={poem.title} date={poem.date} descripton={poem.Container} />
                    </li>)
                    }
                    </ul>
                </Col>
                <Col></Col>
            </Row>


        </Container>
    </div>)
}
export default PoemPageView;