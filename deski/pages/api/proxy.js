require('dotenv').config();
const MONDAY_AUTH_TOKEN = process.env.MONDAY_AUTH_TOKEN;
const MONDAY_API_VERSION = process.env.MONDAY_API_VERSION;

export default async function handler(req, res) {
   console.log('MONDAY_AUTH_TOKEN:', MONDAY_AUTH_TOKEN);


   res.setHeader('Access-Control-Allow-Origin', 'https://www.lovelearnnanny.com');
   res.setHeader('Access-Control-Allow-Methods', 'POST');
   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

   if (req.method === 'OPTIONS') {
       res.status(200).end(); // Handle preflight requests
       return;
   }

    // Check the HTTP method to handle different types of requests (e.g., GET, POST)
    if (req.method !== 'POST') {
       res.status(405).json({ message: 'Only POST requests are allowed' });
       return;
    }
 
    try {
       // Make the request to Monday.com API
       const response = await fetch('https://api.monday.com/v2', {
          method: 'POST',
          headers: {
             'Authorization': MONDAY_AUTH_TOKEN,
             'Content-Type': 'application/json',
             'API-Version': MONDAY_API_VERSION,
          },
          body: JSON.stringify(req.body), // Forward the body from client request
       });
 
       // Check if response is okay, and handle errors
       if (!response.ok) {
          const errorData = await response.json();
          res.status(response.status).json(errorData);
          return;
       }
 
       // Parse the JSON response from Monday.com API
       const data = await response.json();
 
       // Return the data to the client
       res.status(200).json(data);
    } catch (error) {
       // Handle errors and return a response to the client
       res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
 }