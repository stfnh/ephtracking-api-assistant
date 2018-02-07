# EPH Tracking API Assistant

[![Build Status](https://travis-ci.org/stfnh/ephtracking-api-assistant.svg?branch=master)](https://travis-ci.org/stfnh/ephtracking-api-assistant) [![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)

Hosted on github pages: https://stfnh.github.io/ephtracking-api-assistant

This web app allows you to explore and build EPH Tracking API queries more easily by providing. From the EPH Portal:

```
The National Environmental Public Health Tracking Network (Tracking Network) brings together health data and environment data from national, state, and city sources and provides supporting information to make the data easier to understand. The Tracking Network has data and information on environments and hazards, health effects, and population health.

The Tracking Network Data Application Program Interface (API) is an alternate way for developers to query data from the Environmental Public Health Tracking Network. The Tracking API provides a standard Uniform Resource Locator (URL) interface with a JavaScript Object Notation (JSON) formatted response.
```

[National Environmental Public Health Tracking Network](https://ephtracking.cdc.gov)

[Tracking Network Data Application Program Interface (API)](https://ephtracking.cdc.gov/apihelp)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

Install the dependencies:
```
yarn
```

Start the development server:
```
yarn start
```

Run tests in watch mode:
```
yarn test
```

Test coverage:
```
yarn test --coverage
```

Build for production:
```
yarn build
```

## Conintuous deployment and testing

Each push will trigger a buld on [TravisCI](https://travis-ci.org/stfnh/ephtracking-api-assistant). If build and tests are successful, the web application will be deployed to github pages.

Testing implemented with Jest (snapshots) and Enzime.


## License

 Released under the [MIT license](https://github.com/jgthms/bulma/blob/master/LICENSE).