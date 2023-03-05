



//  function sendEmail(name, message, address, subject) {


//     // create reusable transporter object using the default SMTP transport
//     let transporter = nodemailer.createTransport({
//         host: 'smtp.office365.com',
//         port: 587,
//         secure: true,
//         auth: {
//             user: 'sharks_for_now@hotmail.com',
//             pass: 'yosra2010'
//         }
//     });

//     // setup email data with unicode symbols
//     let mailOptions = {
//         from: name,
//         to: 'yahiashawkyy@@gmail.com',
//         subject: subject,
//         text: 'message',
//         html: '<h1>Hello world!</h1>'
//     };

//     // send mail with defined transport object
//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             console.log('Error sending email:', error);
//         } else {
//             console.log('Email sent:', info.response);
//         }
//     });




// }

// module.exports= sendEmail();