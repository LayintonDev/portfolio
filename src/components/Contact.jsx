import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailJs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const [form, setform] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setloading] = useState(false);
  const formRef = useRef();

  // TODO: Create an account and set it up on emailJs.com
  const handleChange = (event) => {
    const { name, value } = event.target;
    setform({ ...form, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setloading(true);
    emailJs
      .send(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: process.env.MY_NAME,
          from_email: form.email,
          to_email: process.env.MY_EMAIL,
          message: form.message,
        },
        process.env.REACT_APP_EMAIL_PUBLIC_KEY
      )
      .then(() => {
        setloading(false);
        alert(
          "Thank you for contacting me, I will get back as soon as possible."
        );
        setform({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((e) => {
        setloading(false);
        console.log(e);
        alert("Oops! something went wrong.");
      });
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-9"
        >
          <label className="flex flex-col" htmlFor="">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium "
            />
          </label>
          <label className="flex flex-col" htmlFor="">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium "
            />
          </label>
          <label className="flex flex-col" htmlFor="">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium "
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "sending..." : "Send"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
