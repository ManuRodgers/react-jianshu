import React, { Component } from 'react';
import withRouter from 'umi/withRouter';
import PropTypes from 'prop-types';

class GlobalLayout extends Component {
  componentDidUpdate(prevProps, prevState, prevContext) {
    const { location } = this.props;
    if (prevProps.location !== location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    const { children } = this.props;
    return <div>{children}</div>;
  }
}

GlobalLayout.propTypes = {};

export default withRouter(GlobalLayout);
