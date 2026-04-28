/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { 
  Beef, 
  MapPin, 
  Phone, 
  Clock, 
  ChevronRight, 
  Instagram, 
  Facebook,
  Award,
  History
} from "lucide-react";
import { useRef, ReactNode } from "react";

const MENU_DATA = {
  traditionals: [
    { name: "Roast Turkey", desc: "LGM oven-roasted, light and moist" },
    { name: "Smoked Turkey", desc: "LGM maple sugar cured & hickory smoked" },
    { name: "Roast Beef", desc: "LGM marinated thin sliced tri-tip" },
    { name: "Smoked Ham", desc: "LGM maple sugar cured & hickory smoked" },
    { name: "Salami", desc: "Molinari dry salami, thin-sliced, stacked high" },
    { name: "Veggie Sandwich", desc: "The works with pickles and avocado" }
  ],
  signatures: [
    { name: "JJ Special", desc: "Slow smoked pulled pork, BBQ sauce" },
    { name: "Rollie", desc: "Marinated smoked tri tip, BBQ sauce" },
    { name: "BBQ Boo Brisket", desc: "Slow smoked Brisket, smoked cheddar cheese, BBQ sauce" },
    { name: "Slow Burn", desc: "Marinated smoked tri tip, spicy chipotle, honey mustard, smoked cheddar, sport peppers" },
    { name: "Pastrami", desc: "LGM cured eye of round, lean, thin sliced" },
    { name: "Corned Beef", desc: "LGM cured brisket, thin sliced" },
    { name: "Reuben", desc: "Thin sliced LGM pastrami, sauerkraut, thousand island, swiss on marbled rye" }
  ],
  superSignatures: [
    { name: "Chicken Club", desc: "Marinated BBQ chicken breast, swiss, LGM smoked bacon, BBQ sauce" },
    { name: "Jackie Special", desc: "LGM maple sugar cured smoked turkey, smoked cheddar, LGM bacon, avocado" },
    { name: "The Crazy Turkey", desc: "LGM oven roasted turkey, LGM bacon, avocado, provolone, jalapeños" },
    { name: "The A.J.", desc: "LGM cured smoked pastrami, LGM bacon, avocado, pepper jack" },
    { name: "Super Hero", desc: "Marinated tri-tip, cheddar, LGM bacon, avocado, BBQ sauce" }
  ],
  gutBusters: [
    { name: "The Triple Bypass", desc: "Marinated tri-tip, slow smoked pulled pork, LGM bacon, avocado, pepper jack" },
    { name: "Quad", desc: "Pastrami, pulled pork, tri tip, LGM bacon, avocado, pepper jack, spicy chipotle BBQ" }
  ]
};

const BREAD_CHOICES = ["Dutch Crunch", "Sourdough Roll", "Sourdough Sliced", "Sweet Roll w/ Sesame", "Whole Wheat Roll/Sliced", "Rye Swirl", "Ciabatta"];
const CHEESE_CHOICES = ["Monterey Jack", "American", "Cheddar", "Swiss", "Provolone", "Smoked Cheddar", "Pepper Jack"];

const SmokeOverlay = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30 mix-blend-screen z-20">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ x: -100, y: Math.random() * 100 + "%", opacity: 0, scale: 1 }}
          animate={{ 
            x: "120%", 
            opacity: [0, 0.4, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            delay: i * 3,
            ease: "linear"
          }}
          className="absolute w-96 h-96 bg-white blur-[120px] rounded-full"
        />
      ))}
    </div>
  );
};

