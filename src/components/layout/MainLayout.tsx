import { Layout, Menu } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { CiStopwatch } from "react-icons/ci";
import { PiClipboardTextLight } from "react-icons/pi";

const items = [
  {
    key: "dashaobard",
    label: (
      <span className="flex items-center gap-3 text-xl">
        <PiClipboardTextLight /> Dashaobard
      </span>
    ),
  },
  {
    key: "orderlist",
    label: (
      <span className="flex items-center gap-3 text-xl">
        <PiClipboardTextLight /> Order List
      </span>
    ),
  },
  {
    key: "Home",
    label: (
      <span className="flex items-center gap-3 text-xl">
        <CiStopwatch /> Home
      </span>
    ),
    children: [
      {
        key: "createuser",
        label: "Create User",
      },
      {
        key: "updateuser",
        label: "Update User",
      },
      {
        key: "deleteuser",
        label: "Delete User",
      },
    ],
  },
  {
    key: "aboutus",
    label: (
        <span className="flex items-center gap-3 text-xl">
          <CiStopwatch /> About us
        </span>
      ),
  },
];

const MainLayout = () => {
  return (
    <Layout style={{ height: "100vh" }}>
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
        <div style={{ color: "white" }} className="demo-logo-vertical" />
        <div
          style={{
            color: "white",
            height: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="">
            {/* <img src="/assets/dan_ange-dashboard.png" alt="" /> */}
            <h1>Dan Ange</h1>
          </div>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
          }}
        />
        <Content
          style={{
            margin: "24px 16px 0",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            content
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
