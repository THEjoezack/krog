# API

## Running locally

There are two required environment variables:

```
OKTA_OAUTH2_ISSUER=https://xxxxxxxxx/oauth2/default
OKTA_OAUTH2_CLIENT_ID=xxxxxxxxx
``` 

## Via Docker

You'll need to sign up for an Okta account, and create an application.

Grab the issuer and clientID and pass them as required environment variables

```
docker build . -t okta-react-spring
docker run -e OKTA_OAUTH2_ISSUER=https://xxxxxxxxx/oauth2/default -e OKTA_OAUTH2_CLIENT_ID=xxxxxxxxx okta-react-spring
```