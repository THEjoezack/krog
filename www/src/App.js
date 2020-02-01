import React from 'react'
import Home from './Home'
import { Box, Container, CssBaseline, Typography } from '@material-ui/core'
import { MuiThemeProvider } from "@material-ui/core/styles"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Security, ImplicitCallback } from '@okta/okta-react'
import { OKTA_CLIENT_ID, OKTA_OAUTH2_ISSUER } from './Config'
import Theme from './configs/Theme'

const config = {
  issuer: OKTA_OAUTH2_ISSUER,
  redirectUri: window.location.origin + '/implicit/callback',
  clientId: `${OKTA_CLIENT_ID}`,
  pkce: true
}

const theme = Theme.getCurrentTheme()

export default () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Container maxWidth="lg">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          KROG!
        </Typography>
        <Router basename='./'>
          <Security {...config}>
            <Switch>
              <Route path={`/implicit/callback`} component={ImplicitCallback} />
              <Route path={`/`} exact={true} component={Home} />
            </Switch>
          </Security>
        </Router>
      </Box>
    </Container>
  </MuiThemeProvider>
)
