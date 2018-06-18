import React, { Component } from "react"
import { FormGroup, ControlLabel, FormControl, Col } from "react-bootstrap"

// const adaptFileEventToValue = delegate => e => delegate(e.target.files)

export class FieldInputs extends Component {
  render() {
    const {
      input: { onChange, onBlur, value: omitValue, ...inputProps },
      meta: omitMeta,
      label,
      type,
      ...props
    } = this.props
    let compClass = type === "textarea" ? "textarea" : undefined
    delete inputProps.value
    // let onChangeHandler =
    //   type === "file" ? adaptFileEventToValue(onChange) : onChange
    // let onBlurHandler = type === "file" ? adaptFileEventToValue(onBlur) : onBlur

    return (
      <Col componentClass={ControlLabel} md={this.props.colLen}>
        <FormGroup controlId={this.props.name}>
          <Col sm={this.props.colLen === 6 ? 2 : 1}>{label}</Col>
          <Col sm={this.props.colLen === 6 ? 10 : 11}>
            <FormControl
              type={type}
              placeholder={this.props.placeholder}
              rows={this.props.dataRows}
              bsClass="form-control"
              componentClass={compClass}
              multiple={this.props.multiple}
              onChange={onChange}
              onBlur={onBlur}
            />
          </Col>
        </FormGroup>
      </Col>
    )
  }
}

export default FieldInputs
