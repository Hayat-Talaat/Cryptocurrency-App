import React from "react";
import { Layout, Space, Typography } from "antd";
import {
  Cryptocurrencies,
  CryptoDetails,
  Exchanges,
  Homepage,
  News,
  SiderBar,
} from "./components";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";

const { Header, Content, Footer } = Layout;

const App = () => {
  return (
    <>
      <Layout>
        <SiderBar />
        <Layout>
          <Header
            className="site-layout-sub-header-background"
            style={{ padding: 0 }}
          />
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route
                  path="/cryptocurrencies"
                  element={<Cryptocurrencies />}
                />
                <Route path="/crypto/:id" element={<CryptoDetails />} />
                <Route path="/exchanges" element={<Exchanges />} />
                <Route path="/news" element={<News />} />
              </Routes>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            <Typography.Title level={5}>
              Cryptoverse
              <br />
              All Rights Reserved
            </Typography.Title>
            <Space>
              <Link to="/">Home</Link>
              <Link to="/cryptocurrencies">Cryptocurrencies</Link>
              <Link to="/exchanges">Exchanges</Link>
              <Link to="/news">News</Link>
            </Space>
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default App;
