import { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Menu, 
  X, 
  Instagram, 
  Scissors,
  MapPin,
  Clock,
  Phone,
  Star,
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

  const services = [
    { title: "Fades", price: "DOP 1,000", description: "Corte moderno con desvanecimiento preciso." },
    { title: "Corte Sencillo", price: "DOP 1,000", description: "Corte clásico para un look limpio." },
    { title: "High - Low Taper", price: "DOP 1,000", description: "Desvanecimiento en patillas y nuca." },
    { title: "Corte Completo + Facial", price: "DOP 1,300", description: "Corte premium con tratamiento facial." },
  ];

  const gallery = [
    { title: "Precisión en Fade", category: "Corte", image: "https://ais-dev-txgnivckm6lnbj3dpkd32b-560955552157.us-east1.run.app/api/files/input_file_0.png" },
    { title: "Nuestro Studio", category: "Interior", image: "https://ais-dev-txgnivckm6lnbj3dpkd32b-560955552157.us-east1.run.app/api/files/input_file_1.png" },
    { title: "Arte en el Cabello", category: "Diseño", image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=800" },
    { title: "Herramientas Pro", category: "Equipo", image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800" },
    { title: "Estilo Clásico", category: "Barbería", image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=800" },
    { title: "Detalle Perfecto", category: "Fade", image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&q=80&w=800" },
  ];

  return (
    <div className="min-h-screen selection:bg-[#00f2ff] selection:text-black bg-[#030712] text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#030712]/80 backdrop-blur-md py-4 border-b border-[#00f2ff]/20' : 'py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative">
              <span className="font-serif italic text-3xl tracking-tighter neon-text">Micky Cutz</span>
              <span className="block text-[10px] font-bold tracking-[0.4em] uppercase text-[#00f2ff] -mt-1">Studio</span>
              <Scissors className="absolute -right-6 top-1 text-[#00f2ff] rotate-45 group-hover:rotate-90 transition-transform duration-500" size={20} />
            </div>
          </a>
          
          <div className="hidden md:flex gap-12 items-center">
            {['Servicios', 'Galería', 'Contacto'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-semibold uppercase tracking-widest hover:text-[#00f2ff] transition-colors relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00f2ff] transition-all group-hover:w-full" />
              </a>
            ))}
            <a 
              href="https://www.fresha.com/book-now/mickycutz-studio-n7xdhfou/services?lid=2838671&share=true&pId=2744775"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#00f2ff] text-black px-8 py-3 rounded-full text-sm font-bold hover:shadow-[0_0_20px_rgba(0,242,255,0.6)] transition-all transform hover:-translate-y-1"
            >
              RESERVAR AHORA
            </a>
          </div>

          <button className="md:hidden text-[#00f2ff]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 bg-[#030712] flex flex-col items-center justify-center gap-8 md:hidden transition-all duration-500 ${isMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-10 pointer-events-none'}`}>
        {['Servicios', 'Galería', 'Contacto'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="font-display text-5xl uppercase tracking-tighter hover:text-[#00f2ff] transition-colors">
            {item}
          </a>
        ))}
        <a 
          href="https://www.fresha.com/book-now/mickycutz-studio-n7xdhfou/services?lid=2838671&share=true&pId=2744775"
          className="mt-8 bg-[#00f2ff] text-black px-10 py-4 rounded-full font-bold"
        >
          RESERVAR
        </a>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center px-6 pt-20 relative overflow-hidden">
        {/* 3D Background Grid */}
        <div className="absolute inset-0 -z-10 opacity-20" style={{ 
          backgroundImage: 'linear-gradient(#00f2ff 1px, transparent 1px), linear-gradient(90deg, #00f2ff 1px, transparent 1px)',
          backgroundSize: '100px 100px',
          transform: 'perspective(500px) rotateX(60deg) translateY(-100px)',
          transformOrigin: 'top'
        }} />

        <div className="max-w-7xl mx-auto w-full relative">
          <div className="mb-6 flex items-center gap-4">
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-[#00f2ff] neon-text">Premium Barber Experience</span>
            <div className="flex items-center gap-1 text-yellow-400">
              {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
              <span className="text-xs text-white/60 ml-2">5.0 (32 Votos)</span>
            </div>
          </div>
          
          <h1 className="font-display text-[12vw] md:text-[10vw] leading-[0.8] uppercase tracking-tighter skew-title animate-slam neon-text">
            MickyCutz <br />
            <span className="text-transparent border-text">Studio</span>
          </h1>
          
          <div className="mt-12 flex flex-col md:flex-row md:items-end justify-between gap-12">
            <p className="max-w-xl text-xl text-white/70 leading-relaxed font-light">
              Elevando el arte de la barbería en Santo Domingo. Estilo, precisión y una atmósfera neón única diseñada para el hombre moderno.
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 text-white/60">
                <MapPin size={20} className="text-[#00f2ff]" />
                <span className="text-sm uppercase tracking-widest">Cacique, Santo Domingo, RD</span>
              </div>
              <a href="#servicios" className="w-16 h-16 rounded-full border border-[#00f2ff]/30 flex items-center justify-center animate-bounce hover:bg-[#00f2ff]/10 transition-colors">
                <ChevronDown size={24} className="text-[#00f2ff]" />
              </a>
            </div>
          </div>
        </div>

        {/* Floating 3D Elements */}
        <div className="absolute right-10 top-1/4 w-32 h-32 border border-[#00f2ff]/20 rounded-xl floating-3d -z-10" style={{ animationDelay: '1s' }} />
        <div className="absolute left-1/4 bottom-20 w-20 h-20 border border-[#00f2ff]/30 rounded-full floating-3d -z-10" />
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <h2 className="font-display text-7xl uppercase tracking-tighter neon-text">Nuestros <br /> Servicios</h2>
            <p className="text-white/50 max-w-xs text-right uppercase tracking-widest text-xs leading-loose">
              Calidad garantizada en cada corte. Utilizamos las mejores técnicas y productos del mercado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <div key={i} className="perspective-container">
                <div className="card-3d bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-[#00f2ff]/50 transition-all group relative overflow-hidden">
                  <div className="led-strip opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Scissors className="text-[#00f2ff] mb-6 group-hover:scale-110 transition-transform" size={32} />
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-white/50 text-sm mb-6 leading-relaxed">{service.description}</p>
                  <div className="text-[#00f2ff] font-display text-2xl">{service.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galería" className="py-32 px-6 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-20">
            <h2 className="font-display text-7xl uppercase tracking-tighter neon-text">Galería</h2>
            <p className="hidden md:block text-white/40 max-w-xs text-right uppercase tracking-widest text-xs">
              Echa un vistazo a nuestro trabajo y a las instalaciones de nuestro estudio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gallery.map((item, i) => (
              <div 
                key={i}
                className="group cursor-pointer perspective-container"
              >
                <div className="card-3d overflow-hidden rounded-2xl aspect-[4/5] bg-white/5 border border-white/10 relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.5] group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-0 left-0 p-8 transform translate-z-20">
                    <p className="text-[#00f2ff] text-xs font-bold uppercase tracking-[0.3em] mb-2">{item.category}</p>
                    <h3 className="font-display text-3xl uppercase tracking-tight">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden neon-border p-1">
              <div className="w-full h-full rounded-[22px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                <img 
                  src="https://ais-dev-txgnivckm6lnbj3dpkd32b-560955552157.us-east1.run.app/api/files/input_file_1.png" 
                  alt="MickyCutz Studio Interior" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-10 -right-10 bg-[#00f2ff] text-black p-8 rounded-2xl shadow-[0_0_30px_rgba(0,242,255,0.4)] floating-3d">
              <p className="font-display text-4xl leading-none">5.0</p>
              <p className="text-[10px] font-bold uppercase tracking-widest mt-2">Rating Fresha</p>
            </div>
          </div>
          
          <div>
            <h2 className="font-display text-7xl uppercase tracking-tighter leading-none mb-12 neon-text">
              Más que un <br />
              simple corte
            </h2>
            <p className="text-xl text-white/60 leading-relaxed font-light mb-12">
              En MickyCutz Studio, nos enfocamos en los detalles. Cada cliente recibe una atención personalizada en un ambiente diseñado para la comodidad y el estilo.
            </p>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <Clock className="text-[#00f2ff] shrink-0" size={24} />
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-sm mb-2">Horario</h4>
                  <p className="text-white/50 text-sm">Lun - Sáb: 9:00 AM - 8:00 PM <br /> Dom: Cerrado</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <Phone className="text-[#00f2ff] shrink-0" size={24} />
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-sm mb-2">Contacto</h4>
                  <p className="text-white/50 text-sm">+1 809 123 4567 <br /> citas@mickycutz.studio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="py-32 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-32">
            <div>
              <h2 className="font-display text-8xl uppercase tracking-tighter leading-none mb-12 neon-text">
                Reserva <br /> Tu Cita
              </h2>
              <a 
                href="https://www.fresha.com/book-now/mickycutz-studio-n7xdhfou/services?lid=2838671&share=true&pId=2744775" 
                target="_blank"
                className="text-3xl md:text-5xl font-light hover:text-[#00f2ff] transition-colors underline underline-offset-8"
              >
                Agendar en Fresha
              </a>
            </div>
            <div className="flex flex-col justify-between">
              <div className="space-y-4">
                <p className="text-white/40 uppercase tracking-widest text-sm">Síguenos</p>
                <div className="flex gap-6">
                  <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-[#00f2ff] hover:text-[#00f2ff] transition-all">
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
              <div className="mt-20 md:mt-0">
                <p className="text-white/40 uppercase tracking-widest text-sm mb-4">Ubicación</p>
                <p className="text-xl font-light">Bloque 11, Cacique <br /> Santo Domingo <br /> República Dominicana</p>
              </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-white/30 text-xs uppercase tracking-widest">© 2026 MickyCutz Studio. Todos los derechos reservados.</p>
            <div className="flex gap-12 text-xs uppercase tracking-widest text-white/30">
              <a href="#" className="hover:text-white transition-colors">Privacidad</a>
              <a href="#" className="hover:text-white transition-colors">Términos</a>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        .border-text {
          -webkit-text-stroke: 1px #00f2ff;
        }
        @keyframes slamIn {
          from { opacity: 0; transform: scale(2) translateY(-100px) skewX(-10deg); }
          to { opacity: 1; transform: scale(1) translateY(0) skewX(-10deg); }
        }
        .animate-slam {
          animation: slamIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
}
