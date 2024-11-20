const { getBoardIdByName } = require('./board').default;
const { createItemUpdate } = require('./updates').default;
const { createRow, updateRowById, getRowIdByApplicantId } = require('./rows');


const storeNewApplicant = async (boardName, itemName, columnUpdates, applicantId) => {
    try {
        // Fetch board ID asynchronously
        const boardId = await getBoardIdByName(boardName);

        if (!boardId) {
            throw new Error("Board ID not found");
        }

        let rowId;

        if (applicantId) {
            rowId = await getRowIdByApplicantId(boardId, applicantId);
        } else {
           console.log("Applicant ID not provided.");
        }

        console.log(`Board ID: ${boardId}`);

        if (rowId) {
            const response = await updateRowById(boardId, rowId, itemName, columnUpdates);
            console.log('Row updated successfully:', response);
        } else {
            // If row is not found, create a new row
            console.log("Creating new row...");
            const responseId = await createRow(boardId, itemName, applicantId, columnUpdates);

            // Store the applicantId for future reference
            console.log('New row created successfully:', responseId);

            return responseId;
        }
    } catch (error) {
        console.error('Error:', error.message);
        return null;
    }
};

const storeApplicantResponses = async (applicantId, updateBody, boardName) => {
    try {
        // Fetch boardId asynchronously
        const boardId = await getBoardIdByName(boardName);
        
        if (!boardId) {
            console.error("Invalid boardId:", boardId);
            return null;
        }

        // Fetch rowId asynchronously
        const row = await getRowIdByApplicantId(boardId, applicantId);
        console.log('Row Id:', row);

        if (!row) {
            console.error(`Row with id: ${row} not found with applicant id: ${applicantId}.`);
            return null;
        }

        // Combine all update bodies into a single string
        let combinedUpdateBody;
        if (Array.isArray(updateBody)) {
            combinedUpdateBody = updateBody.join('\n\n');
        } else if (typeof updateBody === 'object') {
            combinedUpdateBody = Object.entries(updateBody)
                .map(([key, value]) => `${key}: ${value}`)
                .join('\n');
        } else {
            combinedUpdateBody = String(updateBody);
        }

        // Create a single item update for the given row
        const updateId = await createItemUpdate(row, combinedUpdateBody);

        if (updateId) {
            return updateId;
        } else {
            console.error('Failed to create update for responses');
            return null;
        }
    } catch (error) {
        console.error('Error creating update:', error);
        return null;
    }
};

module.exports = { storeNewApplicant, storeApplicantResponses };
