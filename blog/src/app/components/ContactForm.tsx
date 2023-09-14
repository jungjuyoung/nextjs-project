"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import Banner, { BannerData } from "./Banner";

type EmailForm = {
  from: string;
  subject: string;
  message: string;
};
const ContactForm = () => {
  const [form, setForm] = useState<EmailForm>({
    from: "",
    subject: "",
    message: "",
  });
  const [banner, setBanner] = useState<BannerData | null>(null);
  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    console.log("name: ", name, "value: ", value);
  };
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setBanner({ message: "성공!!!!", state: "success" });
    setTimeout(() => {
      setBanner(null);
    }, 2500);
    console.log(form);
  };
  return (
    <>
      {banner && <Banner banner={banner} />}
      <form onSubmit={onSubmit}>
        <label htmlFor="from">Your email</label>
        <input
          type="email"
          id="from"
          name="from"
          required
          autoFocus
          value={form.from}
          onChange={onChange}
        />
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          value={form.subject}
          onChange={onChange}
        />
        <label htmlFor="message">Message</label>
        <textarea
          rows={10}
          id="message"
          name="message"
          required
          value={form.message}
          onChange={onChange}
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default ContactForm;
