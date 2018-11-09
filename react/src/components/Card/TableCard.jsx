import React, { Component } from "react"
import { Row, Col, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

export class TableCard extends Component {
  render() {
    return (
      <div className={"card" + (this.props.plain ? " card-plain" : "")}>
        <Row>
          <Col xs={2}>
            <div class="tableCardImage">
              <img src={this.props.image} alt="App logo" />
            </div>
          </Col>
          <Col xs={8}>
            <div
              className={"header" + (this.props.hCenter ? " text-center" : "")}>
              <h4 className="title">{this.props.title}</h4>
              <p className="category">{this.props.category}</p>
            </div>
            <div
              className={
                "content" +
                (this.props.ctAllIcons ? " all-icons" : "") +
                (this.props.ctTableFullWidth ? " table-full-width" : "") +
                (this.props.ctTableResponsive ? " table-responsive" : "") +
                (this.props.ctTableUpgrade ? " table-upgrade" : "")
              }>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              posuere justo non metus ultricies posuere. Cras dignissim eget dui
              quis lacinia. Sed placerat nunc sit amet metus tristique pulvinar.
              Aenean non scelerisque neque. In varius purus at massa lacinia, a
              malesuada lorem euismod. Curabitur lobortis fermentum tincidunt.
              Mauris urna lacus, auctor sed mollis quis, consectetur at neque.
              Vestibulum cursus imperdiet libero nec rhoncus.
              {this.props.content}
            </div>
          </Col>
          <Col xs={2}>
            <br />
            <Button bsStyle="primary" block>
              Download
            </Button>
            <Button bsStyle="warning" block>
              Report
            </Button>
            <Button bsStyle="danger" block>
              Delete
            </Button>
            <br />
            <Link to={`/app/${this.props.appID}`} replace>
              <Button bsStyle="info" block>
                More Info
              </Button>
            </Link>
          </Col>
        </Row>
      </div>
    )
  }
}

export default TableCard
