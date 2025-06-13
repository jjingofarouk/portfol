import { createClient } from 'contentful';

export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID, // Use environment variable for space ID
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN, // Use environment variable for access token
});