import "./App.less";
import Subscriber from "./Subscriber";
import { Tabs } from "antd";
import React from "react";
const { TabPane } = Tabs;

const onChange = (key) => {
  console.log(key);
};

const App = () => (
  <Tabs defaultActiveKey="1" onChange={onChange}>
    <TabPane tab="Subscriber L1,L2" key="subscriber">
      <Subscriber></Subscriber>
    </TabPane>
    <TabPane tab="Agents" key="agent">
      Content of Tab Pane 2
    </TabPane>
    <TabPane tab="Master Agents" key="m-agent">
      Content of Tab Pane 3
    </TabPane>
    <TabPane tab="Merchant" key="merchant">
      Content of Tab Pane 3
    </TabPane>
    <TabPane tab="Corporate Users" key="coporate-user">
      Content of Tab Pane 3
    </TabPane>
  </Tabs>
);

export default App;
