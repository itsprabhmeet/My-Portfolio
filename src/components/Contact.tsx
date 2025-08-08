import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'prabhmeetsingh219@gmail.com',
      href: 'mailto:prabhmeetsingh219@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8920627544',
      href: 'tel:+918920627544',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'New Delhi, India',
      href: '#',
    },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/itsprabhmeet', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/prabhmeetsingh-507bab22b/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/its.prabhmeet/', label: 'Instagram' },
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-pink-100 dark:bg-pink-900/30 rounded-full mb-4">
            <Mail size={20} className="text-pink-600 dark:text-pink-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind? Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Get In Touch
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about technology and innovation. Don't hesitate 
                to reach out!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="group flex items-center p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <info.icon size={22} className="text-white" />
                  </div>
                  <div className="ml-6">
                    <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                      {info.label}
                    </p>
                    <p className="text-lg text-gray-900 dark:text-white font-semibold">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="pt-6">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="group p-4 bg-white dark:bg-gray-800 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110 shadow-lg border border-gray-200 dark:border-gray-700"
                  >
                    <social.icon size={22} className="text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wide"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 shadow-sm hover:shadow-md"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wide"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 shadow-sm hover:shadow-md"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wide"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-4 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 shadow-sm hover:shadow-md"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wide"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-4 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none shadow-sm hover:shadow-md"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full group px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 disabled:transform-none disabled:scale-100 flex items-center justify-center relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {isSubmitting ? (
                  <span className="relative">Sending...</span>
                ) : (
                  <>
                    <span className="relative">Send Message</span>
                    <Send size={18} className="relative ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;