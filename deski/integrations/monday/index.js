const { getBoardIds, getBoardIdByName, createBoard } = require('./board');
const { getColumnIds, createColumn, updateSingleColumnValue, updateColumnValues } = require('./columns');
const { createItemUpdate } = require('./updates');
const { getRowIds, getRowIdByName, createRow } = require('./rows');

// Store New Form Data
const storeNewApplicant = (boardName, rowName, columnUpdates) => {
    let boardId;
    getBoardIdByName(boardName)
        .then(id => {
            if (id) {
                console.log(`Board ID: ${id}`);
                boardId = id;
                return getRowIdByName(id, rowName);
            }
            throw new Error("Board ID not found");
        })
        .then(rowId => {
            if (rowId) {
                console.log(`Row found with ID: ${rowId}`);
                // If row is found, update the column values
                return updateColumnValues(boardId, rowId, columnUpdates);
            } else {
                console.log("Row not found. Creating new row...");
                // If row is not found, create a new row
                return createRow(boardId, rowName, columnUpdates);
            }
        })
        .then(response => {
            if (response) {
                console.log('Row processed successfully:', response);
            } else {
                console.log('Failed to process row');
            }
        })
        .catch(error => {
            console.error('Error:', error.message);
        });
};

// const boardName = 'Family Applications';
// const rowName = 'hello world';
// const columnUpdates = {
//     'first_name__1': 'Antonio',
//     'last_name__1': 'Fodor',
//     'email4__1': 'antonio@abaschedules.com'
// };

// storeNewApplicant(boardName, rowName, columnUpdates);

// createColumn(boardId, columnTitle, columnType)
//   .then(columnId => {
//     if (columnId) {
//       console.log(`New column created successfully with ID: ${columnId}`);
//       // You can perform additional actions here with the new column ID
//     } else {
//       console.log('Failed to create new column');
//     }
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });
module.exports = { storeNewApplicant };
