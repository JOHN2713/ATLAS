import { Link } from 'react-router-dom';

const Footer = () => {
  const links = [
    { name: 'PHILOSOPHY', href: '/philosophy' },
    { name: 'INSIGHTS', href: '/insights' },
    { name: 'ABOUT', href: '/about' },
    { name: 'CONTACT', href: '/contact' },
  ];

  return (
    <footer className="bg-atlas-primary border-t border-atlas-dark/10 py-12">
      <div className="container-custom">
        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          {/* Logo and subtitle */}
          <div>
            <Link to="/" className="text-md tracking-[0.3em] font-light mb text-atlas-dark hover:text-atlas-gold transition-colors duration-300">
              ATLAS
            </Link>
            <div className="text-xs tracking-wide text-atlas-dark/60">
              Private Wealth & Legacy Office
            </div>
          </div>

          {/* Navigation links */}
          <nav className="flex flex-wrap gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-xs tracking-widest hover:text-atlas-gold transition-colors duration-300 text-atlas-dark/70"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom section */}
        <div className="border-t border-atlas-dark/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-atlas-dark/50">
            <p>© 2026 ATLAS. All rights reserved.</p>
            <p>Miami</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
