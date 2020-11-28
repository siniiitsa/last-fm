import React from 'react';
import TopTracks from './TopTracks';
import { PageHeader, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Container from './common/Container';

const App = () => {
  return (
    <div>
      <PageHeader
        title="Last.fm"
        subTitle="Explore top tracks and artists"
        avatar={{
          src:
            'https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/195_Lastfm-512.png',
        }}
        extra={[
          <Button type="primary" key="1" icon={<SearchOutlined />}>
            Search tracks
          </Button>,
        ]}></PageHeader>
      <Container>
        <TopTracks />
      </Container>
    </div>
  );
};

export default App;
