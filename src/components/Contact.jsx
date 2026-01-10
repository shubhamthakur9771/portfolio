import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          toast.success("Message sent successfully 🚀");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          toast.error("Failed to send message ❌ Please try again.");
        }
      );
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col gap-10 overflow-hidden">
      {/* CONTACT FORM */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-1 bg-black-100 p-8 rounded-2xl border border-[#915eff]/30"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-6"
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="bg-tertiary px-6 py-4 rounded-lg text-white outline-none"
            required
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="bg-tertiary px-6 py-4 rounded-lg text-white outline-none"
            required
          />

          <textarea
            rows={6}
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="bg-tertiary px-6 py-4 rounded-lg text-white outline-none"
            required
          />

          <button
            type="submit"
            className="bg-[#915eff] py-3 px-8 rounded-xl text-white font-bold"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>

      {/* CONTACT INFO + PROJECTS */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="flex-1 bg-black-100 p-8 rounded-2xl border border-[#915eff]/30 flex flex-col justify-between"
      >
        <div>
          <h3 className="text-white text-2xl font-bold mb-6">
            Let’s Connect 🚀
          </h3>

          <ul className="flex flex-col gap-4 text-secondary mb-8">
            <li>📞 <a href="tel:+917634003364">+91 7634003364</a></li>
            <li>📧 shubhamthakur9771@gmail.com</li>

            <li>
              💼{" "}
              <a
                href="https://www.linkedin.com/in/shubham-kumar-15695a217/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn Profile
              </a>
            </li>

            <li>
              💻{" "}
              <a
                href="https://github.com/shubhamthakur9771"
                target="_blank"
                rel="noreferrer"
              >
                GitHub Repositories
              </a>
            </li>

            <li>
              🧠{" "}
              <a
                href="https://leetcode.com/u/shubhamthakur9771/"
                target="_blank"
                rel="noreferrer"
              >
                LeetCode Profile
              </a>
            </li>
          </ul>

          {/* VIEW PROJECTS */}
          <h4 className="text-white text-xl font-semibold mb-4">
            View My Projects
          </h4>

          <ul className="flex flex-col gap-3 text-secondary">
            <li>
              <a
                href="https://pos-system-saas.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#915eff] transition"
              >
                ➜ Point of Sale (POS) Management System (SaaS)
              </a>
            </li>

            <li>
              <a
                href="https://create-rezume.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#915eff] transition"
              >
                ➜ Rezume – Smart Resume Builder Platform
              </a>
            </li>

            <li>
              <a
                href="https://github.com/shubhamthakur9771"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#915eff] transition"
              >
                ➜ Employee Management System (Java JDBC Project)
              </a>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");


