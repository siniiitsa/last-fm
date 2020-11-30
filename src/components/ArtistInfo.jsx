import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Typography, Divider, Tag, Row, Col, Spin } from 'antd';
import { requestArtist, selectIsLoading } from '../store/artist';

const { Title } = Typography;

const renderTags = (tags) =>
  tags.map((t) => (
    <Tag color="geekblue">
      <a href={t.url}>{t.name}</a>
    </Tag>
  ));

const ArtistInfo = ({ match }) => {
  const dispatch = useDispatch();
  const artist = useSelector((state) => state.artist.data);
  const isLoading = useSelector(selectIsLoading);
  const { name } = match.params;

  useEffect(() => {
    dispatch(requestArtist(name));
  }, [name, dispatch]);

  return (
    <Card title={<Title>{name}</Title>}>
      {isLoading ? (
        <Spin size="large" />
      ) : (
        <>
          <Row gutter={40}>
            <Col span={8}>
              <img alt="" src={artist.imageUrl} />
            </Col>
            <Col span={16}>
              <Card type="inner" title="About">
                {artist.about}{' '}
                <a href={artist.artistPage} rel="noreferrer" target="_blank">
                  more at Last.fm
                </a>
              </Card>
            </Col>
          </Row>
          <Divider orientation="left">Tags</Divider>
          {renderTags(artist.tags)}
        </>
      )}
    </Card>
  );
};

export default ArtistInfo;
