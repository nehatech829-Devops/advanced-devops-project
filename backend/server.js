const express = require('express');
const mysql = require('mysql2');

const app = express();

// Connect to MySQL
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

connection.connect((err) => {
    if (err) {
        console.error('MySQL connection error:', err);
        return;
    }
    console.log("Connected to MySQL");

    // Create visitors table if it doesn't exist
    connection.query(`
        CREATE TABLE IF NOT EXISTS visitors (
            id INT AUTO_INCREMENT PRIMARY KEY,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    `);
});

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to Advanced DevOps Project');
});

// API route - increments and returns visitor count
app.get('/api', (req, res) => {
    // Insert a new visitor
    connection.query('INSERT INTO visitors () VALUES ()', (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        // Get total visitors
        connection.query('SELECT COUNT(*) AS count FROM visitors', (err, results) => {
            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                status: "success",
                visitors: results[0].count
            });
        });
    });
});

// Healthcheck route
app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Backend server running on port ${PORT}`);
});
