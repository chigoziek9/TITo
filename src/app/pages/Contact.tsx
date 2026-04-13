import { useState, useRef } from "react";
import { motion } from "motion/react";
import { MapPin, Phone, Mail, MessageCircle, Clock, Users } from "lucide-react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const SERVICE_ID = "service_k92b6gv";
    const TEMPLATE_ID = "template_d35s9sn";
    const PUBLIC_KEY = "FWBN8Ps1LwaU1tfqU";

    if (formRef.current) {
      emailjs
        .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
        .then(
          () => {
            toast.success(
              "Message sent successfully! We'll get back to you within 24 hours.",
            );
            setFormData({
              firstName: "",
              lastName: "",
              email: "",
              phone: "",
              message: "",
            });
          },
          (error) => {
            toast.error("Failed to send message. Please try again later.");
            console.error("EmailJS Error:", error);
          },
        )
        .finally(() => {
          setIsSubmitting(false);
        });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0A0F1E] via-[#1A2332] to-[#0A0F1E] text-white py-20 lg:py-32 relative overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#D4932D] opacity-10 rounded-full blur-3xl"
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block bg-[#D4932D] text-white px-4 py-1.5 text-sm font-medium mb-6"
            >
              GET IN TOUCH
            </motion.div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Let's Build Your <span className="text-[#D4932D]">Vision</span>{" "}
              Together.
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl leading-relaxed">
              Have a project in mind? Fill out the form below and our team will
              get back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="bg-gray-50 py-12 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                  Contact Information
                </h2>
              </div>

              {/* Office Address */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#D4932D]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#D4932D]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">OUR OFFICE</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      No. 1, Beco Street Onipetesi Estate,
                      <br />
                      Mangoro, Lagos State.
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#D4932D]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#D4932D]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">CALL ANYTIME</h3>
                    <div className="space-y-2">
                      <a
                        href="tel:+2348161743711"
                        className="block text-gray-600 hover:text-[#D4932D] transition-colors text-sm"
                      >
                        +234 816 174 3711
                      </a>
                      <a
                        href="tel:+2349116037981"
                        className="block text-gray-600 hover:text-[#D4932D] transition-colors text-sm"
                      >
                        +234 911 603 7981
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#D4932D]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#D4932D]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">SEND AN EMAIL</h3>
                    <a
                      href="mailto:titoniglimited@gmail.com"
                      className="text-gray-600 hover:text-[#D4932D] transition-colors text-sm break-all"
                    >
                      titoniglimited@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Priority Support */}
              <div className="bg-[#D4932D] text-white p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-4">Priority Support</h3>
                <a
                  href="https://wa.me/2348161743711"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white text-[#D4932D] px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors justify-center font-medium"
                >
                  <MessageCircle className="w-5 h-5" />
                  Start WhatsApp Chat
                </a>
              </div>

              {/* Functional Map Section */}
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <div className="h-64 rounded-lg overflow-hidden border border-gray-100">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.3670618759675!2d3.3189808793679356!3d6.6012239763560006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b919a27982cb7%3A0x29b76881dfc7096a!2s1%20Beco%20St%2C%20Idi%20Mangoro%2C%20Lagos%20101233%2C%20Lagos!5e0!3m2!1sen!2sng!4v1776090699603!5m2!1sen!2sng"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Tito Nig Ltd Location"
                  ></iframe>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 lg:p-12 rounded-lg shadow-xl"
            >
              <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
              <p className="text-gray-600 mb-8">
                Have a project in mind? Fill out the form below and our team
                will get back to you within 24 hours.
              </p>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      FIRST NAME
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4932D] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      LAST NAME
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4932D] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      PHONE NUMBER
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+234 000 000 0000"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4932D] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      EMAIL ADDRESS
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="davidson123@gmail.com"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4932D] focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    YOUR MESSAGE
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Tell us about your project requirements..."
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4932D] focus:border-transparent resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#0A0F1E] hover:bg-black text-white py-4 px-8 font-medium transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <input type="checkbox" required className="rounded" />
                  <span>
                    Your data is securely handled under our Privacy Policy
                  </span>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-[#0A0F1E] text-white py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex -space-x-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-16 h-16 bg-[#D4932D] rounded-full border-4 border-[#0A0F1E] flex items-center justify-center"
                  >
                    <Users className="w-8 h-8 text-white" />
                  </div>
                ))}
                <div className="w-16 h-16 bg-[#D4932D] rounded-full border-4 border-[#0A0F1E] flex items-center justify-center">
                  <span className="text-white font-bold text-sm">+50</span>
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <p className="text-lg sm:text-xl italic mb-4">
                  "The team at TITO NIG LTD transformed our workspace into a
                  functional masterpiece. Their attention to detail is truly
                  unparalleled in Lagos."
                </p>
                <p className="text-gray-400">— Corporate Client</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Location & Quick Info */}
      <section className="bg-white py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-[#D4932D]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-[#D4932D]" />
              </div>
              <h3 className="font-bold text-lg mb-2">Location</h3>
              <p className="text-gray-600 text-sm">
                No. 1, Beco Street Onipetesi Estate,
                <br />
                Mangoro, Lagos State.
                <br />
                Nigeria.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-[#D4932D]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-[#D4932D]" />
              </div>
              <h3 className="font-bold text-lg mb-2">Response Time</h3>
              <p className="text-gray-600 text-sm">
                We respond to all inquiries
                <br />
                within 24 hours during
                <br />
                business days.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-[#D4932D]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-[#D4932D]" />
              </div>
              <h3 className="font-bold text-lg mb-2">Support</h3>
              <p className="text-gray-600 text-sm">
                24/7 customer support
                <br />
                available via WhatsApp
                <br />
                and phone.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
