import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ArticleStructureOverSpeculation = () => {
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
              FOUNDATIONAL ESSAYS · DECEMBER 2024
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light mb-8 text-atlas-dark leading-tight">
              Structure Over Speculation: A Framework for Long-Term Capital
            </h1>
            <p className="text-lg md:text-xl text-atlas-dark/70 font-light leading-relaxed">
              The distinction between building wealth and preserving it requires a fundamentally different orientation toward risk, time, and decision-making.
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
              <p className="text-lg">
                The financial industry has conflated two distinct activities: the creation of wealth and its preservation. These require fundamentally different orientations toward risk, time, and decision-making.
              </p>

              <p className="text-lg">
                Wealth creation often rewards speculation, leverage, and concentrated risk. It demands an appetite for volatility and the psychological fortitude to endure significant drawdowns. Many of the world's great fortunes were built through exactly this kind of calculated risk-taking.
              </p>

              <p className="text-lg">
                Wealth preservation demands the opposite. It requires structure over speculation, diversification over concentration, and patience over action. The objective shifts from maximizing returns to minimizing the probability of permanent capital impairment.
              </p>

              <p className="text-lg">
                At ATLAS, we work exclusively with those who have already achieved significant wealth. Our role is not to help them generate more through aggressive strategies, but to help them structure what they have built so that it endures.
              </p>

              <p className="text-lg">
                This distinction matters because the skills and temperament required for wealth creation often become liabilities in the preservation phase. The entrepreneur who built a business through bold, concentrated bets must learn to think differently about the capital that business generated.
              </p>

              <p className="text-lg">
                Structure provides the framework for this transition. It encompasses legal entities, governance processes, investment policies, and family agreements. It creates boundaries and guidelines that protect capital from both external threats and internal impulses.
              </p>

              <p className="text-lg">
                We believe that properly structured wealth has the best chance of surviving not just market cycles, but generational transitions. This is the work we do.
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

export default ArticleStructureOverSpeculation;
