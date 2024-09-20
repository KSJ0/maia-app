/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";

const ContactForm = () => {
  // Variables for the form field
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  // Handle changes in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // hand form data (send it to the backend server if plan to put database)
    console.log(formData);
    alert("Form submitted successfully");

    // Reset the form
    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="flex flex-col-reverse gap-10 md:gap-0 mt-10 md:grid md:grid-cols-2">
      <section className="flex flex-col content-center mx-auto md:w-[500px]">
        <form
          onSubmit={handleSubmit}
          className="bg-[--bg-color] p-10 rounded-lg"
        >
          <div className="flex flex-col">
            <label htmlFor="name" className="text-[--text-color] text-2xl my-2">
              Name:
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border-solid border-2 border-[--text-color] text-2xl text-[text-color] rounded-lg text-center"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="phone"
              className="text-[--text-color] text-2xl my-2"
            >
              Phone:
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="border-solid border-2 border-[--text-color] text-2xl text-[text-color] rounded-lg text-center"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-[--text-color] text-2xl my-2"
            >
              Email:
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border-solid border-2 border-[--text-color] text-2xl text-[text-color] rounded-lg text-center"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="message"
              className="text-[--text-color] text-2xl my-2"
            >
              Message:
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="border-solid border-2 border-[--text-color] text-2xl text-[text-color] rounded-lg text-center"
            ></textarea>
          </div>
          <div className="mt-10 text-center">
            <Link type="submit" className="cus-bttn" onClick={handleSubmit}>
              Submit
            </Link>
          </div>
        </form>
      </section>
      <section className="flex flex-col gap-3 content-center text-center mx-auto md:my-auto">
        <h1 className="text-[--text-color] text-3xl">CONTACT ME</h1>
        <p className="text-[--other-color] text-lg">
          Tel: 0960-382-0758 <br />
          Email: maiabakeryph@gmail.com
        </p>

        <h1 className="text-[--text-color] text-3xl">OPENING HOURS</h1>
        <p className="text-[--other-color] text-lg">
          Mon - Fri: 7AM - 5PM <br />
          Sat: 7AM - 3PM <br />
          Sun: CLOSED
        </p>

        <h1 className="text-[--text-color] text-3xl">ADDRESS</h1>
        <p className="text-[--other-color] text-lg">
          Angeles St. Caingin Rd. <br />
          Morong Rizal PH 1960
        </p>
      </section>
    </div>
  );
};

export default ContactForm;
