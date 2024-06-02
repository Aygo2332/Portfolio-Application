import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "aygo2332@gmail.com",
    password: "Ayush@1912"
  },
});

export const sendEmailController = async (req, res) => {
  try {
    const { name, email, msg } = req.body;
    if (!name || !email || !msg)
      return res.status(500).send({
        success: false,
        message: "Please Provide All Fields",
      });
    await transporter.sendMail({
      to: "ayushgoyal19122002@gmail.com",
      from: "aygo2332@gmail.com",
      subject: "Regarding Mern Portfolio App",
      html: `
        <h5>Detail Information</h5>
        <ul>
          <li><p>Name : ${name}</p></li>
          <li><p>Email : ${email}</p></li>
          <li><p>Message : ${msg}</p></li>
        </ul>
      `,
    });
    
    return res.status(200).send({
      success: true,
      message: "Your Message Send Successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Send Email API Error",
      error,
    });
  }
};