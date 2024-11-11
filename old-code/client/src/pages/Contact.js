import React from "react";
import Layout from "../components/Layout/Layout";

const Contact = () => {
  return (
    <Layout title={"Pawtales-Contact"}>
      <div className="contact-container">
        <div className="contact-info">
          <h1>Contact Us</h1>
          <p>
            We’d love to hear from you! Whether you’re looking to adopt,
            volunteer, or have any questions, feel free to reach out.
          </p>
          <div className="contact-details">
            <p>
              <strong>Email:</strong> info@pawtales.com
            </p>
            <p>
              <strong>Phone:</strong> +91 8421946725
            </p>
            <p>
              <strong>Address:</strong> MIT WPU, Kothrud, Pune City,
              PinCode-411038.
            </p>
          </div>
        </div>
        <div className="contact-image">
          {/* <img src="https://github.com/riya-kondawar/PawTales/blob/main/assets/cat-girl.png" alt="Happy Pet" /> */}
          <img
            src="https://unsplash.com/photos/photo-of-man-hugging-tan-dog-ISg37AI2A-s"
            alt="Happy Pet"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
