import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Layout, Avatar, Dropdown, Menu } from 'antd';
import './styles.css';
import { HeaderWrapper, LayoutWrapper, ContentWrapper, MenuWrapper } from './styles';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { logoutStaff } from '../../redux/action/inforStaff';

const PrivateLayout = ({ children }) => {
  const { Header, Footer, Content } = Layout;
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClickLogOut = () => {
    dispatch(logoutStaff());
    history.push('/admin/login')
  };
  const menu = (
    <MenuWrapper>
      <Menu.Item>
        <UserOutlined />
        <Link to="">Account</Link>
      </Menu.Item>
      <Menu.Item onClick={handleClickLogOut}>
        <LogoutOutlined />
        Logout
      </Menu.Item>
    </MenuWrapper>
  );

  return (
    <LayoutWrapper className="layout-wrapper">
      <HeaderWrapper>
        <div className="left-section">
          <Avatar src="https://firebasestorage.googleapis.com/v0/b/thecoffee-1a154.appspot.com/o/logo.png?alt=media&token=d615b968-242d-4358-9d55-362f0cc32029" />
          <p>theCoffee</p>
        </div>
        <div className="right-section">
          <Menu mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="salary">
              <Link to="/employee/1/salary">Salary</Link>
            </Menu.Item>
            <Menu.Item key="calendar">
              <Link to="/employee/1/calendar">Calendar</Link>
            </Menu.Item>
          </Menu>
          <div className="name-section">
            <h3>Nhan Nguyen</h3>
            <p>Employee</p>
          </div>
          <Dropdown overlay={menu}>
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          </Dropdown>
        </div>
      </HeaderWrapper>
      <ContentWrapper>{children}</ContentWrapper>
      {/* <Footer>Footer</Footer> */}
    </LayoutWrapper>
  );
};

export default PrivateLayout;
