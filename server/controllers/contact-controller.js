import Contact from "../models/contact-model.js";

const contactForm = async (req, res) => {
  try {
    const response = req.body;
    await Contact.create(response);
    res.status(200).json({ message: "Message submitted successfully" });
  } catch (error) {
    res.status(400).json({ message: "Message not sent" });
  }
};
export default contactForm;
