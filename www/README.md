This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Setup

1. Create an [application in Okta](https://developer.okta.com/quickstart/#/react/nodejs/express) and note your (api) issuer and (application) clientId

2. Create a .env.local file with the following values:

```
REACT_APP_OKTA_OAUTH2_ISSUER=<YOUR ISSUER HERE>
REACT_APP_OKTA_CLIENT_ID=<YOUR CLIENT ID HERE>
```

3. Run `npm install`

4. Run `npm start`
