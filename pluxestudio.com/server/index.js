const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/api/send-email', async (req, res) => {
  const { username, email, Phone, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtpout.secureserver.net",  // GoDaddy's SMTP host
    port: 465,
    secure: true,                      // true for port 465
    auth: {
      user: 'info@pluxestudio.com',    // your GoDaddy email
      pass: 'Pstudio1971@'         // your GoDaddy email password
    }
  });

  const mailOptions = {
    from: 'info@pluxestudio.com',
    to: 'info@pluxestudio.com,pluxestudio25@gmail.com', // where you want to receive messages
    subject: `New Message from ${username}`,
    text: `
      Name: ${username}
      Email: ${email}
      Phone: ${Phone}
      Message: ${message}
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Email sending failed' });
  }
});

app.listen(5000, () => {
  console.log('Server started on port 5000');
});
