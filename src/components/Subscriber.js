import "../App.less";
import React, { useState } from "react";
import { Layout, Typography, Button, Form, Row, Col, Input, Table } from "antd";

const { Title } = Typography;

const columns = [
  {
    title: "Rule Name",
    dataIndex: "name",
    render: (text) => <a style={{ color: "#4CB849" }}>{text}</a>,
  },
  {
    title: "Description",
    className: "column-money",
    dataIndex: "description",
    align: "left",
  },
  {
    title: "Service Calls",
    dataIndex: "call",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Status",
    dataIndex: "status",
  },
  {
    title: "Last Dispatch Time",
    dataIndex: "time",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Action",
    dataIndex: "action",
    render: (text) => <a style={{ color: "#4CB849" }}>{text}</a>,
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    description: "New York No. 1 Lake Park",
    call: "300,000.00",
    status: "Hi",
    time: "20-6-2022",
    action: "Config",
  },
  {
    key: "2",
    name: "Jim Green",
    description: "London No. 1 Lake Park",
    call: "1,256,000.00",
    status: "Hi",
    time: "20-6-2022",
    action: "Config",
  },
  {
    key: "3",
    name: "Joe Black",
    description: "Sidney No. 1 Lake Park",
    call: "120,000.00",
    status: "Hi",
    time: "20-6-2022",
    action: "Config",
  },
];

const Dashboard = () => {
  return (
    <div
      className="site-layout-background"
      style={{
        padding: 24,
        minHeight: 450,
      }}
    >
      <Form>
        <Row>
          <Col span={4}>
            <Form.Item label="From">
              <Input />
            </Form.Item>
          </Col>
          <Col offset={1} span={4}>
            <Form.Item label="To">
              <Input />
            </Form.Item>
          </Col>
          <Col offset={1} span={4}>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Export
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <Table columns={columns} dataSource={data} bordered />
    </div>
  );
};

export default Dashboard;
