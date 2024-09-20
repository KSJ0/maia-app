/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../components/Header";
import ContactQuestion from "../components/ContactQuestion";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="flex flex-col gap-5 text-[--text-color] max-w-7xl mx-auto md:gap-8">
      <Header />
      <ContactQuestion />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
