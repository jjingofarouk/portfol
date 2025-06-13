import { createClient } from 'contentful';

export const contentfulClient = createClient({
  space: 'your_space_id', // Replace with your Space ID
  accessToken: 'your_access_token', // Replace with your Content Delivery API Access Token
});