import React, { Component } from "react"
import { Grid, Row, Col } from "react-bootstrap"

import { connect } from "react-redux"
import { UserCard } from "../../components/UserCard/UserCard.jsx"

class AppView extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12} />
            {this.props.apps.map((app, i) => {
              if (app.id == this.props.match.params.appid) {
                return (
                  <UserCard
                    bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
                    avatar={app.imageUrl}
                    name={app.name}
                    userName={app.type}
                    description={
                      <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam posuere justo non metus ultricies posuere. Cras
                        dignissim eget dui quis lacinia. Sed placerat nunc sit
                        amet metus tristique pulvinar. Aenean non scelerisque
                        neque. In varius purus at massa lacinia, a malesuada
                        lorem euismod. Curabit ur lobortis fermentum tincidunt.
                        Mauris urna lacus, auctor sed mollis quis, consectetur
                        at neque. Vestibulum cursus imperdiet libero nec
                        rhoncus.
                      </span>
                    }
                  />
                )
              }
            })}
          </Row>
        </Grid>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    apps: state.warehouse.apps
  }
}
export default connect(mapStateToProps)(AppView)
