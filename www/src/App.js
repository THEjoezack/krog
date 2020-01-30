import React from 'react'
import Home from './Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Security, ImplicitCallback } from '@okta/okta-react'
import { OKTA_CLIENT_ID, OKTA_OAUTH2_ISSUER } from './Config'

const config = {
  issuer: OKTA_OAUTH2_ISSUER,
  redirectUri: window.location.origin + '/implicit/callback',
  clientId: `${OKTA_CLIENT_ID}`,
  pkce: true
}

export default () => (
  <Router basename='./'>
    <Security {...config}>
      <Switch>
        <Route path={`/implicit/callback`} component={ImplicitCallback} />
        <Route path={`/`} exact={true} component={Home} />
      </Switch>
    </Security>
  </Router>
)
