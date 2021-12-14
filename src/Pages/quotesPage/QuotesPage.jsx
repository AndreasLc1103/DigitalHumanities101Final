import { useState } from "react"
import { Container, Row, Col } from "reactstrap"
import AudreNav from "../../Components/NavComponenet/AudreNav"
import QuotesData from "../../Components/data/quotes.json";
import QuotesViewer from "../../Components/QuotesComponents/QuotesViewer";
const QuotesPage = () => {
    const [quotes] = useState([...QuotesData.quotes]);
    const [sources] = useState([...QuotesData.quoteSources])

    return (

        <Container style={{ paddingLeft: "5rem" }} fluid={"md"}>
            <Row>
                <AudreNav></AudreNav>
            </Row>

            <Row>
                <Col>
                    <h2> Quotes from the Author</h2>
                </Col>
            </Row>
            <Row>
                <QuotesViewer quotes={quotes} sources={sources} />
            </Row>

        </Container >

    );

}
export default QuotesPage;