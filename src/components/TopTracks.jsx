import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List, Avatar, Typography } from 'antd';
import { requestAddTracks } from '../store/tracks';

const { Title } = Typography;

const TopTracks = (props) => {
  const dispatch = useDispatch();
  const tracks = useSelector((state) => state.tracks);
  const tracksCount = tracks.length;

  useEffect(() => {
    dispatch(requestAddTracks(10));
  }, [dispatch]);

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <Title style={{ textAlign: 'center' }}>
        Top {tracksCount} tracks on {<a href="https://www.last.fm">Last.fm</a>}
      </Title>
      <List
        itemLayout="horizontal"
        dataSource={tracks}
        renderItem={(t) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={t.imageUrl} />}
              title={t.trackName}
              description={
                <span>
                  Artist:{' '}
                  {
                    <a href={t.artistUrl} rel="noreferrer" target="_blank">
                      {t.artistName}
                    </a>
                  }{' '}
                  |{' '}
                  {
                    <a href={t.artistUrl} rel="noreferrer" target="_blank">
                      Artist page
                    </a>
                  }
                </span>
              }
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default TopTracks;
