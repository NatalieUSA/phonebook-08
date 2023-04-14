import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import NavbarAuth from './NavbarAuth/NavbarAuth';
import NavbarUser from './NavbarUser/NavbarUser';

import styles from './nav-bar.module.css';

import { isLoggedIn } from 'redux/auth/AuthSelectors';

import items from './items';
import Button from 'shared/ButtonForm/ButtonForm';

const Navbar = () => {
  const isLogin = useSelector(isLoggedIn);
  console.log(isLogin);
  const filteredItems = !isLogin ? items.filter(item => !item.private) : items;
  const elements = filteredItems.map(({ id, text, link }) => (
    <li key={id}>
      <NavLink className={styles.link} to={link}>
        <Button>{text}</Button>
      </NavLink>
    </li>
  ));

  return (
    <div className={styles.navbar}>
      {/* <NavLink to="/">PhoneBook</NavLink> */}

      <ul className={styles.menu}>{elements}</ul>

      {!isLogin && <NavbarAuth />}
      {isLogin && <NavbarUser />}
    </div>
  );
};

export default Navbar;

// import React, { Suspense, useState } from 'react';
// import { useSelector } from 'react-redux';

// import { Link, NavLink, Outlet } from 'react-router-dom';
// import { isLoggedIn } from 'redux/auth/AuthSelectors';
// import styles from './nav-bar.module.css';
// import {
//   UserAddOutlined,
//   ContactsOutlined,
//   UserOutlined,
//   PoweroffOutlined,
// } from '@ant-design/icons';
// import { Breadcrumb, Layout, Menu, Typography, Button, Tooltip } from 'antd';

// const { Content, Footer, Sider } = Layout;
// const { Title } = Typography;

// function getItem(label, key, icon, children) {
//   return {
//     key,
//     icon,
//     children,
//     label,
//   };
// }

// const NavBar = () => {
//   const [collapsed, setCollapsed] = useState(false);
//   const isLogin = useSelector(isLoggedIn);
//   // const {
//   //   token: { colorBgContainer },
//   // } = theme.useToken();
//   const items = [
//     isLogin &&
//       getItem(
//         <NavLink to="/contacts">Contacts</NavLink>,
//         '1',
//         <ContactsOutlined />
//       ),
//     !isLogin &&
//       getItem(
//         <NavLink to="/login">Login</NavLink>,

//         '2',
//         <UserOutlined />
//       ),
//     !isLogin &&
//       getItem(
//         <NavLink to="/register">Register</NavLink>,
//         '3',
//         <UserAddOutlined />
//       ),
//   ];

//   return (
//     <Layout
//       style={{
//         minHeight: '100px',
//       }}
//     >
//       <Sider
//         collapsible
//         collapsed={collapsed}
//         onCollapse={value => setCollapsed(value)}
//       >
//         <Link to={'/'}>
//           <Title
//             style={{
//               height: 32,
//               margin: 16,
//               color: 'white',
//               fontSize: '24px',
//               opacity: `${collapsed ? 0 : 1} `,
//               transition: `${!collapsed ? 'all 1s ease' : 'none'} `,
//             }}
//           >
//             Phonebook
//           </Title>
//         </Link>

//         <Menu
//           theme="dark"
//           mode="inline"
//           items={items}
//           // items={[
//           //   {
//           //     key: '1',
//           //     icon: <ContactsOutlined />,
//           //     label: 'PhoneBook',
//           //   },

//           //   {
//           //     key: '2',
//           //     icon: <UserOutlined />,
//           //     label: 'Log In',
//           //   },
//           //   {
//           //     key: '3',
//           //     icon: <UserAddOutlined />,
//           //     label: 'Register',
//           //   },
//           // ]}
//         />

//         <Tooltip title="Exit" placement="right">
//           <Button
//             type="primary"
//             icon={<PoweroffOutlined />}
//             className={styles.btn}

//             // onClick={() => {
//             //   dispatch(logOutUser());
//             // }}
//           ></Button>
//         </Tooltip>
//       </Sider>
//       <Layout className={styles.layout}>
//         <Content
//           style={{
//             margin: '0 16px',
//           }}
//         >
//           <Breadcrumb
//             style={{
//               margin: '16px 0',
//             }}
//           >
//             <Breadcrumb.Item
//               style={{
//                 color: 'white',
//                 fontSize: '30px',
//               }}
//             >
//               User
//             </Breadcrumb.Item>

//             <Breadcrumb.Item
//               style={{
//                 color: 'white',
//               }}
//             >
//               {/* {nameUser} */}
//             </Breadcrumb.Item>
//           </Breadcrumb>
//           <div className={styles.welcome}>
//             <div className={styles.welcomeText}>
//               {/* <p>It`s Your Secret</p>
//               <p>PhoneBook</p>
//               <p>First step - You need register</p>
//               <p>**if You already register - enter Your Login</p> */}
//               <Suspense>
//                 <Outlet />
//               </Suspense>
//             </div>
//           </div>
//         </Content>
//         <Footer className={styles.footer}>
//           PhoneBook Design ©2023 Created by Natalie Khrystevych
//         </Footer>
//       </Layout>
//     </Layout>
//   );
// };

// export default NavBar;
