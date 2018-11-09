import React, { Component } from "react"
import { Grid, Row, Col } from "react-bootstrap"

import { Card } from "../../components/Card/Card.jsx"
import { StatsCard } from "../../components/StatsCard/StatsCard.jsx"

import { connect } from "react-redux"

const appImage = {
  height: "35%"
}

class Dashboard extends Component {
  createLegend(json) {
    var legend = []
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i]
      legend.push(<i className={type} key={i} />)
      legend.push(" ")
      legend.push(json["names"][i])
    }
    return legend
  }
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-albums text-info" />}
                statsText="Number of Approved Apps"
                statsValue="10"
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Updated now"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-news-paper text-success" />}
                statsText="Apps added in last 7 days"
                statsValue="2"
                statsIcon={<i className="fa fa-calendar-o" />}
                statsIconText="Last day"
              />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Card
                id="chartHours"
                title="Apps"
                category="Top Rated Tethys Apps"
                content={
                  <Row>
                    {this.props.apps.map((app, i) => (
                      <Col lg={3} sm={6} key={i}>
                        <Card
                          title={app.name}
                          category={app.type}
                          stats="App Rating : {app.rating}"
                          statsIcon="pe-7s-star"
                          content={
                            <div className="image" style={appImage}>
                              <img alt="appIcon" src={app.imageUrl} />
                            </div>
                          }
                        />
                      </Col>
                    ))}
                  </Row>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  const {
    warehouse: { apps }
  } = state
  return {
    apps
  }
}

export default connect(mapStateToProps)(Dashboard)
