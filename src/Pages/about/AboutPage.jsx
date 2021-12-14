import { Container, Row, Col } from "reactstrap"
import AudreNav from "../../Components/AudreNav"
const AboutPage = () => {


    return (
        <div>
            <Container>
                <Row>
                    <AudreNav style={{ marginBottom: "10rem" }}></AudreNav>
                </Row>
                <Row>
                    <h1 className="fs-1 fw-bold" style={{ marginBottom: "2rem" }}>About</h1>
                </Row>
                <Row className="text-center"> <h2 className="">Mission Statement</h2></Row>
                <Row style={{ marginBottom: "2rem" }}>
                    <p className="text-center">Audre Lorde was an American writer, feminist, and civil rights activist (among many other things). She is best known for her powerful poetry that tackles injustices
                        related to racism, homophobia, sexism, and classism.
                        Lorde does an exceptional job on connecting her personal
                        experiences with her political objectives. </p>
                    <p className="text-center">Our goal is to create a digital space that focuses on Audre Lorde’s
                        poetry and her mission to intersect the queer experience and her
                        experience as a Black woman. Her work deserves to be attainable. </p>
                </Row>

                <Row style={{ marginBottom: "1rem" }}>
                    <h3 className="fs-1 fw-bold">
                        Meet the Team
                    </h3>
                </Row>
                <Row>
                    <h4 className="fw-bold">Technical Editor and Software Engineer</h4>
                    <ul style={{ marginLeft: "5rem" }}>
                        <li> Andreas Leonard-Calcano</li>
                    </ul>
                </Row>
                <Row>
                    <h4 className="fw-bold">Web Developer and Encoding</h4>
                    <ul style={{ marginLeft: "5rem" }}>
                        <li>Cam Olson</li>
                    </ul>
                </Row>
                <Row>
                    <h4 className="fw-bold">Research</h4>
                    <ul style={{ marginLeft: "5rem" }}>
                        <li>Erin Toole</li>
                        <li>Kenzie Vanacore</li>
                        <li>Mason Wahlers</li>
                    </ul></Row>
            </Container>
        </div >
    )
}
export default AboutPage;
