import pool from "./dbConfig";

// Function to update a support case by ID in the support_cases table
export const updateSupportCaseById = (id: number, newData: any) => {
    const query = 'UPDATE support_cases SET ? WHERE id = ?';
    return new Promise((resolve, reject) => {
        pool.query(query, [newData, id], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};

// Function to update a comment by ID in the comments table
export const updateCommentById = (id: number, newData: any) => {
    const query = 'UPDATE comments SET ? WHERE id = ?';
    return new Promise((resolve, reject) => {
        pool.query(query, [newData, id], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};

// Function to update an attachment by ID in the attachments table
export const updateAttachmentById = (id: number, newData: any) => {
    const query = 'UPDATE attachments SET ? WHERE id = ?';
    return new Promise((resolve, reject) => {
        pool.query(query, [newData, id], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};

// Add more functions for updating records in other tables as needed
