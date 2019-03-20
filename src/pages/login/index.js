import React, { Component } from 'react';
import { connect } from 'dva';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import PropTypes from 'prop-types';
import Redirect from 'umi/redirect';
import './index.less';

class NormalLoginForm extends Component {
  handleSubmit = e => {
    const { dispatch } = this.props;
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(`Received values of form`, values);
      }
    });
    dispatch({ type: 'login/login' });
  };
  componentDidMount = () => {
    const { form } = this.props;
    form.validateFields();
  };

  render() {
    const { form } = this.props;
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = form;
    const userNameError = isFieldTouched(`userName`) && getFieldError(`userName`);
    const passwordError = isFieldTouched(`password`) && getFieldError(`password`);
    const rememberError = isFieldTouched(`remember`) && getFieldError(`remember`);
    return (
      <Form onSubmit={this.handleSubmit} className={`login-form`}>
        <Form.Item validateStatus={userNameError ? `error` : ``} help={userNameError || ``}>
          {getFieldDecorator(`userName`, {
            rules: [{ required: true, message: 'Please input your username' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder={`Username`}
            />
          )}
        </Form.Item>
        <Form.Item validateStatus={passwordError ? 'error' : ''} help={passwordError || ``}>
          {getFieldDecorator(`password`, {
            rules: [{ required: true, message: `Please input your Password!` }],
          })(
            <Input
              placeholder={`Password`}
              type={`password`}
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            />
          )}
        </Form.Item>
        <Form.Item validateStatus={rememberError ? `error` : ''}>
          {getFieldDecorator(`remember`, {
            valuePropName: 'checked',
            initialValue: true,
            rules: [
              { required: false, message: 'You can optionally select to remember your user name' },
            ],
          })(<Checkbox>Remember me</Checkbox>)}
          <a className="login-form-forgot" href=":;">
            Forgot password
          </a>
          <Button
            className="login-form-button"
            onClick={this.handleSubmit}
            disabled={Object.keys(getFieldsError()).some(field => getFieldsError()[field])}
            type={'primary'}
            htmlType={`button`}
          >
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    );
  }
}
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

class Login extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    Login: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  render() {
    const { home, dispatch, login } = this.props;

    console.log('TCL: Login -> render -> login', login);
    console.log('TCL: Login -> render -> home', home);
    return (
      <div className={`loginContainer`}>
        {login.login ? <Redirect to={`/`} /> : <WrappedNormalLoginForm dispatch={dispatch} />}
      </div>
    );
  }
}

const mapStateToProps = ({ home, login }) => ({ home, login });
export default connect(mapStateToProps)(Login);
