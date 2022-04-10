import React from "react";
import { Menu, Layout, Avatar, Typography, Row } from "antd";
import {
  HomeOutlined,
  FundOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import icon from "../assets/cryptocurrency.png";

const { Sider } = Layout;

const SiderBar = () => {
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <Row justify="space-between" align="middle" style={{ padding: "1rem" }}>
        <Avatar src={icon} size="large" />
        <Typography.Title level={4} style={{ margin: "0" }}>
          <Link to="/">Cryptoverse</Link>
        </Typography.Title>
      </Row>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to="/">Home </Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<FundOutlined />}>
          <Link to="/cryptocurrencies">Cryptocurrencies </Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<MoneyCollectOutlined />}>
          <Link to="/exchanges">Exchanges </Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<BulbOutlined />}>
          <Link to="/news">News </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SiderBar;
