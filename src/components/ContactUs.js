import React from "react";

const ContactUs = () => {
  return (
    <div className="d-flex justify-content-center">
      <form>
        <div>
          <label>Your full Name</label>
          <input placeholder="Enter your name full name" />
        </div>
        <div>
          <label>Your Email id</label>
          <input placeholder="Enter your email id here" />
        </div>
        <div>
          <label>Your full Address</label>
          <input placeholder="Enter your name full address" />
        </div>
        <div>
          <label>Your PIN / ZIP Code</label>
          <input placeholder="Enter your city zip code" />
        </div>
        <button type="submit" className="bg-success text-white">Submit Your Details</button>
      </form>
    </div>
  );
};

export default ContactUs;
