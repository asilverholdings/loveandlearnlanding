require('dotenv').config();
const MONDAY_AUTH_TOKEN = process.env.MONDAY_AUTH_TOKEN;
const MONDAY_API_VERSION = process.env.MONDAY_API_VERSION;
const API_HOST = process.env.API_HOST;

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
  
    return fetch(`https://lovelearnnanny.com/api/proxy`, {
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

const getRowIdByApplicantId = async (boardId, applicantId) => {
    const query = `
      query getItemsByColumnValues($boardId: ID!, $columnId: String!, $value: String!) {
        items_page_by_column_values(board_id: $boardId, columns: [{column_id: $columnId, column_values: [$value]}]) {
          items {
            id
          }
        }
      }
    `;

    try {
        const response = await fetch(`https://lovelearnnanny.com/api/proxy`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': MONDAY_AUTH_TOKEN,
                'API-Version': MONDAY_API_VERSION
            },
            body: JSON.stringify({
                query: query,
                variables: { 
                    boardId: boardId,
                    columnId: 'applicant_id__1',
                    value: applicantId
                }
            })
        });

        const res = await response.json();
        console.log("Response Data", res);

        if (res.data && res.data.items_page_by_column_values && res.data.items_page_by_column_values.items.length > 0) {
            const matchingItem = res.data.items_page_by_column_values.items[0];
            console.log(`Found matching item: ${matchingItem.id}`);
            return matchingItem.id;
        } else {
            console.log(`No matches for applicantId "${applicantId}" found`);
            return null;
        }
    } catch (err) {
        console.error('Error fetching items:', err);
        return null;
    }
};

// CREATE
const createRow = (boardId, itemName, applicantId, columnValues = {}) => {
    // Assume 'applicant_id' is the ID of your new Applicant ID column
    const updatedColumnValues = {
        ...columnValues,
        applicant_id__1: applicantId
    };

    const mutation = `
      mutation createItem($boardId: ID!, $itemName: String!, $columnValues: JSON!) {
        create_item(board_id: $boardId, item_name: $itemName, column_values: $columnValues) {
          id
        }
      }
    `;
  
    return fetch(`https://lovelearnnanny.com/api/proxy`, {
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
          columnValues: JSON.stringify(updatedColumnValues)
        }
      })
    })
    .then(res => res.json())
    .then(res => {
      if (res.data && res.data.create_item) {
        console.log('Item created with ID:', res.data.create_item.id);
        return res.data.create_item.id;
      } else {
        console.error('Failed to create item:', res.errors);
        return null;
      }
    })
    .catch(err => {
      console.error('Error creating item:', err);
      return null;
    });
}

// UPDATE
const updateRowById = (boardId, itemId, rowName, columnValues = {}) => {
    const mutation = `
      mutation updateItem($boardId: ID!, $itemId: ID!, $columnValues: JSON!, $name: JSON!) {
        change_multiple_column_values(board_id: $boardId, item_id: $itemId, column_values: $columnValues) {
          id
        }
        change_column_value(board_id: $boardId, item_id: $itemId, column_id: "name", value: $name) {
          id
        }
      }
    `;
  
    return fetch(`https://lovelearnnanny.com/api/proxy`, {
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
          itemId: itemId,
          columnValues: JSON.stringify(columnValues),
          name: JSON.stringify(rowName)
        }
      })
    })
    .then(res => res.json())
    .then(res => {
      if (res.data && res.data.change_multiple_column_values && res.data.change_column_value) {
        console.log('Item updated successfully with ID:', res.data.change_multiple_column_values.id);
        return res.data.change_multiple_column_values.id;
      } else {
        console.error('Error updating item:', res.errors);
        return null;
      }
    })
    .catch(err => {
      console.error('Error making the update request:', err);
      return null;
    });

  }

  const getRowIdBySubject = async (boardId, subject) => {
    const query = `
      query getItemByColumnValue($boardId: ID!, $columnId: String!, $value: [String!]!) {
        items_page_by_column_values(board_id: $boardId, columns: [{column_id: $columnId, column_values: $value}]) {
          items {
            id
            name
          }
        }
      }
    `;
  
    try {
      const response = await fetch(`https://lovelearnnanny.com/api/proxy`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': MONDAY_AUTH_TOKEN,
          'API-Version': MONDAY_API_VERSION
        },
        body: JSON.stringify({
          query: query,
          variables: {
            boardId: boardId.toString(), // boardId should be a string
            columnId: "name", // The "Name" column ID
            value: [subject], // The subject value to search for, as an array
          }
        })
      });
  
      const res = await response.json();
      console.log("Raw response:", JSON.stringify(res, null, 2));
  
      if (res.data && res.data.items_page_by_column_values && res.data.items_page_by_column_values.items.length > 0) {
        const item = res.data.items_page_by_column_values.items[0];
        console.log(`Found item with ID: ${item.id}`);
        return item.id;
      } else {
        console.log(`No matches found for subject "${subject}"`);
        return null;
      }
    } catch (err) {
      console.error('Error fetching items:', err);
      return null;
    }
  };
  
  

// getRowIdByApplicantId("7845315412","6e3b38d8-55b9-418e-9c76-9d8b4e0e5812")
//getRowIdBySubject("7887121862", "🆕➡📪 John Stamos");
module.exports = { getRowIds, createRow, updateRowById, getRowIdByApplicantId, getRowIdBySubject };