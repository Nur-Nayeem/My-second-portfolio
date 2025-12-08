import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaMedium,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Swal from "sweetalert2";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  const handleContact = (e) => {
    e.preventDefault();
    setLoading(true);
    if (!formRef.current) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          formRef.current?.reset();
          setLoading(false);
          Toast.fire({
            icon: "success",
            title: "Email send successfully",
          });
        },
        (error) => {
          setLoading(false);
          Toast.fire({
            icon: "success",
            title: `EmailJS Error:${error}`,
          });
        }
      );
  };
  return (
    <section
      id="contact"
      className="py-12 transition-colors duration-300 rounded-2xl mt-10"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">Get In Touch</h2>
          <div className="w-40 h-1 bg-linear-to-r from-[#632EE3] to-[#9F62F2] mx-auto"></div>
          <p className="mt-4 text-lg max-w-4xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach
            out to me using the form below.
          </p>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 items-center lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="p-6 rounded-xl glass-blur shadow-md">
              <div className="flex items-center">
                <div className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] p-3 rounded-full text-white mr-4">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Location</h3>
                  <p className="text-gray-600">Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-xl glass-blur shadow-md">
              <div className="flex items-center">
                <div className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] p-3 rounded-full text-white mr-4">
                  <MdEmail />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Email</h3>
                  <p className="text-gray-600">nurnayem768@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-xl glass-blur shadow-md">
              <div className="flex items-center">
                <div className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] p-3 rounded-full text-white mr-4">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Phone</h3>
                  <p className="text-gray-600">+880 17 9249 1909</p>
                </div>
              </div>
            </div>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://github.com/username"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-gray-800 text-white p-3 rounded-full transition-colors duration-300 cursor-pointer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/username"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary/90 hover:bg-primary text-white p-3 rounded-full transition-colors duration-300 cursor-pointer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com/username"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white p-3 rounded-full transition-colors duration-300 cursor-pointer"
                aria-label="Twitter"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://medium.com/@username"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors duration-300 cursor-pointer"
                aria-label="Medium"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
          <div className="lg:col-span-3">
            <form
              ref={formRef}
              onSubmit={handleContact}
              className="p-8 rounded-xl glass-blur"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 rounded-lg glass-blur text-gray-900 focus:outline-primary"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-lg glass-blur  text-gray-900 focus:outline-primary"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className={
                    "w-full px-4 py-3 rounded-lg glass-blur text-gray-900 focus:outline-primary "
                  }
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg glass-blur  text-gray-900 focus:outline-primary"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full btn-primary text-white font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg hover:scale-102 transition-all duration-300 cursor-pointer"
              >
                {loading ? "Loading..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
