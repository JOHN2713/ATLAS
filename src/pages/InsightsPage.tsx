import { motion } from 'framer-motion';
import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const InsightsPage = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const insights = [
    {
      category: 'FOUNDATIONAL ESSAYS',
      date: 'DECEMBER 2024',
      title: 'Structure Over Speculation: A Framework for Long-Term Capital',
      excerpt: 'The distinction between building wealth and preserving it requires a fundamentally different orientation toward risk, time, and decision-making.',
      link: '/insights/structure-over-speculation',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      ),
    },
    {
      category: 'FINANCIAL PERSPECTIVES',
      date: 'NOVEMBER 2024',
      title: 'Governance and Clarity in Family Wealth',
      excerpt: 'Without clear governance structures, even the most substantial wealth tends to dissipate within three generations. The solution lies not in legal documents alone.',
      link: '/insights/governance-and-clarity',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
    },
    {
      category: 'LETTERS & NOTES',
      date: 'JANUARY 2024',
      title: 'A Letter to Clients: On Patience and Perspective',
      excerpt: 'Reflecting on the role of discipline and long-term thinking in periods of market uncertainty and broader economic transition.',
      link: '/insights/letter-january-2024',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
    },
  ];

  const filters = [
    'ALL',
    'FOUNDATIONAL ESSAYS',
    'FINANCIAL PERSPECTIVES',
    'LETTERS & NOTES'
  ];

  const filteredInsights = activeFilter === 'ALL' 
    ? insights 
    : insights.filter(insight => insight.category === activeFilter);

  return (
    <div className="min-h-screen bg-atlas-primary">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container-custom max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light mb-8 text-atlas-dark">
              Insights
            </h1>
            <p className="text-lg md:text-xl text-atlas-dark/70 font-light max-w-3xl">
              Perspectives on wealth, governance, and the long-term stewardship of capital.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="pb-12">
        <div className="container-custom max-w-6xl">
          <div className="flex flex-wrap gap-4 md:gap-8">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`text-xs tracking-widest uppercase transition-colors duration-300 pb-2 border-b-2 ${
                  activeFilter === filter
                    ? 'border-atlas-dark text-atlas-dark'
                    : 'border-transparent text-atlas-dark/40 hover:text-atlas-dark/70'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="pb-24">
        <div className="container-custom max-w-6xl">
          <div className="space-y-12 md:space-y-16">
            {filteredInsights.map((insight, index) => (
              <motion.article
                key={insight.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="flex gap-6 md:gap-8">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-12 h-12 border border-atlas-dark/20 flex items-center justify-center text-atlas-dark/40 group-hover:border-atlas-gold group-hover:text-atlas-gold transition-all duration-300">
                    {insight.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    {/* Category and date */}
                    <div className="text-xs tracking-widest text-atlas-dark/50 mb-4">
                      {insight.category} · {insight.date}
                    </div>

                    {/* Title */}
                    <a href={insight.link}>
                      <h3 className="text-2xl md:text-3xl font-serif font-light mb-4 tracking-wide text-atlas-dark group-hover:text-atlas-gold transition-colors duration-300 cursor-pointer">
                        {insight.title}
                      </h3>
                    </a>

                    {/* Excerpt */}
                    <p className="text-sm md:text-base leading-relaxed text-atlas-dark/60 mb-4">
                      {insight.excerpt}
                    </p>

                    {/* Read more link */}
                    <a
                      href={insight.link}
                      className="inline-flex items-center gap-2 text-xs tracking-wider text-atlas-dark/60 group-hover:text-atlas-gold transition-colors duration-300 group/link"
                    >
                      Read article
                      <span className="group-hover/link:translate-x-1 transition-transform duration-300">→</span>
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 border-t border-atlas-dark/10">
        <div className="container-custom max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <a
              href="/contact"
              className="inline-flex items-center gap-3 border border-atlas-dark px-10 py-4 text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:bg-atlas-dark hover:text-atlas-primary group"
            >
              TALK TO AN EXPERT
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InsightsPage;
