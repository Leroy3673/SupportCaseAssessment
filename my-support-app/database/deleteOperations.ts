import pool from "./dbConfig";

// Function to delete a support case by ID from the support_cases table
export const deleteSupportCaseById = (id: number) => {
    const query = 'DELETE FROM support_cases WHERE id = ?';
    return new Promise((resolve, reject) => {
        pool.query(query, id, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};

// Function to delete a comment by ID from the comments table
export const deleteCommentById = (id: number) => {
    const query = 'DELETE FROM comments WHERE id = ?';
    return new Promise((resolve, reject) => {
        pool.query(query, id, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};

// Function to delete an attachment by ID from the attachments table
export const deleteAttachmentById = (id: number) => {
    const query = 'DELETE FROM attachments WHERE id = ?';
    return new Promise((resolve, reject) => {
        pool.query(query, id, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};

// Add more functions for deleting records from other tables as needed
