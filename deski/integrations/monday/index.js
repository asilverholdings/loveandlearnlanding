const { getBoardIds, getBoardIdByName, createBoard } = require('./board');
const { getColumnIds, createColumn, updateSingleColumnValue, updateColumnValues } = require('./columns');
const { createItemUpdate } = require('./updates');
const { getRowIds, getRowIdByName, createRow, updateRowById } = require('./rows');


const storeNewApplicant = async (boardName, rowName, columnUpdates) => {
    try {
        // Fetch board ID asynchronously
        const boardId = await getBoardIdByName(boardName);

        if (!boardId) {
            throw new Error("Board ID not found");
        }

        const rowId = await getRowIdByName(rowName);

        console.log(`Board ID: ${boardId}`);

        if (rowId) {
            const response = await updateRowById(boardId, rowId, columnUpdates);
            console.log('Row updated successfully:', response);
        } else {
            // If row is not found, create a new row
            console.log("Creating new row...");
            const responseId = await createRow(boardId, rowName, columnUpdates);
            console.log('New row created successfully:', responseId);
            return responseId;
        }

    } catch (error) {
        console.error('Error:', error.message);
        return null;
    }
};




const storeApplicantResponses = async (rowName, updateBody, boardName) => {
    try {
      // Fetch boardId asynchronously
      const boardId = await getBoardIdByName(boardName);
      
      if (!boardId) {
        console.error("Invalid boardId:", boardId);
        return null;
      }
  
      // Fetch rowId asynchronously
      const row = await getRowIdByName(boardId, rowName);
  
      if (!row) {
        console.error("Invalid rowId for rowName:", rowName);
        return null;
      }
  
      // Create item updates for the given row
      const updatePromises = updateBody.map((body) => createItemUpdate(row, body)); 
  
      const results = await Promise.all(updatePromises); // Wait for all promises to resolve
  
      // Handle the results of the updates
      results.forEach((updateId, index) => {
        if (updateId) {
          console.log(`Update ${index + 1} created successfully with ID: ${updateId}`);
        } else {
          console.error(`Failed to create update for response: ${updateBody[index]}`);
        }
      });
    } catch (error) {
      console.error('Error creating updates:', error);
    }
  };
  

module.exports = { storeNewApplicant, storeApplicantResponses };
