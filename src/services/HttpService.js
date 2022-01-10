import WPAPI from 'wpapi';
import config from './ConfigService';
import * as Sentry from '@sentry/react';

// Create WPAPI instance and add endpoint to /wp-json
const wp = new WPAPI({
  endpoint: config.apiUrl,
  username: config.userName,
  password: config.passWord,
});

export const fetchPosts = async () => {
  console.log('Config Service:', config);
  try {
    const recentPosts = await wp.posts().perPage(config.perPage).get();
    console.log('Recent Posts from WP-API Service:', recentPosts);
    return recentPosts;
  } catch (error) {
    console.log('fetchPosts Errors:', error);
    Sentry.captureException(error);
  }
};

export const conf = config;

export default wp;
