import { Layout, Menu } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { CiStopwatch } from "react-icons/ci";
import { IoWalletOutline } from "react-icons/io5";
import { PiClipboardTextLight } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";
import { Outlet } from "react-router-dom";

const linkStyle = "flex items-center gap-3 text-xl";

const items = [
  {
    key: "dashboard",
    label: (
      <span className={linkStyle}>
        <PiClipboardTextLight /> Dashboard
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
    key: "home",
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
        key: "delete-user",
        label: "Delete User",
      },
    ],
  },
  {
    key: "about-us",
    label: (
      <span className={linkStyle}>
        <CiStopwatch /> About Us
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
    key: "become-partner",
    label: (
      <span className={linkStyle}>
        <CiStopwatch /> Become a Partner
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
        width={260}
        style={{ background: "#001529" }}
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div
          style={{
            color: "white",
            height: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div>
            <h1 className="font-MuseoModerno text-2xl">Dan Ange</h1>
          </div>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["dashboard"]}
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div style={{ padding: 24, minHeight: 360 }}>
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
