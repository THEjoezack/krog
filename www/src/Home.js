// src/Home.js

import React, { Component } from 'react'
import { withAuth } from '@okta/okta-react'
import Auth from './Auth'

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
      if (this.state.authenticated === null) return null
      return this.state.authenticated ? (
        <div>
          <p>Now you should be able to retrieve data from the server...</p>
          <h2>No group required</h2>
          <Auth method='name' />
          <h2>Admin group required</h2>
          <Auth method='claims' />
          <button onClick={this.logout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>You aren't logged in, so this should fail</p>
          <h2>No group required</h2>
          <Auth method='name' />
          <h2>Admin group required</h2>
          <Auth method='claims' />><button onClick={this.login}>Login</button>
        </div>
      )
    }
  }
)
