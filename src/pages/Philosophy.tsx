import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Philosophy = () => {
  const principles = [
    {
      title: 'Structure Over Speculation',
      content: [
        'The financial industry rewards activity. It celebrates bold predictions, rapid trading, and constant repositioning. This approach may generate fees and excitement, but it rarely preserves wealth across generations.',
        'We believe in structure—the deliberate design of legal entities, governance frameworks, and investment policies that create clarity and protection. Structure does not guarantee returns. It guarantees process. And process, consistently applied, produces the outcomes that matter: stability, preservation, and peace of mind.',
        'When speculation fails, structure remains. When markets panic, structure provides anchor points. When generations change, structure transfers wisdom alongside wealth.',
      ],
    },
    {
      title: 'Discipline',
      content: [
        'Discipline is the practice of doing less, not more. It is the restraint to avoid action when action feels urgent. It is the patience to let decades unfold rather than reacting to quarters.',
        'The greatest threats to wealth are rarely external. They are internal: the impulse to chase performance, the fear that drives panic selling, the boredom that leads to unnecessary complexity. Discipline protects against these threats.',
        'We counsel restraint. We design portfolios that can be maintained. We create processes that reduce the opportunity for impulsive decisions. We believe that the best financial decisions are often the ones not made.',
      ],
    },
    {
      title: 'Governance',
      content: [
        'Wealth without governance is wealth without direction. It becomes a source of conflict rather than opportunity, a burden rather than a blessing.',
        'Governance answers the questions that legal documents cannot: Who decides? How are disagreements resolved? What values guide choices? What responsibilities accompany privilege?',
        'We help families establish governance frameworks appropriate to their circumstances. These frameworks provide clarity—not control. They create space for individual expression within shared boundaries. They transform wealth from a potential source of division into a foundation for shared purpose.',
      ],
    },
    {
      title: 'Long-Term Capital Thinking',
      content: [
        'Most financial advice operates on quarterly or annual time horizons. We operate on generational ones. This difference in timeframe changes everything: risk assessment, portfolio construction, family preparation, and the very definition of success.',
        'Long-term thinking requires accepting that we cannot predict the future. It requires building portfolios that can survive multiple economic regimes. It requires preparing heirs for responsibilities they may not assume for decades.',
        'We measure success not in annual returns, but in the successful transition of wealth and values across generations. This is the only measure that matters for families who think in centuries rather than cycles.',
      ],
    },
    {
      title: 'Intergenerational Responsibility',
      content: [
        'Each generation holds wealth in trust for those who follow. This understanding transforms the relationship with money from ownership to stewardship.',
        'Stewards think differently than owners. They prioritize preservation over consumption. They consider the needs of beneficiaries they may never meet. They accept constraints on their own discretion in service of longer-term objectives.',
        'We work with families to cultivate this stewardship orientation across generations. It requires education, communication, and the gradual transfer of both knowledge and responsibility. Done well, it creates families that grow stronger with wealth rather than being diminished by it.',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-atlas-primary">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container-custom max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light mb-8 text-atlas-dark">
              Philosophy
            </h1>
            <p className="text-lg md:text-xl text-atlas-dark/70 font-light max-w-3xl">
              The principles that guide our work and the convictions that shape our counsel.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Principles Sections */}
      <div className="pb-20">
        {principles.map((principle, index) => {
          const isSecondary = index === 1; // Discipline
          const isDark = index === 3; // Long-Term Capital Thinking
          
          return (
            <section 
              key={principle.title} 
              className={`py-16 md:py-24 ${
                isDark ? 'bg-[#0a1624]' : 
                isSecondary ? 'bg-[#ebe7e0]' : ''
              }`}
            >
              <div className="container-custom max-w-4xl">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <h2 className={`text-2xl md:text-3xl font-serif font-light mb-10 ${
                    isDark ? 'text-atlas-primary' : 'text-atlas-dark'
                  }`}>
                    {principle.title}
                  </h2>
                  
                  <div className="space-y-5">
                    {principle.content.map((paragraph, pIndex) => (
                      <p key={pIndex} className={`text-sm md:text-base leading-relaxed ${
                        isDark ? 'text-atlas-primary/80' : 'text-atlas-dark/60'
                      }`}>
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className={`mt-10 pt-10 border-t ${
                    isDark ? 'border-atlas-primary/20' : 'border-atlas-dark/10'
                  }`}>
                    <a
                      href="#contact"
                      className={`inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase transition-colors duration-300 group ${
                        isDark ? 'text-atlas-primary/60 hover:text-atlas-primary' : 'text-atlas-dark/50 hover:text-atlas-dark'
                      }`}
                    >
                      BEGIN A CONVERSATION
                      <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </a>
                  </div>
                </motion.div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Closing Statement */}
      <section className="py-20 md:py-32 border-t border-atlas-dark/10 bg-[#ebe7e0]">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-lg md:text-xl font-light text-atlas-dark/80 mb-12">
              These principles are not strategies. They are convictions. They guide every conversation, every recommendation, and every relationship we build.
            </p>
            
            <a
              href="#contact"
              className="inline-flex items-center gap-3 border border-atlas-dark px-10 py-4 text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:bg-atlas-dark hover:text-atlas-primary group"
            >
              DISCUSS OUR APPROACH
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Philosophy;
