import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { List, Input, Space } from 'antd';
import { requestAddTracks, selectIsLoading } from '../store/search';

const { Search } = Input;

const TracksSearch = () => {
  const dispatch = useDispatch();
  const tracks = useSelector((state) => state.search.items);
  const isLoading = useSelector(selectIsLoading);

  const handleSearch = (value) => {
    dispatch(requestAddTracks(value, 10));
  };

  // console.log(tracks);

  // useEffect(() => {
  //   dispatch(requestAddTracks('despa', 10));
  // }, [dispatch]);

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Search
        placeholder="Enter track name"
        enterButton="Search"
        onSearch={handleSearch}
        size="large"></Search>
      <List
        dataSource={tracks}
        loading={{ spinning: isLoading, size: 'large' }}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={item.trackName}
              description={
                <p>
                  Artist: <b>{item.artistName}</b>
                </p>
              }
            />
          </List.Item>
        )}></List>
    </Space>
  );
};

export default TracksSearch;
