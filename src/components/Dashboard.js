import "../App.less";
import Subscriber from "./Subscriber";
import Agents from "./Agents";
import MasterAgents from "./MasterAgents";
import Merchant from "./Merchant";
import CorporateUsers from "./CorporateUsers";

import { Layout, Menu, Breadcrumb, Typography, Avatar, Tabs } from "antd";
import {
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  SearchOutlined,
  QuestionCircleOutlined,
  BellOutlined,
} from "@ant-design/icons";

import React, { useState } from "react";

const { TabPane } = Tabs;

const onChange = (key) => {
  console.log(key);
};

const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem("Dashboard", "1", <PieChartOutlined />),
  getItem("Digital Wallet Reports", "sub1", <UserOutlined />, [
    getItem("Risk Report", "2"),
    getItem("Transaction Report", "3"),
  ]),
  getItem("Setting", "sub2", <TeamOutlined />, [
    getItem("Team 1", "4"),
    getItem("Team 2", "5"),
  ]),
  getItem("Users", "sub3", <UserOutlined />, [
    getItem("Risk Report", "6"),
    getItem("Transaction Report", "7"),
  ]),
];

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Header style={{ padding: 10, backgroundColor: "green", height: 50 }}>
        <Avatar style={{ float: "right" }} icon={<UserOutlined />} />
        <Avatar
          style={{ float: "right", marginRight: 10 }}
          icon={<BellOutlined />}
        />
        <Avatar
          style={{ float: "right", marginRight: 10 }}
          icon={<QuestionCircleOutlined />}
        />
        <Avatar
          style={{ float: "right", marginRight: 10 }}
          icon={<SearchOutlined />}
        />
        <Title style={{ color: "white" }} level={4}>
          MoMoney Reporting Portal
        </Title>
      </Header>

      <Layout>
        <Sider
          style={{ backgroundColor: "white" }}
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <Menu defaultSelectedKeys={["1"]} mode="inline" items={items} />
        </Sider>

        <Layout className="site-layout">
          <Content
            style={{
              margin: "0 16px",
            }}
          >
            <Breadcrumb
              style={{
                margin: "16px 0",
              }}
            >
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>

            <Tabs defaultActiveKey="1" onChange={onChange}>
              <TabPane tab="Subscriber L1,L2" key="subscriber">
                <Subscriber></Subscriber>
              </TabPane>
              <TabPane tab="Agents" key="agent">
                <Agents></Agents>
              </TabPane>
              <TabPane tab="Master Agents" key="maseter-agent">
                <MasterAgents></MasterAgents>
              </TabPane>
              <TabPane tab="Merchant" key="merchant">
                <Merchant></Merchant>
              </TabPane>
              <TabPane tab="Corporate Users" key="corporate-users">
                <CorporateUsers></CorporateUsers>
              </TabPane>
            </Tabs>
          </Content>

          <Footer
            style={{
              textAlign: "center",
            }}
          >
            © 2021 copyright all right reserved
          </Footer>
        </Layout>
      </Layout>
    </layout>
  );
};

export default Dashboard;
