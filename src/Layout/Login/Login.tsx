"use client";

import { Fragment } from "react";
import { Container, Row } from "reactstrap";
import LoginTabs from "./LoginTabs";
import LoginSlider from "./LoginSlider";

const Login = () => {
  return (
    <Fragment>
      <div className="page-wrapper">
        <div className="authentication-box">
          <Container>
            <Row>
              <LoginSlider />
              <LoginTabs />
            </Row>
          </Container>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
