require('dotenv').config();
const MONDAY_AUTH_TOKEN = process.env.MONDAY_AUTH_TOKEN;
const MONDAY_API_VERSION = process.env.MONDAY_API_VERSION;

// GET
const getRowIds = (boardId) => {
    const query = `
      query getItems($boardId: ID!) {
        boards(ids: [$boardId]) {
          items_page {
            items {
              id
              name
            }
          }
        }
      }
    `;
  
    return fetch("http://localhost:3000/api/proxy", {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': MONDAY_AUTH_TOKEN,
        'API-Version': MONDAY_API_VERSION
      },
      body: JSON.stringify({
        query: query,
        variables: { boardId: boardId }
      })
    })
    .then(res => res.json())
    .then(res => {
      if (res.data && res.data.boards && res.data.boards[0] && res.data.boards[0].items_page) {
        const items = res.data.boards[0].items_page.items;
        const itemMap = {};
        items.forEach(item => {
          itemMap[item.name] = item.id;
        });
        console.log('Item IDs fetched successfully:', itemMap);
        return itemMap;
      } else {
        console.error('Error fetching item IDs:', res.errors);
        return null;
      }
    })
    .catch(err => {
      console.error('Error fetching item IDs:', err);
      return null;
    });
}

// GET by ID
const getRowIdByName = (boardId, searchName) => {
    const query = `
      query getItems($boardId: ID!) {
        boards(ids: [$boardId]) {
          items_page {
            items {
              id
              name
            }
          }
        }
      }
    `;
  
    return fetch("http://localhost:3000/api/proxy", {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': MONDAY_AUTH_TOKEN,
        'API-Version': MONDAY_API_VERSION
      },
      body: JSON.stringify({
        query: query,
        variables: { boardId: boardId }
      })
    })
    .then(res => res.json())
    .then(res => {
      if (res.data && res.data.boards && res.data.boards[0] && res.data.boards[0].items_page) {
        const items = res.data.boards[0].items_page.items;
        console.log('All items:', items.map(item => `${item.name} (${item.id})`));
        
        const exactMatch = items.find(item => 
          item.name.toLowerCase() === searchName.toLowerCase()
        );
        
        if (exactMatch) {
          console.log(`Name: ${exactMatch.name}, ID: ${exactMatch.id}`);
          return exactMatch.id;
        } else {
          const partialMatches = items.filter(item => 
            item.name.toLowerCase().includes(searchName.toLowerCase())
          );
          
          if (partialMatches.length > 0) {
            console.log(partialMatches.map(item => `${item.name} (${item.id})`));
            return partialMatches[0].id;
          } else {
            console.log(`No matches for row ${searchName} found`);
            return null;
          }
        }
      } else {
        console.error('Error fetching items:', res.errors);
        return null;
      }
    })
    .catch(err => {
      console.error('Error fetching items:', err);
      return null;
    });
}

// CREATE
const createRow = (boardId, itemName, columnValues = {}) => {
    const mutation = `
      mutation createItem($boardId: ID!, $itemName: String!, $columnValues: JSON) {
        create_item(board_id: $boardId, item_name: $itemName, column_values: $columnValues) {
          id
        }
      }
    `;
  
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
          boardId: boardId,
          itemName: itemName,
          columnValues: JSON.stringify(columnValues)
        }
      })
    })
    .then(res => res.json())
    .then(res => {
      if (res.data && res.data.create_item) {
        console.log('Item created with ID:', res.data.create_item.id);
        return res.data.create_item.id;
      } else {
        console.error('Error creating item:', res.errors);
        return null;
      }
    })
    .catch(err => {
      console.error('Error creating item:', err);
      return null;
    });
}

module.exports = { getRowIds, getRowIdByName, createRow }; 
