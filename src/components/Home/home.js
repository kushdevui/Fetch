import React from 'react';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';

const Home = () =>{
    return(
        <Grid>
            <Row className="show-grid">
                <Col xs={12} md={8}>
                <code>{'<Col xs={12} md={8} />'};</code>
                </Col>
                <Col xs={6} md={4}>
                <code>{'<Col xs={6} md={4} />'}</code>
                </Col>
            </Row>
        </Grid>
    )
}

export default Home;
