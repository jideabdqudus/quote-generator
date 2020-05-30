import React from "react";

import {
  Card,
  Container,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardText,
  CardImg,
  Row,
  Col,
} from "reactstrap";

const BodyCard =({apis})=> {
  
  const buttonClicked=(location)=> {
    window.location.reload(true);
  }

    return (
      <Container className="col-md-12">
        <Row>
          <Col className="col-md-6" sm={6}>
            <Card sm={6}>
              {apis.map((api) => (
                <CardImg
                  top
                  width="100%"
                  src={api.image}
                  alt={api.character}
                  key={Date.now()}
                  style={{ maxHeight: "300px", maxWidth: "200px" }}
                />
              ))}

              {apis.map((api) => (
                <CardHeader key={Date.now()} tag="h3">
                  {api.character}
                </CardHeader>
              ))}
              <CardBody>
                {apis.map((api) => (
                  <CardText key={Date.now()}>
                    <i>" {api.quote} "</i>
                  </CardText>
                ))}
              </CardBody>
              <CardFooter className="text-muted">
                {" "}
                <Button onClick={buttonClicked}>Another Quote</Button>
              </CardFooter>
            </Card>
          </Col>
          <br />
          <Col className="col-md-6">
            <h5 className="tex-muted">The Simpsons Quote Generator</h5>
            <hr />
            <p>
              App was built using React and Axios, data gotten from{" "}
              <a
                href="https://thesimpsonsquoteapi.glitch.me/"
                style={{ color: "black" }}
              >
                {" "}
                this endpoint.
              </a>
            </p>
            <p className="lead">
              Developer:{" "}
              <a
                href="https://twitter.com/jideabdqudus"
                style={{ color: "yellow" }}
              >
                Jideabdqudus
              </a>
            </p>
            <p>May, 2020</p>
          </Col>
        </Row>
      </Container>
    );
  }

export default BodyCard;
