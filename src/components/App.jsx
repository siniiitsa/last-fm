import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import TopTracks from './TopTracks';
import Container from './common/Container';
import NotFound from './NotFound';
import ArtistInfo from './ArtistInfo';
import TrackSearch from './TrackSearch';

const App = () => {
  return (
    <div>
      <Container>
        <Header />
        <Switch>
          <Route path="/artist/:name/:id" component={ArtistInfo} />
          <Route path="/tracks" component={TopTracks} />
          <Route path="/search" component={TrackSearch} />
          <Route path="/not-found" component={NotFound} />

          <Redirect from="/chart" to="/tracks" />
          <Redirect from="/songs" to="/tracks" />
          <Redirect from="/" exact to="/tracks" />
          <Redirect to="/not-found" />
        </Switch>
      </Container>
    </div>
  );
};

export default App;
