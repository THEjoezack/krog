// src/Home.js

import React, { Component } from 'react'
import { withAuth } from '@okta/okta-react'
import Auth from './Auth'
import { Button, Card, CardContent, Typography } from '@material-ui/core'

export default withAuth(
  class Home extends Component {
    constructor (props) {
      super(props)
      this.state = { authenticated: null }
      this.checkAuthentication = this.checkAuthentication.bind(this)
      this.checkAuthentication()
      this.login = this.login.bind(this)
      this.logout = this.logout.bind(this)
    }

    async checkAuthentication () {
      const authenticated = await this.props.auth.isAuthenticated()
      if (authenticated !== this.state.authenticated) {
        this.setState({ authenticated })
      }
    }

    componentDidUpdate () {
      this.checkAuthentication()
    }

    async login () {
      // Redirect to '/' after login
      this.props.auth.login('/')
    }

    async logout () {
      // Redirect to '/' after logout
      this.props.auth.logout('/')
    }

    render () {
      return (<React.Fragment>
        <div hidden={!!this.state.authenticated}>
          <p>You aren't logged in, so we expect 2 failures below: </p>
          <Button onClick={this.login} color="primary">Login</Button>
        </div>
        <div hidden={!this.state.authenticated}>
          <p>You are logged in, so the first call should work...and maybe the second. </p>
          <Button onClick={this.logout} color="secondary">Logout</Button>
        </div>
        <div>
          <Card variant="outlined" p={4}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Basic Authentication Check - No Group Required
              </Typography>
              <Auth method='name' />
            </CardContent>
          </Card>
          <br/>
          <Card variant="outlined">
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Authentication required, part of "Admin" group
              </Typography>
              <Auth method='claims' />
            </CardContent>
          </Card>
        </div>
        <br/>
      </React.Fragment>)
    }
  }
)
