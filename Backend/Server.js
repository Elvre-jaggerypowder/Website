const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',      // your MySQL host
    user: 'root',           // your MySQL username
    password: 'disha12', // your MySQL password
    database: 'elvre'
});

db.connect(err => {
    if (err) throw err;
    console.log('MySQL connected...');
});

// Insert feedback
app.post('/api/feedback', (req, res) => {
    const { Name, Label, Message } = req.body;
    const sql = 'INSERT INTO feedback (Name, Label, Message) VALUES (?, ?, ?)';
    db.query(sql, [Name, Label, Message], (err, result) => {
        if (err) return res.status(500).send(err);
        res.json({ message: 'Feedback saved', id: result.insertId });
    });
});

// Fetch latest feedbacks
app.get('/api/feedback', (req, res) => {
    const sql = 'SELECT * FROM feedback ORDER BY created_at DESC LIMIT 3';
    db.query(sql, (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
