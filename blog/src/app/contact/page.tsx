import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import ContactForm from "../components/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Me",
  description: "sending email to Nadia",
};
const LINKS = [
  { icon: <AiFillGithub />, url: "" },
  { icon: <AiFillLinkedin />, url: "" },
  { icon: <AiFillYoutube />, url: "" },
];
const TITLE_CLASS = "text-2xl font-bold my-2";
const ContactPage = () => {
  return (
    <section className="flex flex-col items-center">
      <h2 className={TITLE_CLASS}>Contact Me</h2>
      <p>nwwn1004@naver.com</p>
      <ul className="flex gap-4 my-2">
        {LINKS.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noreferrer noopener"
            className="text-3xl hover:text-yellow-500 my-4"
          >
            {link.icon}
          </a>
        ))}
      </ul>
      <h2 className={TITLE_CLASS}>Or, Send me an email!!</h2>
      <ContactForm />
    </section>
  );
};

export default ContactPage;
