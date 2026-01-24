import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ArticleLetterJanuary2024 = () => {
  return (
    <div className="min-h-screen bg-atlas-primary">
      <Navigation />

      {/* Back to Insights */}
      <section className="pt-32 pb-8">
        <div className="container-custom max-w-4xl">
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 text-xs tracking-wider uppercase text-atlas-dark/60 hover:text-atlas-gold transition-colors duration-300"
          >
            <span>←</span>
            BACK TO INSIGHTS
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <section className="pb-12">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs tracking-widest text-atlas-dark/50 mb-6">
              LETTERS & NOTES · JANUARY 2024
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light mb-8 text-atlas-dark leading-tight">
              A Letter to Clients: On Patience and Perspective
            </h1>
            <p className="text-lg md:text-xl text-atlas-dark/70 font-light leading-relaxed">
              Reflecting on the role of discipline and long-term thinking in periods of market uncertainty and broader economic transition.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py">
        <div className="container-custom max-w-3xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <div className="space-y-8 text-atlas-dark/80 leading-relaxed">
              <p className="text-lg italic">
                To our clients and partners,
              </p>

              <p className="text-lg">
                As we enter a new year, it seems appropriate to reflect on the nature of the work we do together.
              </p>

              <p className="text-lg">
                The past year brought no shortage of market movements, economic headlines, and reasons for concern or optimism depending on one's perspective. Throughout these fluctuations, we remained focused on the principles that guide our approach: structure, discipline, and long-term clarity.
              </p>

              <p className="text-lg">
                We do not attempt to predict short-term market movements. We do not adjust portfolios based on headlines. We do not confuse activity with progress.
              </p>

              <p className="text-lg">
                This restraint is not passive—it is intentional. It reflects our conviction that the greatest threat to long-term wealth is not market volatility, but the behavioral responses it provokes. Panic selling, performance chasing, and constant repositioning are far more destructive to wealth than any market decline.
              </p>

              <p className="text-lg">
                Our role is to provide the structure and perspective that makes disciplined behavior possible. When markets fall, we remind clients that this is expected and planned for. When markets rise, we counsel against complacency. In all conditions, we focus on the decades ahead rather than the quarters behind.
              </p>

              <p className="text-lg">
                The families we serve share this orientation. They understand that wealth preservation is a multi-generational endeavor. They value stability over excitement. They recognize that the best decisions are often the ones not made.
              </p>

              <p className="text-lg">
                As we look ahead, we remain committed to this approach. We will continue to prioritize structure over speculation, governance over reaction, and clarity over noise.
              </p>

              <p className="text-lg">
                We are grateful for your continued trust.
              </p>

              <p className="text-lg font-light">
                Gonzalo Martinez<br />
                Managing Partner, ATLAS
              </p>
              <p><br></br></p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Continue Reading Section */}
      <section className="py-20 bg-[#ebe7e0]">
        <div className="container-custom max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-sm tracking-wider uppercase text-atlas-dark/50 mb-6">
              CONTINUE READING
            </p>
            <Link
              to="/insights"
              className="inline-flex items-center gap-3 border border-atlas-dark px-8 py-4 text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:bg-atlas-dark hover:text-atlas-primary group"
            >
              Explore more perspectives
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ArticleLetterJanuary2024;
