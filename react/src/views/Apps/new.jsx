import React, { Component } from "react"
import NotificationSystem from "react-notification-system"
import { connect } from "react-redux"
import { Field, reduxForm } from "redux-form"

import { Col, Form } from "react-bootstrap"

import { Card } from "../../components/Card/Card.jsx"
import { FieldInputs } from "../../components/FieldInputs/FieldInputs.jsx"
import Button from "../../components/CustomButton/CustomButton.jsx"

import { style } from "../../variables/Variables.jsx"

const NewApp = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <div className="wrapper">
      <div className="content">
        <Col md={12}>
          <Card
            title="Add App"
            content={
              <Form horizontal onSubmit={handleSubmit}>
                <Field
                  component={FieldInputs}
                  name="appName"
                  model="warehouse.app.appName"
                  colLen={6}
                  label="Application Name"
                  type="text"
                  placeholder="Application Name"
                />
                <Field
                  component={FieldInputs}
                  colLen={6}
                  name="appVersion"
                  label="Application Version"
                  type="text"
                  placeholder="1.0"
                />
                <Field
                  component={FieldInputs}
                  colLen={12}
                  name="appDescription"
                  label="Application Description"
                  type="textarea"
                  placeholder="Here can be your description"
                  dataRows={5}
                />
                {/* <Field
                  component={FieldInputs}
                  colLen={12}
                  name="appScreenshots"
                  label="Application Screenshots (You can upload multiple files)"
                  type="file"
                  multiple
                />*/}
                <Field
                  component={FieldInputs}
                  colLen={12}
                  name="appLink"
                  label="Application GitHub URL"
                  type="text"
                  placeholder="https://github.com/"
                />
                <Button
                  bsStyle="info"
                  pullRight
                  fill
                  type="submit"
                  disabled={submitting}>
                  Submit App for Review
                </Button>
                <div className="clearfix" />
              </Form>
            }
          />
        </Col>
      </div>
    </div>
  )
}

export default reduxForm({
  form: "NewApp"
})(NewApp)
