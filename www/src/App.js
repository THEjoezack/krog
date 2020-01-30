import React from 'react'
import Home from './Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Security, ImplicitCallback } from '@okta/okta-react'
import {
  OKTA_CLIENT_ID,
  OKTA_OAUTH2_ISSUER,
  BASE_NAME,
  PUBLIC_URL
} from './Config'

const config = {
  issuer: OKTA_OAUTH2_ISSUER,
  redirectUri: window.location.origin + '/implicit/callback',
  clientId: `${OKTA_CLIENT_ID}`,
  pkce: true
}

export default () => (
  <Router>
    <Security {...config}>
      <Switch>
        <Route
          path={`${PUBLIC_URL}/index.html`}
          exact={true}
          component={Home}
        />
        <Route
          path={`${PUBLIC_URL}/implicit/callback`}
          component={ImplicitCallback}
        />
      </Switch>
    </Security>
  </Router>
)
