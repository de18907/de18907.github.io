import { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Menu, 
  X, 
  Instagram, 
  Twitter, 
  Linkedin, 
  ExternalLink,
  ChevronDown
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    { title: "AURA", category: "Branding", image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800" },
    { title: "NEON", category: "Digital Design", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800" },
    { title: "KINETIC", category: "Motion", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800" },
    { title: "FLUX", category: "UI/UX", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800" },
  ];

  return (
    <div className="min-h-screen selection:bg-orange-500 selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-md py-4' : 'py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="font-display text-2xl tracking-tighter uppercase">Studio.</a>
          
          <div className="hidden md:flex gap-12 items-center">
            {['Work', 'Studio', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-semibold uppercase tracking-widest hover:text-orange-500 transition-colors">
                {item}
              </a>
            ))}
            <button className="bg-black text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-orange-600 transition-all">
              Let's Talk
            </button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8 md:hidden transition-all duration-500 ${isMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-10 pointer-events-none'}`}>
        {['Work', 'Studio', 'Contact'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="font-display text-5xl uppercase tracking-tighter hover:text-orange-500 transition-colors">
            {item}
          </a>
        ))}
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center px-6 pt-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <div className="mb-4">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-orange-500">Creative Agency</span>
          </div>
          <h1 className="font-display text-[15vw] md:text-[12vw] leading-[0.85] uppercase tracking-tighter skew-title animate-slam">
            Crafting <br />
            Digital <br />
            <span className="text-transparent border-text">Emotion</span>
          </h1>
          
          <div className="mt-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <p className="max-w-md text-xl text-gray-600 leading-relaxed font-light">
              We are a boutique studio specializing in high-end digital experiences that bridge the gap between art and technology.
            </p>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full border border-black flex items-center justify-center animate-bounce">
                <ChevronDown size={20} />
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -right-20 top-1/4 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl -z-10" />
        <div className="absolute -left-20 bottom-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -z-10" />
      </section>

      {/* Work Section */}
      <section id="work" className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-20">
            <h2 className="font-display text-6xl uppercase tracking-tighter">Selected <br /> Works</h2>
            <p className="hidden md:block text-gray-500 max-w-xs text-right">A curated selection of our most impactful projects from the last year.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            {projects.map((project, i) => (
              <div 
                key={project.title}
                className={`group cursor-pointer opacity-0 translate-y-10 transition-all duration-700 delay-[${i * 100}ms] ${i % 2 !== 0 ? 'md:mt-32' : ''}`}
                style={{ animation: 'fadeUp 0.8s forwards', animationDelay: `${i * 0.1}s` }}
              >
                <div className="overflow-hidden rounded-2xl aspect-[4/5] bg-gray-100">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="mt-8 flex justify-between items-start">
                  <div>
                    <h3 className="font-display text-3xl uppercase tracking-tight">{project.title}</h3>
                    <p className="text-gray-500 text-sm mt-1 uppercase tracking-widest">{project.category}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                    <ArrowRight size={18} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Section */}
      <section id="studio" className="py-32 px-6 bg-black text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="font-display text-7xl uppercase tracking-tighter leading-none mb-12">
              We build <br />
              the future <br />
              of web
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed font-light mb-12">
              Our studio is a playground for innovation. We don't just follow trends; we define them through meticulous design and cutting-edge engineering.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-4xl font-display text-orange-500">12+</p>
                <p className="text-xs uppercase tracking-widest text-gray-500 mt-2">Awards Won</p>
              </div>
              <div>
                <p className="text-4xl font-display text-orange-500">150+</p>
                <p className="text-xs uppercase tracking-widest text-gray-500 mt-2">Projects Delivered</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000" 
                alt="Studio" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-32 px-6 bg-[#050505] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-32">
            <div>
              <h2 className="font-display text-8xl uppercase tracking-tighter leading-none mb-12">
                Start a <br /> Project
              </h2>
              <a href="mailto:hello@studio.com" className="text-3xl md:text-5xl font-light hover:text-orange-500 transition-colors underline underline-offset-8">
                hello@studio.com
              </a>
            </div>
            <div className="flex flex-col justify-between">
              <div className="space-y-4">
                <p className="text-gray-500 uppercase tracking-widest text-sm">Socials</p>
                <div className="flex gap-6">
                  <a href="#" className="hover:text-orange-500 transition-colors"><Instagram /></a>
                  <a href="#" className="hover:text-orange-500 transition-colors"><Twitter /></a>
                  <a href="#" className="hover:text-orange-500 transition-colors"><Linkedin /></a>
                </div>
              </div>
              <div className="mt-20 md:mt-0">
                <p className="text-gray-500 uppercase tracking-widest text-sm mb-4">Office</p>
                <p className="text-xl font-light">123 Design St. <br /> Creative District <br /> NY 10001</p>
              </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-gray-500 text-sm">© 2026 Creative Studio. All rights reserved.</p>
            <div className="flex gap-12 text-sm text-gray-500">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        .border-text {
          -webkit-text-stroke: 1px var(--ink);
        }
        @media (prefers-color-scheme: dark) {
          .border-text {
            -webkit-text-stroke: 1px white;
          }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
