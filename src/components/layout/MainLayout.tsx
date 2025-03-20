import { Layout, Menu } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { CiStopwatch } from "react-icons/ci";
import { IoWalletOutline } from "react-icons/io5";
import { PiClipboardTextLight } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";

const linkStyle = "flex items-center gap-3 text-xl";

const items = [
  {
    key: "dashaobard",
    label: (
      <span className={linkStyle}>
        <PiClipboardTextLight /> Dashaobard
      </span>
    ),
  },
  {
    key: "order-list",
    label: (
      <span className={linkStyle}>
        <PiClipboardTextLight /> Order List
      </span>
    ),
  },
  {
    key: "Home",
    label: (
      <span className={linkStyle}>
        <CiStopwatch /> Home
      </span>
    ),
    children: [
      {
        key: "create-user",
        label: "Create User",
      },
      {
        key: "update-user",
        label: "Update User",
      },
      {
        key: "deleteuser",
        label: "Delete User",
      },
    ],
  },
  {
    key: "about-us",
    label: (
      <span className={linkStyle}>
        <CiStopwatch /> About us
      </span>
    ),
  },
  {
    key: "shop",
    label: (
      <span className={linkStyle}>
        <CiStopwatch /> Shop
      </span>
    ),
  },
  {
    key: "become-partners",
    label: (
      <span className={linkStyle}>
        <CiStopwatch /> Become a partners
      </span>
    ),
  },
  {
    key: "customer",
    label: (
      <span className={linkStyle}>
        <PiClipboardTextLight /> Customer
      </span>
    ),
  },
  {
    key: "faq",
    label: (
      <span className={linkStyle}>
        <SlBadge /> FAQ
      </span>
    ),
  },
  {
    key: "payment",
    label: (
      <span className={linkStyle}>
        <IoWalletOutline /> Payment
      </span>
    ),
  },
];

const MainLayout = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
      style={{width: "300px"}}
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
            <h1 className="font-MuseoModerno">Dan Ange</h1>
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
