import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
// Initialize the Sanity client
const client = createClient({
  projectId: 'ur2g7rt2',  // Replace with your project ID
  dataset: 'production',
  useCdn: true,
});

// Helper function to get image URLs
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;
