import { Card, CardTitle, CardBody } from "reactstrap";
/**
 * PoemCard is a display component used to display the basic information surrounding
 * a specific poem.
 * @param {props{id , title , date , description}}} accepts a object containing props
 * to display to the user. 
 * @returns None
 */
const PoemCard = ({ title, text }) => {

    return (
        <>
            <Card color="dark" body inverse>
                <CardTitle inverse tag="h3">
                    {title}
                </CardTitle>
                <CardBody>
                    {text.map((val) => <p>{val}</p>)}
                </CardBody>
            </Card>
        </>
    );


}
export default PoemCard;