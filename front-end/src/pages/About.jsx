import React from "react";

const About = () => {
  return (
    <div>
      <div className="p-16 md:p-12 md:max-w-6xl ">
        <h1 className="text-[#0000ff] text-3xl font-bold text-center">
          Our Story
        </h1>
        <p className="text-[#0037ff] text-md mt-2 text-center">
          Make learning and teaching more effective with active <br />{" "}
          participation and student collaboration
        </p>
      </div>
      <div className="md:flex justify-around p-4">
        <div className="p-2">
          <h2 className="text-[#ff00ff] font-semibold text-2xl">Background</h2>
          <p className="p-4 text-left text-2xl max-w-4xl">
            Sipalaya empowers professionals and students in the tech industry
            with tailored, top-notch training programs. Our expert instructors,
            with extensive industry experience, provide personalized support.
            Offering interactive, hands-on courses covering the latest
            technologies, we’ve helped countless individuals elevate their
            careers. Join us to achieve your goals confidently.
          </p>
          <div className="text-center mt-2.5">
            <button className="w-52 p-2 rounded-2xl cursor-pointer bg-blue-500 hover:bg-blue-700 text-white">
              Let's connect
            </button>
          </div>
        </div>
        <div className="max-w-3xl">
          <img
            className="w-full rounded-xl"
            src="https://broadwayinfosys.com/uploads/banner/1751542485_60565.jpg"
            alt="Sipalaya"
          />
        </div>
      </div>

      <div className="md:flex gap-4 p-4 font-serif mt-12">
        <div className="bg-[#edf3fa] text-[#151a21] p-10 rounded-2xl">
          <h3 className="text-xl font-semibold  text-[#006af5] ">
            Our Mission
          </h3>
          <p className="text-2xl text-left">
            We are creating a digital tomorrow by empowering people with
            competent skills & turning them into able IT professionals who can
            contribute & transform society as a whole.
          </p>
        </div>
        <div className="bg-[#edf3fa] text-[#151a21] p-10 rounded-2xl">
          <h3 className="text-xl font-semibold text-[#006af5]">Our Vision</h3>
          <p className="text-2xl text-left">
            We are emerging as the premier IT education center beyond our
            boundaries by generating a talented professional workforce for
            overall technological advancement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
