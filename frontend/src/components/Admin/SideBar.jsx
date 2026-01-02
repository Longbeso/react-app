import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { FaTachometerAlt, FaGem, FaRegLaughWink } from "react-icons/fa";
import { MdFeaturedPlayList } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import sidebarBg from "../../assets/OIP.jpg";

import "./SideBar.scss";

import logo from "../../assets/react.svg";
const SideBar = (props) => {
  const { image, collapsed, toggled, handleToggleSidebar } = props;
  return (
    <Sidebar collapsed={collapsed} className="app-sidebar">
      {/* Header (thay SidebarHeader) */}
      <div className="sidebar-header">
        {" "}
        <img src={logo} /> Leo Bóng
      </div>

      {/* Content (thay SidebarContent) */}
      <Menu iconShape="circle">
        <MenuItem
          icon={<FaTachometerAlt />}
          // suffix={<span className="badge red">New</span>}
        >
          <Link to="/admins">dashboard</Link>
        </MenuItem>
      </Menu>

      <Menu iconShape="circle">
        <SubMenu
          label="Task"
          icon={<MdFeaturedPlayList />}
          // suffix={<span className="badge yellow">3</span>}
        >
          <MenuItem component={<Link to="/admins/manage-user" />}>
            Quản lý Users
          </MenuItem>

          <MenuItem component={<Link to="/admins/manage-quiz" />}>
            Quản lý Bài Quiz
          </MenuItem>

          <MenuItem component={<Link to="/admins/manage-question" />}>
            Quản lý Câu Hỏi
          </MenuItem>
        </SubMenu>
      </Menu>
    </Sidebar>
  );
};

export default SideBar;