export default function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
  const springOpacity = useSpring(opacity, { stiffness: 100, damping: 30 });

  return (
    <div className="min-h-screen bg-smoke-white selection:bg-brick selection:text-white" ref={containerRef}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-smoke-white/80 backdrop-blur-md border-b-4 border-forest border-double px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="bg-brick p-2 rounded-sm rotate-3 shadow-lg group">
            <Beef className="text-white w-6 h-6 group-hover:scale-110 transition-transform" />
          </div>
          <div>
            <span className="font-serif font-black text-2xl tracking-tighter uppercase text-forest block leading-none">Los Gatos</span>
            <span className="font-sans font-bold text-[10px] tracking-widest uppercase text-amber-wood">Meats & Smokehouse</span>
          </div>
        </div>
        
        <div className="hidden md:flex gap-8 items-center font-mono text-xs uppercase tracking-widest font-bold">
          <a href="#counter" className="hover:text-brick transition-colors">The Counter</a>
          <a href="#sandwiches" className="hover:text-brick transition-colors">Sandwiches</a>
          <a href="#processing" className="hover:text-brick transition-colors">Processing</a>
          <a 
            href="https://shop.losgatosmeats.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-forest text-white px-4 py-2 hover:bg-brick transition-all shadow-md active:scale-95 text-center"
          >
            Order Online
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden pt-20">
        <motion.div 
          style={{ opacity: springOpacity, scale }}
          className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1607623273573-74743f9a56b4?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center grayscale contrast-150 opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-smoke-white/20 to-smoke-white/80 z-0" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-8 bg-brick" />
              <span className="font-mono text-xs uppercase tracking-[0.4em] text-brick font-bold">Est. 1891 • San Jose's Pulse</span>
              <div className="h-px w-8 bg-brick" />
            </div>
            
            <h1 className="text-5xl md:text-9xl font-serif font-black text-forest leading-[1.1] md:leading-[0.9] mb-8">
              PROUDLY SERVING <br />
              <span className="relative inline-block px-2 md:px-4 mt-4 md:mt-2">
                <span className="relative z-10 bg-brick text-smoke-white italic px-3 py-1">SINCE 1891</span>
                <motion.span 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="absolute bottom-1 left-0 h-1/3 bg-amber-wood/30 -z-0"
                />
              </span>
            </h1>
            
            <p className="font-sans text-lg md:text-xl text-forest/80 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
              Specialty meats cut to order, house-made marinades, and the legendary Dutch Crunch sandwiches that feed the town.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://shop.losgatosmeats.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-forest text-white px-10 py-5 rounded-none font-bold uppercase tracking-[0.2em] hover:bg-brick transition-all flex items-center gap-2 group shadow-xl active:translate-y-1"
              >
                Order Online <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#sandwiches"
                className="bg-transparent border-2 border-forest text-forest px-10 py-5 rounded-none font-bold uppercase tracking-[0.2em] hover:bg-forest hover:text-white transition-all active:translate-y-1 text-center"
              >
                The Menu
              </a>
            </div>
          </motion.div>
        </div>

        <SmokeOverlay />
      </section>

      {/* Chronicle Feature */}
      <section className="bg-mahogany py-12 border-y-8 border-double border-smoke-white/10">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-amber-wood font-bold mb-4 block">As Featured In</span>
          <h3 className="text-3xl md:text-4xl font-serif text-white italic mb-2">"Top Sandwich Spots in the Bay Area"</h3>
          <p className="font-sans text-white/50 text-sm uppercase tracking-widest">— San Francisco Chronicle</p>
        </div>
      </section>

      {/* The Retail Counter */}
      <section id="counter" className="py-32 px-6 md:px-12 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
            <div className="max-w-xl">
              <h2 className="text-6xl md:text-7xl font-serif text-forest mb-8 leading-[0.9]">The Retail <br /><span className="italic text-amber-wood tracking-tight">Counter</span></h2>
              <p className="text-xl text-forest/70 font-sans leading-relaxed">
                Signature recipes prepared, cured, marinated, and smoked onsite. High-quality specialty cuts for the true meat enthusiast.
              </p>
            </div>
            <div className="bg-forest text-white p-10 flex flex-col sm:flex-row items-center gap-8 shadow-2xl relative overflow-hidden group border-l-[12px] border-brick">
              <div className="relative z-10 text-center sm:text-left">
                <span className="font-mono text-[11px] uppercase tracking-[0.3em] block mb-2 opacity-50 font-bold">Today's Bacon</span>
                <span className="text-4xl font-serif font-black italic meat-glow">Hickory Smoked</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <CounterCard title="Hickory Smoked Bacon" price="$14.99 / lb" img="https://images.unsplash.com/photo-1606851682841-dc921098679f?q=80&w=2574&auto=format&fit=crop" tag="House Signature" />
            <CounterCard title="Cottage Bacon" price="$12.99 / lb" img="https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=2670&auto=format&fit=crop" tag="Retail Meat" />
            <CounterCard title="Canadian Bacon" price="$16.99 / lb" img="https://images.unsplash.com/photo-1551133990-75424e6504cd?q=80&w=2670&auto=format&fit=crop" tag="Retail Meat" />
            <CounterCard title="Beef Bacon" price="$18.99 / lb" img="https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?q=80&w=2670&auto=format&fit=crop" tag="Specialty Cut" />
            <CounterCard title="Peppered Bacon" price="$15.99 / lb" img="https://images.unsplash.com/photo-1529854140021-158882b2da3b?q=80&w=2670&auto=format&fit=crop" tag="Sliced & Smoked" />
          </div>
        </div>
      </section>

      {/* The Full Sandwich Board */}
      <section id="sandwiches" className="py-32 bg-forest text-white relative">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-7xl md:text-8xl font-serif italic mb-6 meat-glow">The Smokehouse Board</h2>
            <p className="text-amber-wood font-mono text-xs uppercase tracking-[0.5em] mb-12">Every sandwich Includes "The Works" & a Pickle</p>
            <div className="flex flex-wrap justify-center gap-4 text-[10px] font-mono opacity-50 uppercase tracking-widest italic">
              <span>Mayo • Mustard • Lettuce • Tomato • Onion • Mild Pepper Rings</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-32">
            <div>
              <MenuCategory title="Smokehouse Traditionals" price="$15" items={MENU_DATA.traditionals} />
              <div className="mt-32">
                <MenuCategory title="Smokehouse Signatures" price="$16" items={MENU_DATA.signatures} />
              </div>
            </div>
            <div>
              <MenuCategory title="Super Signatures" price="$17" items={MENU_DATA.superSignatures} />
              <div className="mt-32">
                <MenuCategory title="Gut Busters" price="$18" items={MENU_DATA.gutBusters} />
              </div>
              
              {/* Choices & Add-ons */}
              <div className="mt-32 chalkboard p-10 shadow-2xl">
                <h4 className="font-serif text-3xl italic mb-8 pb-4 border-b border-white/10">Choices & Add-Ons</h4>
                <div className="space-y-8">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-amber-wood block mb-4">Bread Selections</span>
                    <div className="flex flex-wrap gap-2">
                      {BREAD_CHOICES.map(b => <span key={b} className="text-xs border border-white/20 px-3 py-1 hover:bg-white hover:text-forest transition-colors">{b}</span>)}
                    </div>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-amber-wood block mb-4">Cheese Selections</span>
                    <div className="flex flex-wrap gap-2">
                      {CHEESE_CHOICES.map(c => <span key={c} className="text-xs border border-white/20 px-3 py-1 hover:bg-white hover:text-forest transition-colors">{c}</span>)}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10 font-mono text-xs uppercase tracking-widest">
                    <div className="flex justify-between"><span>Extra Meat</span> <span className="text-amber-wood">$2.00</span></div>
                    <div className="flex justify-between"><span>Avocado</span> <span className="text-amber-wood">$2.00</span></div>
                    <div className="flex justify-between"><span>Double Meat</span> <span className="text-amber-wood">$4.00</span></div>
                    <div className="flex justify-between"><span>Bacon</span> <span className="text-amber-wood">$3.00</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Processing Services */}
      <section id="processing" className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        <div className="bg-smoke-white p-12 md:p-32 flex flex-col justify-center">
          <div className="max-w-lg">
            <Award className="text-brick mb-10" size={48} />
            <h2 className="text-6xl font-serif text-forest mb-10 leading-[0.9]">Custom Processing</h2>
            <p className="text-xl text-forest/70 mb-12 leading-relaxed">
              From wild game to specialty farm cuts, we treat, clean, and process your specialty meats with over a century of expertise.
            </p>
            <div className="space-y-6">
              <ProcessingItem title="Wild Game Processing" desc="Expert handling of deer, elk, and wild boar." />
              <ProcessingItem title="Fish Smoking" desc="Signature hickory smoke for your fresh catch." />
              <ProcessingItem title="Retail Cuts" desc="Custom portioning and vacuum sealing available." />
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden bg-forest flex items-center justify-center p-12">
           <img 
            src="https://images.unsplash.com/photo-1549464677-94d9346d1706?q=80&w=2670&auto=format&fit=crop" 
            alt="Butcher at Work" 
            className="absolute inset-0 w-full h-full object-cover grayscale brightness-50 opacity-60"
          />
          <div className="relative z-10 text-center max-w-sm">
             <div className="chalkboard p-12 shadow-2xl skew-x-1">
                <h4 className="text-3xl font-serif italic mb-6">Need a Gift?</h4>
                <p className="text-white/60 mb-8 font-sans">Share the legend of Los Gatos Meats with those you love.</p>
                <button className="w-full bg-amber-wood text-white py-4 font-mono font-bold uppercase tracking-widest hover:bg-brick transition-all">Order Gift Card</button>
             </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-mahogany text-smoke-white pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24 relative z-10">
          <div className="lg:col-span-2">
             <div className="flex items-center gap-4 mb-8">
              <div className="bg-brick p-2 rounded-sm rotate-3">
                <Beef className="text-white w-8 h-8" />
              </div>
              <h4 className="font-serif font-black text-3xl tracking-tighter uppercase">Los Gatos Meats</h4>
            </div>
            <p className="text-white/50 max-w-md leading-relaxed mb-10">
              High quality specialty meats, delicious deli sandwiches, and custom processing. Family owned and operated since 1991 in this town's historic soul.
            </p>
            <div className="flex gap-4">
              <SocialLink icon={<Instagram size={20} />} />
              <SocialLink icon={<Facebook size={20} />} />
            </div>
          </div>

          <div className="bg-white/5 p-8 border-l border-white/10">
            <h5 className="font-serif text-xl border-b border-white/10 pb-4 mb-6 italic text-amber-wood">Business Hours</h5>
            <div className="space-y-4 font-mono text-xs uppercase tracking-widest text-white/70">
              <div className="flex justify-between"><span>Mon - Sat</span> <span>10 am - 4 pm</span></div>
              <p className="opacity-40 italic mt-2 text-[10px]">Sandwich line closes at 3:45 pm</p>
              <div className="flex justify-between text-brick"><span>Sunday</span> <span>Closed</span></div>
            </div>
          </div>

          <div className="p-8">
            <h5 className="font-serif text-xl border-b border-white/10 pb-4 mb-6 italic">Connect</h5>
            <div className="space-y-4">
              <ContactItem icon={<MapPin size={18} />} text="575 University Avenue, Los Gatos, CA" />
              <ContactItem icon={<Phone size={18} />} text="408-354-7055" />
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-10 border-t border-white/5 text-[11px] font-mono uppercase tracking-[0.4em] opacity-30 text-center flex flex-col md:flex-row justify-between items-center gap-6">
          <span>© 1891-2024 Los Gatos Meats & Smokehouse</span>
          <span>Proudly Serving Since 1891</span>
          <span>Scrubbed Daily • Smoked Nightly</span>
        </div>
      </footer>
    </div>
  );
}

