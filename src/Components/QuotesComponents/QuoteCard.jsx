import { Card, CardBody, CardText } from "reactstrap"
const QuotesCard = ({ QuoteText }) => {

    return (
        <div>
            <Card
                color="dark"
                body
                style={{ margin: "1rem" }}
                inverse
            >
                <CardBody>
                    <CardText>
                        <p className="text-lg-left font-weight-bold" >{QuoteText}</p>
                    </CardText>
                </CardBody>
            </Card>
        </div>
    )

}
export default QuotesCard;