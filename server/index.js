// const sendemail = require("./emailservice.js")
const express = require("express")
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express()



app.use(cors());
app.use(bodyParser.json());


const nodemailer = require('nodemailer');

app.post("/", (req, res) => {

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.office365.com',
        port: 587,
        secure: false,
        auth: {
            user: 'sharks_for_now@hotmail.com',
            pass: 'Yahia@123'
        },
        tls: {
            ciphers: 'TLS_AES_256_GCM_SHA384'
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: req.body["name"],
        to: req.body["email"],
        subject: req.body["name"],
        text: req.body["name"],
        html: '<h1>Hello world!</h1>'
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });


});

app.get("/", (req, res) => {
    console.log("hello");
});


app.listen(3000, () => {
    console.log("I am listening on port 3000")
});
