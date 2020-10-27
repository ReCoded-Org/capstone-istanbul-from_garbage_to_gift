import React from 'react'
import "./index.css";
import { Row, Col, Container } from "react-bootstrap";

const contactData = {
    
        address: '9094 Bay Meadows Street Conyars, GA 30012',
        phone:
            {
            phone1: '+229-955-5388-336', 
            phone2: '+229-955-5373-360',
            },
        email: 
            {
            email1: 'office@mail.com', 
            email2: 'support@mail.com',
        }
}
const menuData = {
    
        explanation: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
        menu: [
             'Terms of Service',
             'Contact Us',
             'About',
             'Recent Posts',
        ]
}

export default function Footer() {

    return (
        <Container className="footer">
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <div className="address">
                        {contactData.address}
                    </div>
                    <div className="phone">
                        {contactData.phone.phone1}
                        {contactData.phone.phone2}
                    </div>
                    <div className="email">
                        {contactData.email.email1}
                        {contactData.email.email2}
                    </div>      
                </Col>
                <Col>
                    <div>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</div>
                    <div>
                        {menuData.menu.map(menuitem => <Col>{menuitem}</Col>)}
                    </div>
                </Col>
                <Col>
                 <h1>Logo</h1>
                </Col>
            </Row>
        </Container>
    )
}
