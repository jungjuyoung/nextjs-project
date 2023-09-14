import React from "react";
import Hero from "../components/Hero";
const TITLE_CLASS = "text-2xl font-bold text-gray-800 my-2";
const AboutPage = () => {
  return (
    <article className="bg-gray-100 shadow-lg p-8 m-8 text-center">
      <Hero />
      <section>
        <h2 className={TITLE_CLASS}>Who Am I?</h2>
        <p>
          시니어 퍼블리셔 출신의 주니어 프론트앤드 개발자
          <br /> SEO, 자바스크립트 런타인 node기반의 express API 설계가 가능한
          프론트앤드 개발자.
        </p>
        <h2 className={TITLE_CLASS}>skills</h2>
        <p>
          React, Redux, Styled-Component, SCSS, HTML5, CSS3, Javascript,
          jquery,Git, Typescript
        </p>
      </section>
    </article>
  );
};

export default AboutPage;
