require('dotenv').config();
const MONDAY_AUTH_TOKEN = process.env.MONDAY_AUTH_TOKEN;
const MONDAY_API_VERSION = process.env.MONDAY_API_VERSION;

const uploadResumeToMonday = async (itemId, resumeFile) => {
    try {
        if (!itemId || !resumeFile) {
            throw new Error('Missing required parameters: itemId or resumeFile');
        }

        const formData = new FormData();
        formData.append(
            'query',
            `
            mutation ($file: File!) {
                add_file_to_column (file: $file, item_id: ${itemId}, column_id: "files") {
                    public_url
                }
            }
            `
        );
        formData.append('variables[file]', resumeFile);

        const response = await fetch('https://api.monday.com/v2/file', {
            method: 'POST',
            headers: {
                'Authorization': MONDAY_AUTH_TOKEN,
                'API-Version': MONDAY_API_VERSION
              },
            body: formData,
        });

        const result = await response.json();
        if (result.errors) {
            console.error('Error uploading file:', result.errors);
            throw new Error('Failed to upload file');
        }

        return result.data.add_file_to_column.public_url;
    } catch (error) {
        console.error('Error in uploadResumeToMonday:', error.message);
        throw error;
    }
};

module.exports = { uploadResumeToMonday };