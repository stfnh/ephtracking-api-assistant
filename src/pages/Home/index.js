import React, { Component, Fragment } from 'react';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                EPH Tracking API Assistant
              </h1>
              <h4 className="subtitle">
                National Environmental Public Health Tracking <br />
                Centers for Disease Control and Prevention
              </h4>
            </div>
          </div>
        </section>
        <hr />
        <p>
          This web application helps you to explore the EPH Tracking API and lets you interactively build API call statements.
        </p>
        <a target="_blank"
           rel="noopener noreferrer"
           href="https://ephtracking.cdc.gov/apihelp">See official docs on www.cdc.gov</a>
      </Fragment>
    );
  }
}

export default Home;
