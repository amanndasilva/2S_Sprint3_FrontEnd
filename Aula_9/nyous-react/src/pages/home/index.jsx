import React from 'react';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';
import {Carousel, Jumbotron, Button, Container, Row, Col, Card} from 'react-bootstrap';

const Home = () => {
    return(
        <div>
            <Menu />
                <Carousel>
                    <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.ilhabela.com.br/wp-content/uploads/2016/01/eventos-em-ilhabela.jpg"
                        alt="First slide"
                    />
                    </Carousel.Item>
                </Carousel>
                <Jumbotron className="text-center">
                    <h1>Diversos eventos em um único local!</h1>
                    <p>
                        Encontre eventos nos mais diversos segmentos de forma rápida.
                    </p>
                    <p>
                        <Button variant="primary" href='/login'>Login</Button> <Button variant="success" href='/cadastrar'>Cadastrar</Button>
                    </p>
                </Jumbotron>
                <Container>
                    <Row className="text-center">
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Tecnologia</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go!</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Inovação</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go!</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Educação</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go!</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            <Rodape />
        </div>
    )
}

export default Home;