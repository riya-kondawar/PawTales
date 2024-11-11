const Pet = require('../Model/PetModel');
const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');

const postPetRequest = async (req, res) => {
  try {
    const { name, age, area, justification, email, phone, type } = req.body;
    const { filename } = req.file;

    const pet = await Pet.create({
      name,
      age,
      area,
      justification,
      email,
      phone,
      type,
      filename,
      status: 'Pending'
    });

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_APP_PASS
      }
  });
  
  const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Pet Submission Received - PawFinds',
      text: `Dear ${name},\n\nThank you for submitting your pet to PawFinds for adoption.\n\nWe have received your request, and our admin team is currently reviewing it. Once approved, your pet will be listed on our platform, making it available for adoption by our community of pet lovers.\n\nWe appreciate your patience and will notify you once your pet's listing is live.\n\nIf you have any questions or need assistance, feel free to contact us.\n\nBest regards,\nThe PawFinds Team`
  };
  
  try {
    
      await transporter.sendMail(mailOptions);
  } catch (error) {
    
      console.error('Error sending submission email:', error);
  }
  
    res.status(200).json(pet);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const approveRequest = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, email, phone, status } = req.body;
    const pet = await Pet.findByIdAndUpdate(id, { email, phone, status }, { new: true });

    if (!pet) {
      return res.status(404).json({ error: 'Pet not found' });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_APP_PASS
      }
  });
  
  const mailOptions = {
      from: process.env.EMAIL_USER,
      to: pet.email,
      subject: 'Your Pet is Now Live on PawFinds!',
      text: `Dear ${pet.name} Owner,\n\nGreat news! Your pet has been approved and is now live on the PawFinds platform.\n\nPet lovers in our community can now view and adopt your pet. Thank you for contributing to our community and helping pets find new homes.\n\nYou can view your pet's listing on our website by logging into your account.\n\nIf you have any questions or need further assistance, feel free to contact us.\n\nBest regards,\nThe PawFinds Team`
  };
  
  try {
      await transporter.sendMail(mailOptions);
  } catch (error) {
      console.error('Error sending approval email:', error);
  }
  

    res.status(200).json(pet);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const allPets = async (reqStatus, req, res) => {
  try {
    const data = await Pet.find({ status: reqStatus }).sort({ updatedAt: -1 });
    if (data.length > 0) {
      res.status(200).json(data);
    } else {
      res.status(200).json({ error: 'No data found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deletePost = async (req, res) => {
  try {
    const id = req.params.id;
    const pet = await Pet.findByIdAndDelete(id);
    if (!pet) {
      return res.status(404).json({ error: 'Pet not found' });
    }
    const filePath = path.join(__dirname, '../images', pet.filename);

    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_APP_PASS
      }
  });
  
  const mailOptions = {
      from: process.env.EMAIL_USER,
      to: pet.email,
      subject: 'Pet Submission Removed - PawFinds',
      text: `Dear ${pet.name},\n\nWe wanted to inform you that your pet submission has been removed from the PawFinds platform by our admin team.\n\nIf you have any questions or would like to understand more about this decision, please feel free to reach out to us.\n\nWe appreciate your understanding.\n\nBest regards,\nThe PawFinds Team`
  };
  
  try {
      await transporter.sendMail(mailOptions);
  } catch (error) {
      console.error('Error sending removal email:', error);
  }
  

    res.status(200).json({ message: 'Pet deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  postPetRequest,
  approveRequest,
  deletePost,
  allPets
};
