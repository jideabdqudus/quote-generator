import React from "react";
import PropTypes from "prop-types";
import Simp from "./simp.png";
import { Row, Col, Container } from "reactstrap";
import styles from "./HeaderCard.module.css"

const HeaderCard = () => {
  return (
    <Container>
      <Row sm={4} >
        <Col md={{offset: 4}}>
          <img src={Simp} className={styles.headerCard}/>
        </Col>
      </Row>
    </Container>
  );
};

export default HeaderCard;
