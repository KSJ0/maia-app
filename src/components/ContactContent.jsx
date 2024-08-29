/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from "react";

const ContactContent = () => {
  return (
    <div className="flex flex-col h-auto gap-3 p-7 max-w-7xl m-auto mt-16">
      <div className="text-center mt-5">
        <h2>Have a Question</h2>
        <p>
          At our bakery, we know that you may have questions about our delicious
          treats and bake goods. That's why we're here to help answer any
          questions you may have! Whether you're curious about our ingredients,
          want to know more about our baking process, or have questions about
          placing order, our team is here to provide you with the information
          you need.
        </p>
        <p>
          You can reach out to us through our website, email or Phone, and we
          we'll be more than happy to help. So don't hesitate to talk to talk to
          us anything - we're here to help you enjoy our treats to the fullest!
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-5">
        <form action="#" className="md:flex-1">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="form-control"
              required
            />
            <label>Enter your phone number:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              pattern="[0-9]{4}-[0-9]{3}-[0-9]{4}"
              className="form-control"
              required
            />
            <small>Format: 0912-345-6789</small>
            <label>E-mail</label>
            <input type="email" className="form-control" id="email" required />
            <textarea rows="10" cols="10">
              Type your message here...
            </textarea>
            <button>Submit</button>
          </div>
        </form>
        <div className="md:flex-1">
          <div className="contact-group">
            <h4>CONTACT ME</h4>
            <p>Tel: 0960-382-0758</p>
            <p>
              Email:{" "}
              <a href="mailto:contact@email.com">maiabakeryph@gmail.com</a>
            </p>
          </div>
          <div className="contact-group">
            <h4>OPENING HOURS</h4>
            <p>Mon - Fri: 7AM-5PM</p>
            <p>Sat: 7AM-3PM</p>
            <p>Sun: CLOSED</p>
          </div>
          <div className="contact-group">
            <h4>ADDRESS</h4>
            <p>Angeles St. Caingin Rd. Morong Rizal PH 1960</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactContent;
