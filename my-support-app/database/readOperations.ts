import pool from "./dbConfig";

// Function to retrieve all support cases from the support_cases table
export const getAllSupportCases = () => {
    const query = 'SELECT * FROM support_cases';
    return new Promise((resolve, reject) => {
        pool.query(query, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};

// Function to retrieve a single support case by ID from the support_cases table
export const getSupportCaseById = (id: number) => {
    const query = 'SELECT * FROM support_cases WHERE id = ?';
    return new Promise((resolve, reject) => {
        pool.query(query, id, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results[0]);
            }
        });
    });
};

// Function to retrieve all comments for a support case by support_case_id from the comments table
export const getCommentsBySupportCaseId = (supportCaseId: number) => {
    const query = 'SELECT * FROM comments WHERE support_case_id = ?';
    return new Promise((resolve, reject) => {
        pool.query(query, supportCaseId, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};

// Function to retrieve all attachments for a support case by support_case_id from the attachments table
export const getAttachmentsBySupportCaseId = (supportCaseId: number) => {
    const query = 'SELECT * FROM attachments WHERE support_case_id = ?';
    return new Promise((resolve, reject) => {
        pool.query(query, supportCaseId, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};

// Add more functions for reading records from other tables as needed
