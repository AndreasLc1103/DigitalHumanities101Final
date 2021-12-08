import { Card, CardTitle, CardSubtitle, CardBody, Button } from "reactstrap";
/**
 * PoemCard is a display component used to display the basic information surrounding
 * a specific poem.
 * @param {props{id , title , date , description}}} accepts a object containing props
 * to display to the user. 
 * @returns None
 */
const PoemCard = ({ id, title, date, description }) => {

    return (
        <>
            <Card color="dark" body inverse>
                <div>
                    <CardTitle tag="h2">
                        {title}
                    </CardTitle>
                    <CardSubtitle tag="h5">
                        Publish Date: {date}
                    </CardSubtitle>
                </div>
                <CardBody>
                    <p>{description}</p>
                </CardBody>
                <div>
                    <Button block size="lg" >Read here</Button>
                </div>


            </Card>
        </>
    );


}
export default PoemCard;