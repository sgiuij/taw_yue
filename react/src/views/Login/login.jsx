import React, { Component } from "react"
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap"

import { Card } from "../../components/Card/Card.jsx"
import { FormInputs } from "../../components/FormInputs/FormInputs.jsx"
import { UserCard } from "../../components/UserCard/UserCard.jsx"
import Button from "../../components/CustomButton/CustomButton.jsx"

import avatar from "../../assets/img/faces/face-3.jpg"

class Login extends Component {
  constructor(props, context) {
    super(props, context)

    this.handleChange = this.handleChange.bind(this)

    this.state = {
      username: "",
      password: ""
    }
  }

  getValidationState(key) {
    const length = this.state[key].length
    if (length > 8) {
      return "success"
    } else if (length > 0) {
      return "warning"
    } else if (length <= 0) {
      return "error"
    }
    return null
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value })
  }

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={3} mdOffset={4}>
              <Card
                title="Login"
                content={
                  <form>
                    <Row>
                      <Col md={12}>
                        <FormGroup
                          controlId="username"
                          validationState={this.getValidationState("username")}>
                          <ControlLabel>Username</ControlLabel>
                          <FormControl
                            type="text"
                            value={this.state.username}
                            placeholder="Username"
                            onChange={this.handleChange}
                          />
                        </FormGroup>
                        <FormGroup
                          controlId="password"
                          validationState={this.getValidationState("password")}>
                          <ControlLabel>Password</ControlLabel>
                          <FormControl
                            type="password"
                            value={this.state.password}
                            placeholder="Password"
                            onChange={this.handleChange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button bsStyle="info" pullRight fill type="submit">
                      Login
                    </Button>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
          </Row>
        </Grid>>
      </div>
    )
  }
}

export default Login
