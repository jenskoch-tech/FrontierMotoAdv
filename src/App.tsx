import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mountain, 
  Calendar, 
  Map as MapIcon, 
  Users, 
  ChevronRight, 
  Tent, 
  ShieldAlert, 
  Info,
  Menu,
  X,
  Mail,
  Compass,
  Route
} from 'lucide-react';
import rideData from './data.json';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-brand-dark selection:bg-brand-orange selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-brand-dark/95 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="relative">
              <Mountain className="w-8 h-8 text-white" strokeWidth={1.5} />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-brand-orange rounded-full border-2 border-brand-dark"></div>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-lg font-bold tracking-tighter uppercase">Frontier</span>
              <span className="text-[10px] tracking-[0.2em] text-brand-orange font-semibold uppercase">Moto Adventure</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
            <button onClick={() => scrollToSection('current-ride')} className="nav-link">Current Ride</button>
            <button onClick={() => scrollToSection('how-it-works')} className="nav-link">Concept</button>
            <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
            <button onClick={() => scrollToSection('contact')} className="btn-primary py-2 px-6">Join</button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-brand-charcoal border-t border-white/10 p-6 flex flex-col gap-6 md:hidden shadow-2xl"
            >
              <button onClick={() => scrollToSection('home')} className="nav-link text-left">Home</button>
              <button onClick={() => scrollToSection('current-ride')} className="nav-link text-left">Current Ride</button>
              <button onClick={() => scrollToSection('how-it-works')} className="nav-link text-left">Concept</button>
              <button onClick={() => scrollToSection('about')} className="nav-link text-left">About</button>
              <button onClick={() => scrollToSection('contact')} className="btn-primary justify-center">Join</button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <header id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=2070" 
            alt="Adventure Motorcycle in Mountains" 
            className="w-full h-full object-cover scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/60 via-brand-dark/20 to-brand-dark"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-6 uppercase">
              Ride Beyond <br className="hidden md:block" />
              <span className="text-brand-orange">the Pavement</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-10 font-light tracking-wide">
              Self-guided adventure routes. Small groups. Real terrain.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button onClick={() => scrollToSection('current-ride')} className="btn-primary group">
                View the Route
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <div className="w-px h-12 bg-white"></div>
        </div>
      </header>

      {/* Intro Section */}
      <section className="bg-brand-dark py-24">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold tracking-[0.3em] text-brand-orange uppercase mb-4">The Concept</h2>
              <p className="text-3xl md:text-4xl font-medium leading-tight mb-8">
                This is not a tour company. This is a private invitation to ride.
              </p>
            </div>
            <div className="space-y-6 text-lg text-white/60 font-light leading-relaxed">
              <p>
                We don't do guided tours. We build routes, find the best tracks, and share them with a handful of capable riders who want to explore without the corporate fluff.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-medium text-white/80 uppercase tracking-wider">
                <li className="flex items-center gap-2"><Route className="w-4 h-4 text-brand-orange" /> Self-guided concept</li>
                <li className="flex items-center gap-2"><Users className="w-4 h-4 text-brand-orange" /> Max 3 riders</li>
                <li className="flex items-center gap-2"><Compass className="w-4 h-4 text-brand-orange" /> Shared GPX files</li>
                <li className="flex items-center gap-2"><Tent className="w-4 h-4 text-brand-orange" /> No guiding, no pressure</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Current Ride Section */}
      <section id="current-ride" className="relative bg-brand-paper text-brand-dark py-32 overflow-hidden">
        {/* Decorative torn paper edge top */}
        <div className="absolute top-0 left-0 w-full h-12 bg-brand-dark paper-edge-top"></div>
        
        <div className="section-container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-[0.3em] text-brand-orange uppercase mb-4">Current Ride</h2>
            <h3 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">{rideData.currentRide.title}</h3>
            <p className="text-xl text-brand-dark/60 italic">{rideData.currentRide.subtitle}</p>
          </div>

          <div className="bg-white shadow-2xl rounded-sm overflow-hidden border border-brand-dark/5">
            <div className="grid lg:grid-cols-2">
              <div className="h-80 lg:h-auto relative">
                <img 
                  src={rideData.currentRide.image} 
                  alt="Current Ride Route" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-dark/10"></div>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="grid grid-cols-2 gap-8 mb-12 border-b border-brand-dark/10 pb-12">
                  <div className="flex items-center gap-4">
                    <Calendar className="w-6 h-6 text-brand-orange" />
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-brand-dark/40 font-bold">Duration</p>
                      <p className="font-bold">{rideData.currentRide.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <MapIcon className="w-6 h-6 text-brand-orange" />
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-brand-dark/40 font-bold">Distance</p>
                      <p className="font-bold">{rideData.currentRide.distance}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mountain className="w-6 h-6 text-brand-orange" />
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-brand-dark/40 font-bold">Off-Road</p>
                      <p className="font-bold">{rideData.currentRide.offRoad}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Users className="w-6 h-6 text-brand-orange" />
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-brand-dark/40 font-bold">Group Size</p>
                      <p className="font-bold">{rideData.currentRide.groupSize}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h4 className="text-lg font-bold uppercase tracking-widest">The Route</h4>
                  <ul className="space-y-3">
                    {rideData.currentRide.description.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-brand-dark/70">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-2 shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-6">
                    <div className="inline-flex items-center gap-2 bg-brand-dark text-white px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-sm">
                      <ShieldAlert className="w-4 h-4 text-brand-orange" />
                      Difficulty: {rideData.currentRide.difficulty}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative torn paper edge bottom */}
        <div className="absolute bottom-0 left-0 w-full h-12 bg-brand-dark paper-edge-bottom"></div>
      </section>

      {/* Style of Travel */}
      <section className="bg-brand-dark py-24">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-sm font-bold tracking-[0.3em] text-brand-orange uppercase mb-6">Style of Travel</h2>
              <p className="text-2xl font-light text-white/80 leading-relaxed">
                We travel light, we ride hard, and we stay flexible. This isn't a vacation; it's an expedition.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="w-10 h-10 bg-brand-charcoal flex items-center justify-center rounded-sm">
                  <Tent className="w-5 h-5 text-brand-orange" />
                </div>
                <h4 className="font-bold uppercase tracking-widest text-sm">Wild Camping</h4>
                <p className="text-sm text-white/50 leading-relaxed">Preferred whenever possible. We find the quiet spots away from the crowds.</p>
              </div>
              <div className="space-y-4">
                <div className="w-10 h-10 bg-brand-charcoal flex items-center justify-center rounded-sm">
                  <MapIcon className="w-5 h-5 text-brand-orange" />
                </div>
                <h4 className="font-bold uppercase tracking-widest text-sm">Flexible Pace</h4>
                <p className="text-sm text-white/50 leading-relaxed">No fixed schedule. If we find a great track, we stay. If we need to push, we push.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="bg-brand-charcoal py-16">
        <div className="section-container py-0">
          <div className="bg-brand-dark border-l-4 border-brand-orange p-8 md:p-12">
            <div className="flex items-start gap-6">
              <ShieldAlert className="w-8 h-8 text-brand-orange shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold uppercase tracking-widest mb-4">Important Disclaimer</h3>
                <div className="grid md:grid-cols-2 gap-8 text-sm text-white/60 leading-relaxed">
                  <p>
                    This is a self-guided ride. Every rider is solely responsible for their own safety, decisions, and equipment. We share the route and the timeframe, but you are riding independently.
                  </p>
                  <p>
                    Frontier Moto Adventure is not a commercial guided tour operator. There are no guides, no support vehicles, and no medical staff. You must be self-sufficient.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-brand-dark py-32">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <Info className="w-12 h-12 text-brand-orange mx-auto mb-8 opacity-50" />
            <h2 className="text-sm font-bold tracking-[0.3em] text-brand-orange uppercase mb-6">About Us</h2>
            <p className="text-2xl md:text-3xl font-light leading-relaxed mb-12">
              "Building and riding off-road routes across Europe. Simple philosophy: find a good route, ride it properly, share it with a few solid people."
            </p>
            <div className="w-24 h-px bg-brand-orange mx-auto"></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=2074" 
            alt="Mountain Landscape" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-dark/80"></div>
        </div>

        <div className="section-container relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 uppercase">Join This Ride</h2>
          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto font-light">
            Interested in joining the next expedition? Send us your bike details, experience level, and availability.
          </p>
          <a href="mailto:expedition@frontiermoto.com?subject=Ride Inquiry" className="btn-primary py-4 px-12 text-base">
            <Mail className="w-5 h-5" />
            Contact
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-dark border-t border-white/5 py-12">
        <div className="section-container py-0 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <Mountain className="w-6 h-6 text-white/50" />
            <span className="text-xs tracking-[0.2em] text-white/30 font-bold uppercase">Frontier Moto Adventure</span>
          </div>
          <p className="text-[10px] text-white/30 uppercase tracking-widest">
            © {new Date().getFullYear()} Frontier Moto Adventure | Private Invitation Only
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/30 hover:text-white transition-colors"><Mail className="w-4 h-4" /></a>
            <a href="#" className="text-white/30 hover:text-white transition-colors"><MapIcon className="w-4 h-4" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
