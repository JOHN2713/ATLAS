import { motion } from 'framer-motion';

const WhoWeServe = () => {
  return (
    <section className="py-32 bg-atlas-secondary relative">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Title with icons */}
          <div className="flex items-center justify-center gap-4 mb-16">
            <svg className="w-5 h-5 text-atlas-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
            
            <h2 className="text-xs tracking-[0.3em] uppercase text-atlas-dark/70">
              WHO WE SERVE
            </h2>
            
            <svg className="w-5 h-5 text-atlas-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="5" y="11" width="14" height="10" rx="2" />
              <path d="M12 11V7a3 3 0 0 1 6 0v4M6 11V7a3 3 0 0 1 6 0v4" />
            </svg>
          </div>
          
          {/* Main text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-3xl lg:text-4xl font-serif font-light leading-relaxed mb-12 text-atlas-dark"
          >
            ATLAS works with a limited number of individuals and families worldwide.
          </motion.p>

          {/* Decorative separator */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="w-16 h-px bg-atlas-dark/20"></div>
            <svg className="w-2 h-2 text-atlas-gold" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L22 12L12 22L2 12Z" />
            </svg>
            <div className="w-16 h-px bg-atlas-dark/20"></div>
          </div>

          {/* Secondary text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-base md:text-lg text-atlas-dark/70"
          >
            Relationships are intentional. Capacity is finite.
          </motion.p>

          {/* Bottom line separator */}
          <div className="w-full h-px bg-atlas-dark/10 mt-16 mb-8" />

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-atlas-dark/60 hover:text-atlas-dark transition-colors duration-300 group"
            >
              TALK TO AN EXPERT
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeServe;