function MenuCategory({ title, price, items }: { title: string, price: string, items: any[] }) {
  return (
    <div className="relative">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline mb-12 relative z-10 gap-x-4">
        <h3 className="text-4xl md:text-5xl font-serif italic text-amber-wood leading-[0.85] whitespace-normal sm:whitespace-nowrap">{title}</h3>
        <div className="hidden sm:block flex-1 border-b border-dashed border-white/10 mb-2" />
        <span className="font-mono text-3xl font-black text-brick mt-2 sm:mt-0">{price}</span>
      </div>
      <div className="space-y-12">
        {items.map(item => (
          <SpecialItem key={item.name} name={item.name} price="" desc={item.desc} />
        ))}
      </div>
    </div>
  );
}

function ProcessingItem({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="border-l-4 border-brick pl-6 py-2 group cursor-default">
      <h4 className="text-2xl font-serif text-forest group-hover:text-brick transition-colors">{title}</h4>
      <p className="text-forest/60 text-sm italic">{desc}</p>
    </div>
  );
}

function AtmosphereTag({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-4 text-forest font-black font-mono text-xs uppercase tracking-[0.2em] group">
      <motion.div whileInView={{ width: [0, 40] }} className="h-[3px] bg-brick group-hover:bg-amber-wood transition-colors" />
      {text}
    </div>
  );
}

