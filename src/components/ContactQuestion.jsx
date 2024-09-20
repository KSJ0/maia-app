/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";

const ContactQuestion = () => {
  return (
    <div className="flex flex-col gap-5 mt-32 content-center px-5">
      <h1 className="text-center text-3xl text-[--text-color]">
        Have a Question?
      </h1>
      <p className="text-[--other-color] text-center text-xl md:text-left md:w-[800px] md:mx-auto">
        At our bakery, we know that you may have questions about our delicious
        treats and bake goods. That's why we're here to help answer any
        questions you may have! Whether you're curious about our ingredients,
        want to know more about our baking process, or have questions about
        placing order, our team is here to provide you with the information you
        need.
      </p>
      <p className="text-[--other-color] text-center text-xl md:text-left md:w-[800px] md:mx-auto">
        You can reach out to us through our website, email or Phone, and we
        we'll be more than happy to help. So don't hesitate to talk to talk to
        us anything - we're here to help you enjoy our treats to the fullest!
      </p>
    </div>
  );
};

export default ContactQuestion;
