import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Card,
  Container,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  Col,
} from "reactstrap";
import Simp from "./../Header/simp.png";

export class BodyCard extends Component {
  render() {
    return (
      <Container>
        <Col className="col-md-6" sm={6}>
          <Card sm={6}>
            <CardImg
              top
              width="100%"
              src="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FChiefWiggum.png?1497567511716"
              alt="Character Name"
              style={{ maxHeight:"300px", maxWidth:"200px" }}
            />

            {this.props.apis.map((api) => (
              <CardHeader tag="h3">{api.character}</CardHeader>
            ))}
            <CardBody>
              {this.props.apis.map((api) => (
                <CardText>
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
