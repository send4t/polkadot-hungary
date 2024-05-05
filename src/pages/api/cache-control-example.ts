import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  response.setHeader('Cache-Control', 'public, s-maxage=1');
 
  return response.status(200).json({ name: 'John Doe' });
}

// Exporting the function with a specific runtime for Node.js
export const config = {
  api: {
    externalResolver: true,
  },
  // Set the runtime to Node.js
  // This ensures compatibility with serverless platforms like AWS Lambda
  // where Node.js is the runtime environment.
  target: 'serverless-node',
};
