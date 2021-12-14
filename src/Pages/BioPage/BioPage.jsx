import React from "react";
import { Container, Row, Col, Card, CardImg } from "reactstrap";
import AudreNav from "../../Components/NavComponenet/AudreNav";
import LordeBioPage from './LordeBioPage.jpg'
const BioPage = () => {

    return (

        <Container style={{ paddingLeft: "5rem" }}>
            <Row>
                <Col> <AudreNav></AudreNav></Col>
            </Row>
            <Row>

                <Col>
                    <h2 className="fs-1 fw-bolder">Biography</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h6 className="fs-6 fw-light"> Born: February 18, 1934</h6>
                    <h6 className="fs-6 fw-light">Died: November 17, 1992</h6>
                </Col>
            </Row>

            <Row>
                <Col style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    justifyContent: "center"
                }}>
                    <h2 className="fw-bold">About</h2>
                    <p>
                        Audre Lorde referred to herself as “black, lesbian, mother, warrior, poet” and dedicated her life and her creativity to addressing the injustices of racism, homophobia, sexism, and classism.

                    </p>
                    <p>
                        Lorde published her first poem in Seventeen Magazine while she was a student. Lorde attended various Catholic schools, until graduating from Hunter High School. Lorde’s personal experiences that parallel with political objectives have been closely intertwined with her contributions to feminist theory, queer theory, and racial studies.

                    </p>
                </Col>
                <Col lg={1}></Col>
                <Col lg={5} style={{
                    display: "flex",
                    alignItems: "start",
                    justifyContent: "center"
                }}>
                    <img src={LordeBioPage} style={{ width: "80%" }} alt="A black and white photo of Audre Lorde" />

                </Col>
            </Row>


            <Row>
                <h2 className="fw-bold"> Writing</h2>
                <Col style={{ fontStyle: "italic" }}>
                    I literally communicated through poetry.
                </Col>

            </Row>
            <Row>
                <Col lg={6}>
                    <p>
                        Much of Lorde’s work has been an early articulation on the intersections of race, class, and gender, specifically seen in her essays, such as “The Master’s Tools Will Not Dismantle the Master’s House.”

                    </p>
                    <p>
                        According to writer Joan Martin, Audre Lorde’s poetry “rings with passion, sincerity, perception, and depth of feeling.” Much of Lodre’s poetry is known for its power in, not only social and racial justice, but illuminating the queer experience and sexuality.
                    </p>
                </Col>

            </Row>
        </Container>


    )
}
export default BioPage;
