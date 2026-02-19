import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaTwitter, 
  FaInstagram, 
  FaLinkedin, 
  FaReddit, 
  FaGithub, 
  FaWhatsapp, 
  FaEnvelope,
  FaMapMarkerAlt,
  FaMedium // Added Medium
} from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact = () => {
  const [status, setStatus] = useState(""); // "success", "error", ""

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_xh0j8dj",
        "template_itq1yml",
        e.target,
        "da4BqbaBZsLgPiZKS"
      )
      .then(
        (result) => {
          setStatus("success");
          e.target.reset();
          setTimeout(() => setStatus(""), 4000);
        },
        (error) => {
          setStatus("error");
          setTimeout(() => setStatus(""), 4000);
        }
      );
  };

  const socials = [
    { icon: <FaTwitter />, href: "https://x.com/H85033898Henry", color: "#1DA1F2" },
    { icon: <FaInstagram />, href: "https://www.instagram.com/dream53167/?hl=en", color: "url(#instagram-gradient)" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/henry-chi332/", color: "#0A66C2" },
    { icon: <FaReddit />, href: "https://www.reddit.com/user/Old-Calligrapher1502/", color: "#FF4500" },
    { icon: <FaGithub />, href: "https://github.com/Henrychigozie", color: "#000000" },
    { icon: <FaMedium />, href: "https://medium.com/@h85033898", color: "#12100E" }, 
  ];

  return (
    <section id="contact" className="py-24 bg-[#0f172a] text-white relative overflow-hidden">
      {/* Subtle Background Glow for Depth */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-emerald-400 font-mono text-sm tracking-[0.2em] uppercase mb-4"
          >
            Contact
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-100"
          >
            Get in <span className="text-emerald-400">Touch</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            I’d love to hear about your project, ideas, or opportunities. Whether you have a question or just want to say hi, my inbox is always open.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-10"
          >
            <div className="space-y-8">
              {/* Email */}
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 bg-slate-800/50 border border-slate-700 rounded-2xl flex items-center justify-center text-emerald-400 shadow-sm">
                  <FaEnvelope className="w-6 h-6" />
                </div>
                <div className="pt-1">
                  <h4 className="text-sm font-mono text-slate-400 tracking-wider uppercase mb-1">Email</h4>
                  <a href="mailto:henryanaekwe971@gmail.com" className="text-slate-200 text-lg hover:text-emerald-400 transition-colors">
                    henryanaekwe971@gmail.com
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 bg-slate-800/50 border border-slate-700 rounded-2xl flex items-center justify-center text-emerald-400 shadow-sm">
                  <FaWhatsapp className="w-7 h-7" />
                </div>
                <div className="pt-1">
                  <h4 className="text-sm font-mono text-slate-400 tracking-wider uppercase mb-1">WhatsApp</h4>
                  <p className="text-slate-200 text-lg">+234 708 454 4389</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 bg-slate-800/50 border border-slate-700 rounded-2xl flex items-center justify-center text-emerald-400 shadow-sm">
                  <FaMapMarkerAlt className="w-6 h-6" />
                </div>
                <div className="pt-1">
                  <h4 className="text-sm font-mono text-slate-400 tracking-wider uppercase mb-1">Location</h4>
                  <p className="text-slate-200 text-lg">Aba, Abia State, Nigeria</p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-8 border-t border-slate-800">
              <h4 className="text-sm font-mono text-slate-400 tracking-wider uppercase mb-6">
                Connect with me
              </h4>
              <div className="flex items-center gap-5">
                {socials.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-2xl transition-transform hover:scale-125"
                    style={{ color: social.color.startsWith("url") ? "white" : social.color }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-3 relative"
          >
            <form
              onSubmit={sendEmail}
              className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 lg:p-10 shadow-2xl"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400 ml-1">Your Name</label>
                  <input
                    type="text"
                    name="user_name"
                    placeholder="John Doe"
                    className="w-full px-5 py-4 rounded-xl bg-slate-900/50 border border-slate-700 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400 ml-1">Email Address</label>
                  <input
                    type="email"
                    name="user_email"
                    placeholder="john@example.com"
                    className="w-full px-5 py-4 rounded-xl bg-slate-900/50 border border-slate-700 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2 mb-8">
                <label className="text-sm font-medium text-slate-400 ml-1">Your Message</label>
                <textarea
                  name="message"
                  placeholder="How can I help you?"
                  className="w-full px-5 py-4 rounded-xl bg-slate-900/50 border border-slate-700 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all resize-none min-h-[160px]"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 px-8 bg-emerald-500 hover:bg-emerald-400 active:scale-[0.98] text-slate-900 font-bold text-lg rounded-xl transition-all duration-200 shadow-[0_0_20px_rgba(16,185,129,0.15)] hover:shadow-[0_0_25px_rgba(16,185,129,0.3)]"
              >
                Send Message
              </button>
            </form>

            {/* Success / Error Popup Notification */}
            <AnimatePresence>
              {status && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className={`absolute -top-16 left-1/2 -translate-x-1/2 px-8 py-4 rounded-xl font-medium text-sm shadow-2xl backdrop-blur-md border whitespace-nowrap z-20 ${
                    status === "success"
                      ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                      : "bg-red-500/10 text-red-400 border-red-500/20"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {status === "success" ? (
                      <>
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        Message sent successfully! I'll get back to you soon.
                      </>
                    ) : (
                      <>
                        <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                        Oops! Something went wrong. Please try again.
                      </>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
