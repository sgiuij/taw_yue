import React, { Component } from "react"
import { Grid, Row, Col, Table } from "react-bootstrap"

import Card from "../../components/Card/Card.jsx"
import TableCard from "../../components/Card/TableCard.jsx"

import { appList } from "../../variables/Variables.jsx"

const appImage = {
  height: "1%"
}

class AllApps extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="List of all Apps"
                ctTableResponsive
                content={
                  <Table hover>
                    {/*  <thead>
                      <tr>
                        {thArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>
                        })}
                        <th key="edit">Edit</th>
                        <th key="delete">Delete</th>
                      </tr>
                    </thead>*/}
                    <tbody>
                      {appList.map((app, i) => (
                        <tr>
                          <TableCard
                            key={i}
                            appID={app.id}
                            title={app.name}
                            category={app.type}
                            image={app.imageUrl}
                            content={
                              <div className="image" style={appImage}>
                                {/*<img alt="appIcon" src={app.imageUrl} />*/}
                              </div>
                            }
                          />
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default AllApps
