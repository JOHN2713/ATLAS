import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-atlas-dark text-atlas-primary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Title with icon */}
          <div className="flex items-center justify-center gap-3 mb-16">
            <svg className="w-5 h-5 text-atlas-primary/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            <h2 className="text-xs tracking-[0.3em] uppercase text-atlas-primary/80">
              BEGIN A CONVERSATION
            </h2>
          </div>
          
          {/* Main text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl font-serif font-light mb-12 text-atlas-primary leading-relaxed"
          >
            Engagements begin with a conversation.
          </motion.p>

          {/* Secondary text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-base text-atlas-primary/70 mb-16"
          >
            All inquiries are reviewed with discretion.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <a
              href="mailto:contact@atlas.com"
              className="inline-flex items-center gap-3 border border-atlas-primary/70 px-10 py-4 text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:bg-atlas-primary hover:text-atlas-dark group"
            >
              REQUEST A PRIVATE CONVERSATION
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
