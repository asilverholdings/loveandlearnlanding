require('dotenv').config();
const MONDAY_AUTH_TOKEN = process.env.MONDAY_AUTH_TOKEN;
const MONDAY_API_VERSION = process.env.MONDAY_API_VERSION;

// GET
const getColumnIds = (boardId) => {
  const query = `
    query getColumns($boardId: ID!) {
      boards(ids: [$boardId]) {
        columns {
          id
          title
          type
        }
      }
    }
  `;

  return fetch(`https://www.lovelearnnanny.com/api/proxy`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': MONDAY_AUTH_TOKEN,
      'API-Version': MONDAY_API_VERSION
    },
    body: JSON.stringify({
      query: query,
      variables: {
        boardId: boardId
      }
    })
  })
  .then(res => res.json())
  .then(res => {
    if (res.data && res.data.boards && res.data.boards[0] && res.data.boards[0].columns) {
      const columns = res.data.boards[0].columns;
      const columnMap = {};
      columns.forEach(column => {
        columnMap[column.title] = {id: column.id, type: column.type};
      });
      console.log('Column IDs fetched successfully:', columnMap);
      return columnMap;
    } else {
      console.error('Error fetching column IDs:', res.errors);
      return null;
    }
  })
  .catch(err => {
    console.error('Error fetching column IDs:', err);
    return null;
  });
}

  // CREATE
  const createColumn = (boardId, columnTitle, columnType) => {
    const mutation = `
      mutation createColumn($boardId: ID!, $title: String!, $columnType: ColumnType!) {
        create_column(board_id: $boardId, title: $title, column_type: $columnType) {
          id
        }
      }
    `;
  
    return fetch(`https://www.lovelearnnanny.com/api/proxy`, {
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
          title: columnTitle,
          columnType: columnType
        }
      })
    })
    .then(res => res.json())
    .then(res => {
      if (res.data && res.data.create_column) {
        console.log('Column created with ID:', res.data.create_column.id);
        return res.data.create_column.id;
      } else {
        console.error('Error creating column:', res.errors);
        return null;
      }
    })
    .catch(err => {
      console.error('Error creating column:', err);
      return null;
    });
  }

  // UPDATE
  const updateSingleColumnValue = (boardId, itemId, columnId, value, isSimple = false) => {
    const mutation = isSimple ? `
      mutation($boardId: ID!, $itemId: ID!, $columnId: String!, $value: String!) {
        change_simple_column_value(board_id: $boardId, item_id: $itemId, column_id: $columnId, value: $value) {
          id
        }
      }
    ` : `
      mutation($boardId: ID!, $itemId: ID!, $columnId: String!, $value: JSON!) {
        change_column_value(board_id: $boardId, item_id: $itemId, column_id: $columnId, value: $value) {
          id
        }
      }
    `;
  
    return fetch(`https://www.lovelearnnanny.com/api/proxy`, {
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
          columnId: columnId,
          value: isSimple ? value : JSON.stringify(value)
        }
      })
    })
    .then(res => res.json())
    .then(res => {
      if (res.data && (res.data.change_column_value || res.data.change_simple_column_value)) {
        console.log('Column value updated successfully');
        return true;
      } else {
        console.error('Error updating column value:', res.errors);
        return false;
      }
    })
    .catch(err => {
      console.error('Error updating column value:', err);
      return false;
    });
}

const updateColumnValues = (boardId, itemId, columnValues) => {
  const mutation = `
    mutation changeMultipleColumnValues($boardId: ID!, $itemId: ID!, $columnValues: JSON!) {
      change_multiple_column_values(board_id: $boardId, item_id: $itemId, column_values: $columnValues) {
        id
      }
    }
  `;

  return fetch(`https://www.lovelearnnanny.com/api/proxy`, {
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
        columnValues: JSON.stringify(columnValues)
      }
    })
  })
  .then(res => res.json())
  .then(res => {
    if (res.data && res.data.change_multiple_column_values) {
      console.log('Column values updated successfully');
      return res.data.change_multiple_column_values.id;
    } else {
      console.error('Error updating column values:', res.errors);
      return null;
    }
  })
  .catch(err => {
    console.error('Error updating column values:', err);
    return null;
  });
}
 // getColumnIds("7845315412");
 //createColumn("7887121862", "Email", "text");


module.exports = { getColumnIds, createColumn, updateSingleColumnValue, updateColumnValues };
