// dbInit.ts

// Import the pool from the dbConfig file
import pool from './dbConfig';

// Function to initialize the database tables
const initializeDatabase = () => {
  // SQL query to create the support_cases table
  const supportCasesTableQuery = `
    CREATE TABLE IF NOT EXISTS support_cases (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      description TEXT,
      status ENUM('Open', 'Closed', 'Pending') NOT NULL DEFAULT 'Open',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;

  // SQL query to create the users table
  const usersTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      password VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;

  // SQL query to create the comments table
  const commentsTableQuery = `
    CREATE TABLE IF NOT EXISTS comments (
      id INT AUTO_INCREMENT PRIMARY KEY,
      support_case_id INT NOT NULL,
      user_id INT NOT NULL,
      comment TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (support_case_id) REFERENCES support_cases(id),
      FOREIGN KEY (user_id) REFERENCES users(id)
    )
  `;

  // SQL query to create the attachments table
  const attachmentsTableQuery = `
    CREATE TABLE IF NOT EXISTS attachments (
      id INT AUTO_INCREMENT PRIMARY KEY,
      support_case_id INT NOT NULL,
      filename VARCHAR(255) NOT NULL,
      filepath VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (support_case_id) REFERENCES support_cases(id)
    )
  `;

  // Execute the queries to create the tables
  pool.query(supportCasesTableQuery, (error, results, fields) => {
    if (error) {
      console.error('Error creating support_cases table:', error);
    } else {
      console.log('Support_cases table created successfully');
    }
  });

  pool.query(usersTableQuery, (error, results, fields) => {
    if (error) {
      console.error('Error creating users table:', error);
    } else {
      console.log('Users table created successfully');
    }
  });

  pool.query(commentsTableQuery, (error, results, fields) => {
    if (error) {
      console.error('Error creating comments table:', error);
    } else {
      console.log('Comments table created successfully');
    }
  });

  pool.query(attachmentsTableQuery, (error, results, fields) => {
    if (error) {
      console.error('Error creating attachments table:', error);
    } else {
      console.log('Attachments table created successfully');
    }
  });
};

// Call the initializeDatabase function to create the tables
initializeDatabase();
