import fetch from 'isomorphic-fetch'
import React, { Component } from 'react'
import { withAuth } from '@okta/okta-react'
import { API_ENDPOINT } from './Config'

export default withAuth(
  class MessageList extends Component {
    constructor (props) {
      super(props)
      this.state = {
        loading: true,
        messages: null,
        error: null
      }
    }

    async componentDidMount () {
      try {
        const response = await fetch(
          `${API_ENDPOINT}/api/${this.props.method}`,
          {
            headers: {
              Authorization:
                'Bearer ' + (await this.props.auth.getAccessToken())
            }
          }
        )
        const data = await response.json()
        this.setState({ loading: false, messages: data, error: false })
      } catch (err) {
        console.log(err)
        this.setState({ loading: false, messages: [], error: err.toString() })
      }
    }

    render () {
      if (this.state.loading) return <div>Loading..</div>
      if (this.state.error)
        return <div>Error fetching messages: {this.state.error}</div>
      const items = this.state.messages.map(message => (
        <li key={message}>{message}</li>
      ))
      return (
        <div>
          <p>It worked! The server validated this call.</p>
          <ul>{items}</ul>
        </div>
      )
    }
  }
)
