import { Container, Row } from "reactstrap"
import AudreNav from "../../Components/NavComponenet/AudreNav"
const QuotesPage = ({ Quotes }) => {

    return (
        <div>

            <Container fluid="true">
                <Row style={{ marginBottom: "8rem" }}>
                    <AudreNav></AudreNav>
                </Row>
                <Row></Row>
            </Container>

        </div>
    )

}
export default QuotesPage;