const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const events = [
    {
        id: 1,
        name: "Technology Conference",
        date: "2026-11-15",
        location: "Islamabad"
    },
    {
        id: 2,
        name: "Music Festival",
        date: "2026-11-20",
        location: "Lahore"
    },
    {
        id: 3,
        name: "Business Workshop",
        date: "2026-11-25",
        location: "Karachi"
    }
];

app.get('/', (req, res) => {
    res.send(`
        <html>
        <head>
            <title>Event Management System</title>
            <style>
                body {
                    font-family: Arial;
                    background: #eef2ff;
                    text-align: center;
                    padding: 40px;
                }
                h1 { color: #1d4ed8; }
                .event {
                    background: white;
                    padding: 20px;
                    margin: 15px auto;
                    max-width: 400px;
                    border-radius: 10px;
                }
            </style>
        </head>
        <body>
            <h1>Event Management System</h1>
            <p>Welcome to our event management platform!</p>
            ${events.map(event => `
                <div class="event">
                    <h2>${event.name}</h2>
                    <p>Date: ${event.date}</p>
                    <p>Location: ${event.location}</p>
                </div>
            `).join('')}
        </body>
        </html>
    `);
});

app.get('/api/events', (req, res) => {
    res.json(events);
});

app.get('/health', (req, res) => {
    res.json({ status: 'healthy' });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Event Management System running on port ${PORT}`);
});

module.exports = app;
