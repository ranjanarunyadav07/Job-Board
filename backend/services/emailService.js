import nodemailer from 'nodemailer'; // Correct import

// Define the sendEmail function
const sendEmail = async (to, subject, text) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail', // or another email service
    auth: {
      user: process.env.EMAIL_USER, // your email
      pass: process.env.EMAIL_PASS, // your password
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER, // sender address
    to, // list of receivers
    subject, // Subject line
    text, // plain text body
  };

  // Send email
  await transporter.sendMail(mailOptions);
};

// Export the function
export default sendEmail;
