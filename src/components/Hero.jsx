import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between w-full mb-10 pt-3 items-center flex-row">
        <img src={logo} alt="logo_icon" className="w-28 object-contain" />

        <button
          type="button"
          onClick={() =>
            window.open("https://github.com/EdmundGiwa/vibe-summerizer")
          }
          className="black_btn"
        >
          Github
        </button>
      </nav>

      <h1 className="head_text">
        Summarize articles with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4 </span>
      </h1>
      <h2 className="desc">
        Simplify your reading with Summize, an open-source article summerizer
        that transform lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;
