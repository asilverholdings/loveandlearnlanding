const { getBoardIdByName } = require('./board').default;
const { createItemUpdate } = require('./updates').default;
const { createRow,createApplicantRow, updateRowById, getRowIdByApplicantId, getRowIdBySubject } = require('./rows');
const { uploadResumeToMonday } = require('./fileUpload');


// Stores name and email of applicants
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
            return response; // Explicitly return the response for updated rows
        } else {
            // If row is not found, create a new row
            console.log("Creating new row...");
            const responseId = await createApplicantRow(boardId, itemName, applicantId, columnUpdates);
            console.log('New row created successfully:', responseId);
            return responseId; // Return the ID of the newly created row
        }
    } catch (error) {
        console.error('Error:', error.message);
        return null; // Ensure a consistent return value on error
    }
};

// Stores application info for both applications
const storeApplicantResponses = async (applicantId, updateBody, boardName, resumeFile = null) => {
    try {
        const boardId = await getBoardIdByName(boardName);

        if (!boardId) {
            console.error("Invalid boardId:", boardId);
            return null;
        }

        const row = await getRowIdByApplicantId(boardId, applicantId);
        if (!row) {
            console.error(`Row with id: ${row} not found for applicant id: ${applicantId}.`);
            return null;
        }

        // let resumeLink = null;
        // if (resumeFile) {
        //     try {
        //         resumeLink = await uploadResumeToMonday(row, resumeFile);
        //         console.log('Resume uploaded successfully:', resumeLink);
        //     } catch (error) {
        //         console.error('Failed to upload resume:', error.message);
        //         return null;
        //     }
        // }

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

        // if (resumeLink) {
        //     combinedUpdateBody += `\n\nResume Link: [Download Resume](${resumeLink})`;
        // }

        const updateId = await createItemUpdate(row, combinedUpdateBody);
        return updateId || null;
    } catch (error) {
        console.error('Error creating update:', error);
        return null;
    }
};

// Stores emails from offer popup
const storeNewEmail = async (boardId, itemName, columnUpdates) => {
    try {

        if (!boardId) {
            throw new Error("Board ID not found");
        }

        let rowId;

        // Check if a row with the same item name exists
        rowId = await getRowIdBySubject(boardId, itemName);

        console.log(`Board ID: ${boardId}`);

        if (rowId) {
            // Update the existing row
            const response = await updateRowById(boardId, rowId, itemName, columnUpdates);
            console.log('Row updated successfully:', response);
            return response; // Explicitly return the response for updated rows
        } else {
            // If row is not found, create a new row
            console.log("Creating new row...");
            const responseId = await createRow(boardId, itemName, columnUpdates);
            console.log('New row created successfully:', responseId);
            return responseId; // Return the ID of the newly created row
        }
    } catch (error) {
        console.error('Error:', error.message);
        return null; // Ensure a consistent return value on error
    }
};


// Adds email column to contact form submissions board
const addEmailColumn = async (boardId, itemName, email) => {
    try {
        // Get the row ID by subject (item name)
        const rowId = await getRowIdBySubject(boardId, itemName);

        if (!rowId) {
            console.error(`Row not found for item name: ${itemName}`);
            return null;
        }

        console.log(`Row ID found: ${rowId}`);

        // Update the row's email column
        const columnUpdates = {
            email__1: email,
        };

        const response = await updateRowById(boardId, rowId, itemName, columnUpdates);

        if (response) {
            console.log('Email column updated successfully:', response);
            return response;
        } else {
            console.error('Failed to update email column');
            return null;
        }
    } catch (error) {
        console.error('Error in addEmailColumn:', error.message);
        return null;
    }
};

module.exports = { storeNewEmail, storeNewApplicant, storeApplicantResponses, addEmailColumn };