function CounterCard({ title, price, img, tag }: { title: string, price: string, img: string, tag: string }) {
  return (
    <motion.div whileHover={{ y: -15 }} className="group cursor-pointer">
      <div className="relative h-[500px] mb-8 overflow-hidden bg-forest shadow-2xl">
        <img src={img} alt={title} className="w-full h-full object-cover contrast-125 brightness-90 group-hover:scale-110 transition-transform duration-[1.5s] opacity-80 group-hover:opacity-100" />
        <div className="absolute top-6 left-6 z-10">
          <span className="bg-brick text-white px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em] font-black shadow-lg">{tag}</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
      </div>
      <h3 className="text-3xl font-serif text-forest mb-2 group-hover:text-brick transition-all font-bold">{title}</h3>
      <p className="font-mono text-lg text-amber-wood font-black">{price}</p>
    </motion.div>
  );
}

function SpecialItem({ name, price, desc }: { name: string, price: string, desc: string }) {
  return (
    <div className="group border-b border-white/5 pb-8 hover:border-brick/30 transition-all duration-500">
      <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-3 gap-2">
        <h4 className="text-3xl md:text-3xl font-serif italic text-smoke-white group-hover:text-brick transition-colors font-medium">
          {name}
        </h4>
        <span className="font-mono text-xl text-amber-wood font-bold">{price}</span>
      </div>
      <p className="text-smoke-white/50 font-sans text-sm md:text-base italic max-w-2xl leading-relaxed">
        {desc}
      </p>
    </div>
  );
}

function SocialLink({ icon }: { icon: ReactNode }) {
  return (
    <a href="#" className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-brick hover:border-brick transition-all duration-300 text-white/60 hover:text-white">
      {icon}
    </a>
  );
}

function ContactItem({ icon, text }: { icon: ReactNode, text: string }) {
  return (
    <div className="flex items-center gap-5 text-white/60 hover:text-white transition-all group">
      <div className="text-brick group-hover:rotate-12 transition-transform">{icon}</div>
      <span className="text-base font-sans font-medium">{text}</span>
    </div>
  );
}
