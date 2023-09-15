"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import Banner, { BannerData } from "./Banner";
import sendContactEmail from "../utils/sendContactEmail";

export type EmailForm = {
  from: string;
  subject: string;
  message: string;
};
const DEFAULT_EMAIL_DATA = {
  from: "",
  subject: "",
  message: "",
};
const ContactForm = () => {
  const [form, setForm] = useState<EmailForm>(DEFAULT_EMAIL_DATA);
  const [banner, setBanner] = useState<BannerData | null>(null);
  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // console.log("name: ", name, "value: ", value);
  };
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendContactEmail(form)
      .then(() => {
        setBanner({
          message: "메일을 성공적으로 보냈습니다.!!",
          state: "success",
        });
        setForm(DEFAULT_EMAIL_DATA);
      })
      .catch(() =>
        setBanner({
          message: "메일을 전송하는데 실패했습니다.!!",
          state: "error",
        })
      )
      .finally(() =>
        setTimeout(() => {
          setBanner(null);
        }, 2500)
      );
  };
  console.log("hi- client ContactForm component 👋🏻");
  return (
    <section className="w-full max-w-md">
      {banner && <Banner banner={banner} />}
      <form
        onSubmit={onSubmit}
        className="w-full flex flex-col gap-2 p-4 my-4 bg-slate-700 rounded-xl text-white"
      >
        <label htmlFor="from">Your email</label>
        <input
          type="email"
          id="from"
          name="from"
          required
          autoFocus
          value={form.from}
          onChange={onChange}
          className="text-black"
        />
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          value={form.subject}
          onChange={onChange}
          className="text-black"
        />
        <label htmlFor="message">Message</label>
        <textarea
          rows={10}
          id="message"
          name="message"
          required
          value={form.message}
          onChange={onChange}
          className="text-black"
        />
        <button className="bg-yellow-300 hover:bg-yellow-500 text-black font-bold ">
          Submit
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
