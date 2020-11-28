import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PageHeader, Button } from 'antd';
import { SearchOutlined, ArrowLeftOutlined } from '@ant-design/icons';

const Header = () => {
  const location = useLocation();

  let iconComponent = <SearchOutlined />;
  let path = '/search';
  let buttonType = 'primary';
  let buttonTitle = 'Search tracks';

  if (location.pathname === '/search') {
    iconComponent = <ArrowLeftOutlined />;
    path = '/';
    buttonType = 'secondary';
    buttonTitle = 'Back to Main';
  }

  return (
    <PageHeader
      title="Last.fm"
      subTitle="Explore top tracks and artists"
      avatar={{
        src:
          'https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/195_Lastfm-512.png',
      }}
      extra={[
        <Link key="1" to={path}>
          <Button type={buttonType} icon={iconComponent}>
            {buttonTitle}
          </Button>
        </Link>,
      ]}
    />
  );
};

export default Header;
