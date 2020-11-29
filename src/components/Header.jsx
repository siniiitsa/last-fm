import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PageHeader, Button } from 'antd';
import { SearchOutlined, ArrowLeftOutlined } from '@ant-design/icons';

const renderButton = (currentPath) =>
  currentPath === '/search' ? (
    <Link key="1" to="/">
      <Button type="secondary" icon={<ArrowLeftOutlined />}>
        Back to Main
      </Button>
    </Link>
  ) : (
    <Link key="1" to="/search">
      <Button type="primary" icon={<SearchOutlined />}>
        Search tracks
      </Button>
    </Link>
  );

const Header = () => {
  const { pathname } = useLocation();

  return (
    <PageHeader
      title={
        <Link to="/">
          <h2>Last.fm</h2>
        </Link>
      }
      subTitle={<p>Explore top tracks and artists</p>}
      extra={[renderButton(pathname)]}
    />
  );
};

export default Header;
