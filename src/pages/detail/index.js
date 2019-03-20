import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Typography, Divider } from 'antd';
import { connect } from 'dva';
import './index.less';

const { Text, Title, Paragraph } = Typography;
class Detail extends Component {
  render() {
    const { dispatch, detail } = this.props;
    const { title } = detail;
    return (
      <Typography className={`detailContainer`}>
        <Title level={2}>{title}</Title>
        <img src="https://shojoimg.blob.core.windows.net/pics/react_1353128.png" alt="" />
        <Title level={3}>Overview</Title>
        <Text>Now that you’re set up, let’s get an overview of React!</Text>
        <Title level={3}>What Is React?</Title>
        <Paragraph>
          React is a declarative, efficient, and flexible JavaScript library for building user
          interfaces. It lets you compose complex UIs from small and isolated pieces of code called
          “components”. React has a few different kinds of components, but we’ll start with
          React.Component subclasses:
        </Paragraph>
        <Divider />
      </Typography>
    );
  }
}

Detail.propTypes = {
  detail: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = ({ detail }) => ({ detail });

export default connect(mapStateToProps)(Detail);
