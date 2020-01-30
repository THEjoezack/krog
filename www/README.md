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

## Deployment

Deployment is a bit trickier, for now. You will have to update okta for your client/server endpoints and make sure that the application login page is set to. Also, you will need to override the cors origins. Something like this:

```
ORIGINS_ALLOWED=https://festive-perlman-7b1f7e.netlify.com
```
