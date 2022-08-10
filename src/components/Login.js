import "../App.less";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Menu,
  Row,
  Col,
  Image,
  Typography,
} from "antd";
// import { NavLink } from "react";
import React from "react";

const { Title } = Typography;

const Login = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Title
        style={{
          color: "grey",
          textAlign: "center",
          marginBottom: "30px",
          marginTop: "20px",
        }}
        level={4}
      >
        MoMoney Reporting Portal
      </Title>
      <Row>
        <Col span={7} offset={8}>
          <Menu
            mode="horizontal"
            defaultSelectedKeys={["Login"]}
            style={{ marginBottom: "20px" }}
          >
            <Menu.Item key="Login">Login</Menu.Item>
          </Menu>
        </Col>
      </Row>
      <Row>
        <Col span={7} offset={8}>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col span={7} offset={8}>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col span={7} offset={8}>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            {/* <a className="login-form-forgot" href="">
              Forgot password?
            </a> */}
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col span={7} offset={10}>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              <a href="/dashboard"> Sign in</a>
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default Login;
