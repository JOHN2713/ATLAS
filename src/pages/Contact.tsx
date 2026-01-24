import { motion } from 'framer-motion';
import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-atlas-primary">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container-custom max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light mb-8 text-atlas-dark">
              Contact
            </h1>
            <p className="text-lg md:text-xl text-atlas-dark/70 font-light max-w-3xl">
              Engagements begin with a conversation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form and Contact Info Grid */}
      <section className="py-16 md:py-2">
        <div className="container-custom max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Form Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl md:text-3xl font-serif font-light mb-8 text-atlas-dark">
                PRIVATE INQUIRY
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs tracking-wider uppercase text-atlas-dark/50 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-3 bg-transparent border-b border-atlas-dark/20 focus:border-atlas-dark outline-none text-atlas-dark transition-colors duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs tracking-wider uppercase text-atlas-dark/50 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-3 bg-transparent border-b border-atlas-dark/20 focus:border-atlas-dark outline-none text-atlas-dark transition-colors duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs tracking-wider uppercase text-atlas-dark/50 mb-2">
                    Brief Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-0 py-3 bg-transparent border-b border-atlas-dark/20 focus:border-atlas-dark outline-none text-atlas-dark resize-none transition-colors duration-300"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-3 border border-atlas-dark px-10 py-4 text-x tracking-[0.2em] uppercase transition-all duration-300 hover:bg-atlas-dark hover:text-atlas-primary group"
                >
                  SUBMIT INQUIRY
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </button>
              </form>
            </motion.div>

            {/* Contact Info Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-2xl md:text-3xl font-serif font-light mb-8 text-atlas-dark">
                DIRECT CONTACT
              </h2>

              <div className="space-y-8">
                {/* Email */}
                <div>
                  <p className="text-xs tracking-wider uppercase text-atlas-dark/50 mb-2">
                    Email
                  </p>
                  <a
                    href="mailto:contact@atlaswealth.com"
                    className="text-base text-atlas-dark hover:text-atlas-gold transition-colors duration-300"
                  >
                    contact@atlaswealth.com
                  </a>
                </div>

                {/* Location */}
                <div>
                  <p className="text-xs tracking-wider uppercase text-atlas-dark/50 mb-2">
                    Location
                  </p>
                  <p className="text-base text-atlas-dark">
                    Miami
                  </p>
                </div>

                {/* Additional Info */}
                <div className="pt-8 border-t border-atlas-dark/10 space-y-4 text-xl leading-relaxed text-atlas-dark/60">
                  <p>
                    All inquiries are reviewed personally and handled with complete discretion. We respond to serious inquiries within a reasonable timeframe.
                  </p>
                  <p>
                    Please note that ATLAS works with a limited number of families. Not all inquiries will result in an engagement, but all will receive a thoughtful response.
                  </p>
                  <p><br></br></p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-20 md:py-32 bg-[#0a1624]">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-xl md:text-2xl font-serif font-light text-white/90">
              We do not seek volume. We seek alignment.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
