import React, { Component } from "react"
import ChartistGraph from "react-chartist"
import { Grid, Row, Col } from "react-bootstrap"

import { Card } from "../../components/Card/Card.jsx"
import { StatsCard } from "../../components/StatsCard/StatsCard.jsx"
import { Tasks } from "../../components/Tasks/Tasks.jsx"
import {
  dataPie,
  legendPie,
  dataSales,
  optionsSales,
  responsiveSales,
  legendSales,
  dataBar,
  optionsBar,
  responsiveBar,
  legendBar
} from "../../variables/Variables.jsx"

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
                    <Col lg={3} sm={6}>
                      <Card
                        title="StreamFlow Prediction Tool"
                        category="App Category"
                        stats="App Rating : 5.0"
                        statsIcon="pe-7s-star"
                        content={
                          <div className="image" style={appImage}>
                            <img src="http://tethys.byu.edu/static/streamflow_prediction_tool/images/logo.png" />
                          </div>
                        }
                      />
                    </Col>

                    <Col lg={3} sm={6}>
                      <Card
                        title="GRACE"
                        category="App Category"
                        stats="App Rating : 5.0"
                        statsIcon="pe-7s-star"
                        content={
                          <div className="image" style={appImage}>
                            <img src="http://tethys.byu.edu/static/grace/images/logo.jpg" />
                          </div>
                        }
                      />
                    </Col>

                    <Col lg={3} sm={6}>
                      <Card
                        title="GRACE"
                        category="App Category"
                        stats="App Rating : 5.0"
                        statsIcon="pe-7s-star"
                        content={
                          <div className="image" style={appImage}>
                            <img src="http://tethys.byu.edu/static/grace/images/logo.jpg" />
                          </div>
                        }
                      />
                    </Col>
                    <Col lg={3} sm={6}>
                      <Card
                        title="GRACE"
                        category="App Category"
                        stats="App Rating : 5.0"
                        statsIcon="pe-7s-star"
                        content={
                          <div className="image" style={appImage}>
                            <img src="http://tethys.byu.edu/static/grace/images/logo.jpg" />
                          </div>
                        }
                      />
                    </Col>
                    <Col lg={3} sm={6}>
                      <Card
                        title="GRACE"
                        category="App Category"
                        stats="App Rating : 5.0"
                        statsIcon="pe-7s-star"
                        content={
                          <div className="image" style={appImage}>
                            <img src="http://tethys.byu.edu/static/grace/images/logo.jpg" />
                          </div>
                        }
                      />
                    </Col>
                    <Col lg={3} sm={6}>
                      <Card
                        title="GRACE"
                        category="App Category"
                        stats="App Rating : 5.0"
                        statsIcon="pe-7s-star"
                        content={
                          <div className="image" style={appImage}>
                            <img src="http://tethys.byu.edu/static/grace/images/logo.jpg" />
                          </div>
                        }
                      />
                    </Col>
                  </Row>
                }
              />
            </Col>
          </Row>
          {/*<Row>
            <Col md={8}>
              <Card
                statsIcon="pe-7s-star"
                id="chartHours"
                title="Users Behavior"
                category="24 Hours performance"
                stats="Updated 3 minutes ago"
                content={
                  <div className="ct-chart">
                    <ChartistGraph
                      data={dataSales}
                      type="Line"
                      options={optionsSales}
                      responsiveOptions={responsiveSales}
                    />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendSales)}</div>
                }
              />
            </Col>
            <Col md={4}>
              <Card
                statsIcon="fa fa-clock-o"
                title="Email Statistics"
                category="Last Campaign Performance"
                stats="Campaign sent 2 days ago"
                content={
                  <div
                    id="chartPreferences"
                    className="ct-chart ct-perfect-fourth"
                  >
                    <ChartistGraph data={dataPie} type="Pie" />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendPie)}</div>
                }
              />
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Card
                id="chartActivity"
                title="2014 Sales"
                category="All products including Taxes"
                stats="Data information certified"
                statsIcon="fa fa-check"
                content={
                  <div className="ct-chart">
                    <ChartistGraph
                      data={dataBar}
                      type="Bar"
                      options={optionsBar}
                      responsiveOptions={responsiveBar}
                    />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendBar)}</div>
                }
              />
            </Col>

            <Col md={6}>
              <Card
                title="Tasks"
                category="Backend development"
                stats="Updated 3 minutes ago"
                statsIcon="pe-7s-star"
                content={
                  <div className="table-full-width">
                    <table className="table">
                      <Tasks />
                    </table>
                  </div>
                }
              />
            </Col>
          </Row>*/}
        </Grid>
      </div>
    )
  }
}

export default Dashboard
