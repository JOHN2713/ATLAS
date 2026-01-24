import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ArticleGovernanceAndClarity = () => {
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
              FINANCIAL PERSPECTIVES · NOVEMBER 2024
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light mb-8 text-atlas-dark leading-tight">
              Governance and Clarity in Family Wealth
            </h1>
            <p className="text-lg md:text-xl text-atlas-dark/70 font-light leading-relaxed">
              Without clear governance structures, even the most substantial wealth tends to dissipate within three generations. The solution lies not in legal documents alone.
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
                The statistical reality is sobering: approximately 70% of wealthy families lose their wealth by the second generation, and 90% by the third. This pattern has repeated across cultures, centuries, and economic systems.
              </p>

              <p className="text-lg">
                The explanation is not primarily about investment returns or tax planning. It is about governance—or rather, the lack of it.
              </p>

              <p className="text-lg">
                Governance in the context of family wealth encompasses the structures, processes, and agreements that guide decision-making. It answers questions that legal documents alone cannot: Who has authority over what decisions? How are disagreements resolved? What values guide the family's approach to wealth?
              </p>

              <p className="text-lg">
                Many families resist formalizing governance because it feels corporate or impersonal. They prefer to rely on informal understandings and trust. This works until it doesn't—typically when the founding generation passes, when family members disagree, or when external pressures expose the absence of clear processes.
              </p>

              <p className="text-lg">
                Effective governance does not require complex bureaucracy. It requires clarity. Clarity about roles and responsibilities. Clarity about decision-making authority. Clarity about the purpose wealth serves for the family.
              </p>

              <p className="text-lg">
                At ATLAS, we help families develop governance frameworks appropriate to their size, complexity, and values. We believe that the investment in governance yields returns that far exceed any financial strategy—because it addresses the root cause of wealth dissipation.
              </p>

              <p className="text-lg">
                The families that preserve wealth across generations share certain characteristics. They communicate openly about money. They prepare heirs deliberately. They have clear processes for making decisions together. They understand that wealth preservation is ultimately a human challenge, not a financial one.
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

export default ArticleGovernanceAndClarity;
