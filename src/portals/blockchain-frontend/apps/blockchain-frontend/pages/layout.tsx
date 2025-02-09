import React from 'react';
import styles from './layout.module.css';
import {
  AppstoreOutlined,
  ShopOutlined,
  UserOutlined,
  SafetyCertificateOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import { useRouter } from 'next/navigation';

export default function RootLayout({ children }) {
  const navigate = useRouter();
  return (
    <div>
      <main>{children}</main>
      <div className={styles['container']}>
        <div className={styles['SideMenu']}>
          <Menu
            className={styles['SideMenuVertical']}
            mode="vertical"
            onClick={(item) => {
              //item.key
              navigate.push(item.key);
            }}
            // selectedKeys={[selectedKeys]}
            items={[
              {
                label: 'Home',
                icon: <AppstoreOutlined />,
                key: '/dashboard',
              },
              {
                label: 'Courses',
                key: '/courses',
                icon: <ShopOutlined />,
              },
              {
                label: 'Trainers',
                key: '/trainers',
                icon: <UserOutlined />,
              },
              {
                label: 'Trainees',
                key: '/trainees',
                icon: <UserOutlined />,
              },
              {
                label: 'Certificates',
                key: '/certificates',
                icon: <SafetyCertificateOutlined />,
              },
            ]}
          ></Menu>
        </div>
      </div>
    </div>
  );
}
