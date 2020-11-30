import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { List, Avatar, Typography } from 'antd';
import { requestAddTracks, selectIsLoading } from '../store/tracks';

const { Title } = Typography;

const TopTracks = (props) => {
  const dispatch = useDispatch();
  const tracks = useSelector((state) => state.tracks.items);
  const isLoading = useSelector(selectIsLoading);
  const tracksCount = tracks.length;

  useEffect(() => {
    dispatch(requestAddTracks(10));
  }, [dispatch]);

  return (
    <section style={{ maxWidth: '800px', margin: '0 auto', padding: '10px 0' }}>
      <Title style={{ textAlign: 'center' }}>
        Top {tracksCount} tracks on {<a href="https://www.last.fm">Last.fm</a>}
      </Title>
      <List
        itemLayout="horizontal"
        dataSource={tracks}
        loading={isLoading}
        renderItem={(t) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={t.imageUrl} />}
              title={t.trackName}
              description={
                <span>
                  Artist:{' '}
                  {<Link to={`/artist/${t.artistName}`}>{t.artistName}</Link>} |{' '}
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
    </section>
  );
};

export default TopTracks;
