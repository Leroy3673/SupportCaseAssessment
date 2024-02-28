// dbConnection.ts

// Import the mysql module for database connection
import mysql from 'mysql';
import pool from './dbConfig';

// Get a connection from the pool
const getConnection = () => {
  return new Promise<mysql.PoolConnection>((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err); // Reject promise if error occurs
      } else {
        resolve(connection); // Resolve promise with connection if successful
      }
    });
  });
};

// Export the getConnection function for reuse
export default getConnection;
