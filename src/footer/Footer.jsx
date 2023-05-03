import {Col, Container, Row} from "react-bootstrap";

function Footer()
{
    const styles = {
        backgroundColor: '#0b2447',
        width: '1448px',
        height: '100px',
    };

    const styles2 = {
        color: 'white',
        textAlign: 'center',
        lineHeight: '100px'
    }
    return (
            <footer className="bg" style={styles}>
                <Container>
                    <Row>
                        <Col sm>
                            <p className="text-center" style={styles2}>© Dynasty Of Wo/men - 2022 - Tous droits réservés</p>
                        </Col>
                        {/*<Col md={4}>*/}
                        {/*    <h5>Nos services</h5>*/}
                        {/*    <ul className="list-unstyled">*/}
                        {/*        <li><a href="#">Service 1</a></li>*/}
                        {/*        <li><a href="#">Service 2</a></li>*/}
                        {/*        <li><a href="#">Service 3</a></li>*/}
                        {/*    </ul>*/}
                        {/*</Col>*/}
                        {/*<Col md={4}>*/}
                        {/*    <h5>Contactez-nous</h5>*/}
                        {/*    <ul className="list-unstyled">*/}
                        {/*        <li><a href="#">Adresse</a></li>*/}
                        {/*        <li><a href="#">Téléphone</a></li>*/}
                        {/*        <li><a href="#">E-mail</a></li>*/}
                        {/*    </ul>*/}
                        {/*</Col>*/}
                    </Row>
                </Container>
            </footer>
    )
}

export default Footer