// dbConfig.ts

// Import the mysql module for database connection
import mysql from 'mysql';

// Define the MySQL database configuration
const dbConfig = {
  host: 'localhost', // MySQL server hostname (usually 'localhost')
  port: 3306,
  user: 'root', // MySQL database username
  password: 'Lee@36738999', // MySQL database password
  database: 'usecasedatabase', // MySQL database name
};

// Create a MySQL pool using the configuration
const pool = mysql.createPool(dbConfig);

// Export the pool for reuse across the application
export default pool;
