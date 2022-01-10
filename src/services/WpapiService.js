import WPAPI from 'wpapi';
import config from '../config.json';
import * as Sentry from '@sentry/react';

// Create WPAPI instance and add endpoint to /wp-json
const wp = new WPAPI({
  endpoint: config.apiUrl,
  username: config.userName,
  password: config.passWord,
});

export const fetchPosts = async () => {
  try {
    const recentPosts = await wp.posts().perPage(config.perPage).get();
    console.log('Recent Posts from WP-API Service:', recentPosts);
    return recentPosts;
  } catch (error) {
    console.log('fetchPosts Errors:', error);
    Sentry.captureException(error);
  }
};

export default wp;
