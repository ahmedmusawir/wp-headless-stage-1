import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainNavbar from './components/general/MainNavbar';
import NotFound from './pages/NotFound';
import HomePage from './pages/HomePage';
import SinglePostPage from './pages/SinglePostPage';
import NextPrevPage from './pages/NextPrevPage';
import NumericPage from './pages/NumericPage';
import LoadMorePage from './pages/LoadMorePage';
import CardLayoutPage from './pages/CardLayoutPage';
import './App.scss';
import PostCreatePage from './pages/PostCreatePage';

function App(props) {
  return (
    <BrowserRouter>
      <MainNavbar />
      <main>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/nextprev">
            <NextPrevPage />
          </Route>
          <Route exact path="/numeric">
            <NumericPage />
          </Route>
          <Route exact path="/loadmore">
            <LoadMorePage />
          </Route>
          <Route exact path="/card-layout">
            <CardLayoutPage />
          </Route>
          <Route exact path="/masonry-layout">
            <CardLayoutPage />
          </Route>
          <Route exact path="/create-post">
            <PostCreatePage />
          </Route>
          <Route exact path="/single-post/:id">
            <SinglePostPage />
          </Route>
          <Route path="/*">
            <NotFound />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

App.propTypes = {};

export default App;
