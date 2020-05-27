import React, { Component } from "react";

import {
  Card,
  Container,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  
  CardText,
  CardImg,
  Col,
} from "reactstrap";

export class BodyCard extends Component {
  render() {
    return (
      <Container>
        <Col className="col-md-6" sm={6}>
          <Card sm={6}>
            <CardImg
              top
              width="100%"
              src={this.props.apis.image}
              alt="Character Image"
              style={{ maxHeight: "300px", maxWidth: "200px" }}
            />

            {this.props.apis.map((api) => (
              <CardHeader key={Date.now()} tag="h3">{api.character}</CardHeader>
            ))}
            <CardBody>
              {this.props.apis.map((api) => (
                <CardText key={Date.now()}>
                  <i>" {api.quote} "</i>
                </CardText>
              ))}
            </CardBody>
            <CardFooter className="text-muted">
              {" "}
              <Button>Another Quote</Button>
            </CardFooter>
          </Card>
        </Col>
      </Container>
    );
  }
}

export default BodyCard;
