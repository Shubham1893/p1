import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const ContactForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const onSubmit = (data: any) => {
    setIsSubmitting(true);

    const emailParams = {
      to_name: "Recipient Name",
      from_name: data.name,
      message: data.message,
    };

    emailjs.send(
      "service_8fu6o6d",
      "template_mf1kuqq",
      emailParams,
      "_V6kl55089om9mH_s"
    ).then(
      () => {
        setSuccessMessage("Message sent successfully!");
        reset();
        setIsSubmitting(false);
      },
      (error) => {
        console.error("Email error:", error);
        setIsSubmitting(false);
      }
    );
  };

  return (
    <section id="contact" className="py-20 bg-black/50">
      <div className="container mx-auto px-4 max-w-lg">
        <h2 className="text-4xl font-bold text-center mb-12 hover:text-blue-400 transition-colors cursor-default">
          Contact Us
        </h2>

        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 bg-white/10 p-6 rounded-xl shadow-lg backdrop-blur-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="relative"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <input
              {...register("name", { required: "Name is required" })}
              placeholder="Your Name"
              className="w-full p-3 bg-transparent border border-gray-300 rounded-md focus:border-blue-400 focus:ring-2 focus:ring-blue-400 transition-all outline-none text-white"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </motion.div>

          <motion.div
            className="relative"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <textarea
              {...register("message", { required: "Message is required" })}
              placeholder="Your Message"
              className="w-full p-3 bg-transparent border border-gray-300 rounded-md focus:border-blue-400 focus:ring-2 focus:ring-blue-400 transition-all outline-none text-white h-32"
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
          </motion.div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600 transition-all"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </motion.button>

          {successMessage && (
            <motion.p
              className="text-green-400 text-center text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {successMessage}
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;
