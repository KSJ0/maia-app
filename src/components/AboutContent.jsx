/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import aboutImg from "/images/MAIA BAKERY 2.png";

const AboutContent = () => {
  return (
    <div className="flex flex-col h-auto gap-3 p-7 max-w-7xl m-auto mt-11">
      <div>
        <img
          src={aboutImg}
          alt="Maia Bakery Image"
          className="max-w-[50%] m-auto"
        />
      </div>

      <div className="flex flex-col gap-5 text-center">
        <h2 className="font-extrabold text-4xl">Our Story</h2>
        <p className="text-xl md:mx-7">
          Maia Bakery started as a small, family-oned buisness run by our
          founder, Tin, and her husband. Tin had a passion in baking from young
          age, and after yars if hining her skills in her home kitchen, she
          decided to turn herpassion into a business. In the early days, Tin
          woul wake upbefore dawn to start baking and work tirelessly thoughout
          the day to fullfill orders. Her husband would help with deliveries and
          administrative task in the evenings after he finished his day job.
        </p>
        <p className="text-xl md:mx-7">
          Maia Bakery's bake goods quickly gained a reputation for bieng
          delicious and visually stunning. As word of mouth spread, the customer
          base grew, and soon they were getting orders for weedings, birthdays,
          and other special occasions.
        </p>
        <p className="text-xl md:mx-7">
          Maia Bekry's dedication to using only the finest ingredients and
          traditional baking methods quickly became a hallmark ofthe business.
          Maia sources the best ingredients possible and make everything from
          scatch, using time-honored techniques passed down through generations
          of bakers. As the company grew, Maia remained committed toits roots
          and continued to operate with the same care and attention to deal it
          had from the beginning.
        </p>
        <p className="text-xl md:mx-7">
          Today, Maia Bakery remains a family-owned business and still uses the
          same high-quality ingredients and traditional methods that Tin started
          with. We're proud of our humble beginnings and stay dedicated to
          tcreating delicious, visiually stunning baked goods that bring joy to
          our customers' lives.
        </p>
      </div>
    </div>
  );
};

export default AboutContent;
