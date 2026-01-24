import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const About = () => {
  const approach = [
    {
      title: 'Selective Engagement',
      description: 'We work with a limited number of families. This is by design. The depth of relationship required for effective long-term work cannot be maintained at scale.',
    },
    {
      title: 'Long-Term Alignment',
      description: 'Our interests are aligned with multi-generational outcomes, not short-term metrics. We measure success in decades, not quarters.',
    },
    {
      title: 'Independence',
      description: 'We maintain complete independence from financial product providers. Our recommendations are unencumbered by conflicts of interest.',
    },
    {
      title: 'Discretion',
      description: 'Privacy is foundational to our practice. We do not publicize client relationships or seek visibility for the work we do.',
    },
  ];

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
              About
            </h1>
            <p className="text-lg md:text-xl text-atlas-dark/70 font-light max-w-3xl">
              A platform built on conviction, designed for permanence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Platform Section */}
      <section className="py-16 md:py-2">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl font-serif font-light mb-10 text-atlas-dark">
              THE PLATFORM
            </h2>
            
            <div className="space-y-5">
              <p className="text-base md:text-2xl leading-relaxed text-atlas-dark/60">
                ATLAS is not a wealth management firm in the conventional sense. It is a platform: a structure designed to support the long-term stewardship of significant capital.
              </p>
              <p className="text-base md:text-2xl leading-relaxed text-atlas-dark/60">
                We do not sell financial products. We do not manage assets in the traditional sense. We do not seek to maximize assets under management or client count. Our model is fundamentally different because our objectives are fundamentally different.
              </p>
              <p className="text-base md:text-2xl leading-relaxed text-atlas-dark/60">
                ATLAS exists to provide structure, governance, and clarity to individuals and families who have already achieved significant wealth. Our role is to help them preserve and transfer that wealth across generations—not through aggressive strategies or speculative investments, but through careful architecture and disciplined stewardship.
              </p>
              <p className="text-base md:text-2xl leading-relaxed text-atlas-dark/60">
                The platform brings together expertise in capital structure, family governance, intergenerational planning, and strategic advisory. Each engagement is tailored to the specific circumstances, objectives, and values of the families we serve.
              </p>
            </div>

            <div className="mt-10 pt-10 border-t border-atlas-dark/10">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-atlas-dark/50 hover:text-atlas-dark transition-colors duration-300 group"
              >
                TALK TO AN EXPERT
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
              <p><br></br></p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 md:py-24 bg-[#ebe7e0]">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl font-serif font-light mb-12 text-atlas-dark">
              OUR APPROACH
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {approach.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="text-2xl font-serif font-normal mb-4 text-atlas-dark">
                    {item.title}
                  </h3>
                  <p className="text-xl leading-relaxed text-atlas-dark/60">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 pt-10 border-t border-atlas-dark/10">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-atlas-dark/50 hover:text-atlas-dark transition-colors duration-300 group"
              >
                TALK TO AN EXPERT
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl font-serif font-light mb-12 text-atlas-dark">
              LEADERSHIP
            </h2>

            <div className="flex items-start gap-6 md:gap-8 mb-8">
              {/* Avatar placeholder */}
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-atlas-dark flex items-center justify-center text-atlas-primary font-serif text-lg">
                GM
              </div>

              <div className="flex-1">
                <h3 className="text-3xl font-serif font-light mb-2 text-atlas-dark">
                  Gonzalo Martinez
                </h3>
                <p className="text-xs tracking-wider uppercase text-atlas-dark/50 mb-6">
                  Managing Partner
                </p>
                
                <div className="space-y-4 text-lg leading-relaxed text-atlas-dark/60">
                  <p>
                    Gonzalo Martinez founded ATLAS to address a gap he observed in how significant wealth is managed and transferred across generations. After two decades working with ultra-high-net-worth families across the Americas and Europe, he recognized that the industry's incentives were misaligned with the long-term interests of the families it served.
                  </p>
                  <p>
                    ATLAS represents his vision for a different approach: one focused on structure over speculation, governance over transactions, and multi-generational thinking over quarterly performance.
                  </p>
                  <p>
                    Based in Miami, Gonzalo works directly with a small number of families worldwide. His approach is characterized by depth over breadth, patience over activity, and discretion over visibility.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Headquarters Section */}
      <section className="py-16 md:py-26 border-t border-atlas-primary/10 bg-[#0a1624]">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-xl tracking-[0.3em] uppercase text-atlas-primary/50 mb-4">
              HEADQUARTERS
            </h3>
            <p className="text-2xl md:text-3xl font-serif font-light text-atlas-primary mb-3">
              Miami
            </p>
            <p className="text-lg text-atlas-primary/70 mb-12">
              Serving families globally
            </p>
            
            <a
              href="#contact"
              className="inline-flex items-center gap-3 border border-atlas-primary text-white px-10 py-4 text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:bg-atlas-primary hover:text-atlas-dark group"
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

export default About;
