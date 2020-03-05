import React from 'react';
import { CardBody, CardText, CardSubtitle, Jumbotron} from 'reactstrap';
const StudentInfo = ({id, fname, lname, studentID, address, city, state, apt, zipcode, major}) =>(
    <div key={id}>
        <Jumbotron>
            <CardBody>
                <h4>{fname}, {lname}.<CardSubtitle>ID:{studentID}</CardSubtitle></h4>
                <CardSubtitle><CardText>Major: {major}</CardText> </CardSubtitle>
                <CardSubtitle>
                    <CardText>Address:{address}, Apt:{apt}</CardText>
                    <CardText>City: {city}, St:<strong>{state}.</strong> </CardText>
                    <CardText>Zipe: {zipcode}.</CardText>
                </CardSubtitle>
            </CardBody>
        </Jumbotron>
    </div>
);

export default StudentInfo;