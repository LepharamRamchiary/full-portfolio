const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config()
const cors = require('cors');
const path = require('path')

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());


app.use(express.static(path.join(__dirname + "/myPortfolio/build")))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "myPortfolio", "build", "index.html"))
})

// Endpoint to handle form submission and send email
app.post('/backend/sendEmail', async (req, res) => {
    const { name, email, subject, message } = req.body;

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            host: "smtp.gmail.com",
            secure: false,
            auth: {
                user: process.env.USER,
                pass: process.env.APP_PASSWORD,
            },
        });

        const info = await transporter.sendMail({
            from: `${name} <${process.env.USER}>`,
            replyTo: email,
            to: process.env.USER,
            subject: subject,
            text: message,
        });

        console.log('Message sent: %s', info.messageId);
        res.status(200).send('Message sent successfully!');
    } catch (error) {
        console.error('Error sending message:', error);
        res.status(500).send('Failed to send message. Please try again later.');
    }
});

app.listen(port, () => {
    console.log(`Server is running on: ${port}`);
});
