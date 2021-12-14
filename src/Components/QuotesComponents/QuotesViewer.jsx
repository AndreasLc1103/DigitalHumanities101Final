import { Container, Row, Col } from "reactstrap"
import QuotesCard from "../QuotesComponents/QuoteCard"
const QuotesViewer = ({ quotes, sources }) => {
    return (
        <Container>
            <Row>
                <Col>
                    {quotes.map((quote) => <QuotesCard QuoteText={quote} />)}
                </Col>
            </Row>
            <Row style={{ paddingBottom: "5rem" }}>
                <Col>
                    <h2 style={{ paddingBottom: "1rem" }}>Sources</h2>
                    <ul>
                        {sources.map((source) => <li><a href={source}>{source}</a></li>)}
                    </ul>
                </Col>
            </Row>

        </Container>
    );
}
export default QuotesViewer;