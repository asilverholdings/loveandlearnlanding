require('dotenv').config();
const MONDAY_AUTH_TOKEN = process.env.MONDAY_AUTH_TOKEN;
const MONDAY_API_VERSION = process.env.MONDAY_API_VERSION;

// CREATE
const createItemUpdate = (itemId, updateBody) => {

    if (!itemId) {
        console.error("Invalid itemId:", itemId);
        return null;
    }

    const mutation = `
      mutation createUpdate($itemId: ID!, $body: String!) {
        create_update (item_id: $itemId, body: $body) {
          id
        }
      }
    `;

    const body = typeof updateBody === 'string' ? updateBody : JSON.stringify(updateBody || "");
  
    return fetch("http://localhost:3000/api/proxy", {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': MONDAY_AUTH_TOKEN,
        'API-Version': MONDAY_API_VERSION
      },
      body: JSON.stringify({
        query: mutation,
        variables: {
          itemId: itemId,
          body: body
        }
      })
    })
    .then(res => res.json())
    .then(res => {
      if (res.data && res.data.create_update) {
        console.log('Update created successfully with ID:', res.data.create_update.id);
        return res.data.create_update.id;
      } else {
        console.error('Error creating update:', res.errors);
        return null;
      }
    })
    .catch(err => {
      console.error('Error creating update:', err);
      return null;
    });
}

module.exports = { createItemUpdate };