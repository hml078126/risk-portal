import "../App.less";
import React, { useState } from "react";
import { Layout, Typography, Button, Form, Row, Col, Input, Table } from "antd";

const { Title } = Typography;

const Dashboard = () => {
  return (
    <div
      className="site-layout-background"
      style={{
        padding: 24,
        minHeight: 450,
      }}
    >
      Corporate Users
    </div>
  );
};

export default Dashboard;
