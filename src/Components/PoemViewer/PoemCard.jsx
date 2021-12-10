import { Card, CardTitle, CardSubtitle, CardBody, Button, Container , Row , Col} from "reactstrap";
/**
 * PoemCard is a display component used to display the basic information surrounding
 * a specific poem.
 * @param {props{id , title , date , description}}} accepts a object containing props
 * to display to the user. 
 * @returns None
 */
const PoemCard = ({id, title, date}) => {

    return (
        <>
            <Card color="dark" body inverse>
                <CardTitle tag="h3">
                    {title}
                </CardTitle>
                <div>
                    <Container fluid>
                        <Row>
                            <Col></Col>
                            <Col></Col>
                            <Col> Release Date:{date}</Col>
                        </Row>
                    </Container>
                </div>
                <div>
                    <Button size="lg" color="primary">Read here</Button>
                </div>
            </Card>
        </>
    );


}
export default PoemCard;