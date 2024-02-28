import pool from "./dbConfig";

// Function to insert a new comment into the comments table
export const createComment = (supportCaseId: number, userId: number, text: string) => {
    const query = 'INSERT INTO comments (support_case_id, user_id, text) VALUES (?, ?, ?)';
    const values = [supportCaseId, userId, text];
    return new Promise((resolve, reject) => {
        pool.query(query, values, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};

// Function to insert a new attachment into the attachments table
export const createAttachment = (supportCaseId: number, filename: string, url: string) => {
    const query = 'INSERT INTO attachments (support_case_id, filename, url) VALUES (?, ?, ?)';
    const values = [supportCaseId, filename, url];
    return new Promise((resolve, reject) => {
        pool.query(query, values, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};

// Add more functions for creating records in other tables as needed
