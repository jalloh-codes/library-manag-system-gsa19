import React from 'react';
import {Col, CardBody, CardTitle, CardText, CardSubtitle} from 'reactstrap';
const StudentInfo = ({id, fname, lname, studentID, address, city, state, apt, zipcode, major}) =>(
    <Col sm="12" md={{ size: 6, offset: 3 }} key={id}>
        <CardBody>
            <p className="glyphicon glyphicon-user"></p>
            <CardBody>
                <CardTitle>Name: {fname}, {lname}<CardSubtitle>ID:{studentID}</CardSubtitle></CardTitle>
                <CardSubtitle><CardText>Major: {major}</CardText> </CardSubtitle>
                <CardSubtitle>
                    <CardText>Address:{address}, Apt:{apt}</CardText>
                    <CardText>City: {city}, St:<strong>{state}.</strong> </CardText>
                    <CardText>Zipe: {zipcode}.</CardText>
                </CardSubtitle>
            </CardBody>
        </CardBody>
    </Col>
);

export default StudentInfo;