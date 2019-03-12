import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { GlobalStyle } from '../style';
import Header from '../components/Header/index';
class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <Header />
      </Fragment>
    );
  }
}

App.propTypes = {};

export default App;
