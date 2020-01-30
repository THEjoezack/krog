# KROG!

This project serves as a basic template for building modern [3 Factor Apps](https://3factor.app/) with some of my favorite tools.

Acronyms are hard,This is a sample architecture that combines...

- Kotlin (Spring)
- React (Apollo client)
- Okta (auth and identity)
- GraphQL (Hasura + Postgres)

## Setup

You will need to create an Okta account, and an application. The sample apps also support an "Admins" group that you can use to experiment with checking authority.

Check the readme.md files in /api and /www directories for details on setup.

Note that you will need to add your domain to the authorized list, including localhost:3000 for dev.

## Running locally

First create a .env file with some required settings

```

```

Run in Docker

```
docker-compose up -d
open http://localhost:3000
```

## Running in production

TODO
